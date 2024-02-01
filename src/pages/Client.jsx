import React, { useEffect, useState } from 'react';

import ETable from '../components/editable_table/Etable';
import "./../components/editable_table/etable.css"
import { useNavigate, useParams } from "react-router-dom";
import { useCreateClientMutation, useCreateCustomerMutation, useDeleteClientMutation, useFetchClientQuery, useFetchStatusQuery, useGetClientQuery, useUpdateEnquiryMutation } from '../store/store';
import { useDispatch, useSelector } from 'react-redux';
import { checkAuth } from '../store/mutation/userSlice';
import { Button, Input, Popconfirm, Select, Skeleton, message } from 'antd';
import useFormItemStatus from 'antd/es/form/hooks/useFormItemStatus';

import { ReactComponent as Cross } from "./../assets/img/close.svg";
import Clientform from '../components/quotationfrom/Clientform';
import Slidebar from '../components/sidebar/Slidebar';
import { BiEdit, BiTrash } from 'react-icons/bi';
import { Option } from 'antd/es/mentions';






const Client = () => {
  const [show, setShow] = useState(false);
  const [id, setid] = useState();
  const navigate = useNavigate();
  const { client_page } = useSelector(
    (state) => state.user
  );
  const { user } = useSelector(
    (state) => state.user
  );
  const [user_id, setUser_id] = useState("");
  useEffect(() => {

   if(user?.is_superuser||user?.is_admin){
    

   }else{
    setUser_id(user?.id)
   }
  }, [user]);
  const { data: data, isLoading: loading,isFetching:fetch ,error:error} = useFetchClientQuery({
    val:client_page,id:user_id,status:"Prospect"
  });

  // const dispatch = useDispatch()
  // useEffect(() => {
  //   dispatch(checkAuth());
  // }, []);
  const [columns, setColumn] = useState();  
  const [createCustomer, createCustomerResponseInfo] = useCreateCustomerMutation();
const [dataInstance, setDataInstance] = useState();
const handleRegister=(record)=>{
  setDataInstance(record)
const newObj={
  username:record.email,
  email:record.email,

  password:"Pass@123"
} 
createCustomer(newObj)
}
const [updateEnquiry, updateEnquiryResponseInfo] = useUpdateEnquiryMutation();
useEffect(() => {
  if (updateEnquiryResponseInfo?.isSuccess) {
    setDataInstance()
    message.success("User Set Successfull");
  }
  if (updateEnquiryResponseInfo?.isError) {
    setDataInstance()
    message.error("User Set UnSuccessfull");
  }
}, [updateEnquiryResponseInfo]);
const handleSelectStatus = (record) => {
  const { status, floor_plain,user, ...other } = dataInstance;
  const newData = { status: "Client",user:record.id, ...other };
  updateEnquiry(newData);

}
const handleSelect = (data, record) => {
  // record.status=data
  const { customer_status,floor_plain, ...remain } = record;
  const newData = { ...remain,floor_plain, customer_status: data };

  updateEnquiry(newData);
};
const {
  data: status,
  isLoading: statusLoading,
  isFetching: statusFetching,
} = useFetchStatusQuery();
useEffect(() => {
if(createCustomerResponseInfo?.isSuccess){
  console.log(createCustomerResponseInfo?.data)
  handleSelectStatus(createCustomerResponseInfo?.data)
  message.success("Customer Created")
}
if(createCustomerResponseInfo?.isError){
  message.error("Customer Not Created")
  setDataInstance()

}
}, [createCustomerResponseInfo]);
 useEffect(() => {
  if(user_id){

    setColumn(
      [
        {
            title: 'Sr.no',
            dataIndex: 'id',
            key: 'id',
          //   ...getColumnSearchProps('name'),
          width:100,
          fixed:"left",
          render: (text, record, index) => {
            return <span>{client_page * 10 - 10 + index + 1}</span>;
          },
          },
        {
          title: 'Name',
          dataIndex: 'name',
          key: 'id',
          width:"100",
          fixed:"left",
    
        //   ...getColumnSearchProps('name'),
        },
        {
          title: 'Representative',
          dataIndex: 'created_by',
          key: 'id',
        //   ...getColumnSearchProps('age'),
        },
  
        {
          title: 'Cx Email',
          dataIndex: 'email',
          key: 'id',
          width:200

     
        },
        {
          title: 'Phone',
          dataIndex: 'modile',
          key: 'id',
     
        },

        {
          title: 'Site Address',
          dataIndex: 'address',
          key: 'id',
          width:300
    
     
        },
        {
          title: ' ',
          key: 'id',
          fixed: 'right',
          width: 50,
          render: (record) =>   <BiEdit
          className="bi-edit"

          style={{ width: "100%", height: "20px" }}
          onClick={(e) => {
            e.stopPropagation();
            editfun(record);
          }}
        />,
    
    
        },
      ]
    )
  }else{
    setColumn([
      {
          title: 'Sr.no',
          dataIndex: 'id',
          key: 'id',
        //   ...getColumnSearchProps('name'),
        width:100,
        render: (text, record, index) => {
          return <span>{client_page * 10 - 10 + index + 1}</span>;
        },
        },
      {
        title: 'Name',
        dataIndex: 'name',
        key: 'id',
        width:"100",
  
      //   ...getColumnSearchProps('name'),
      },
      {
        title: 'Representative',
        dataIndex: 'created_by',
        key: 'id',
      //   ...getColumnSearchProps('age'),
      },
      {
        title: "Status",
        dataIndex: "customer_status",
        key: "id",
        width: 160,
        render: (text, record, index) => {
          return (
            <>
              {/* {
                status?.filter(
                  (item) => parseInt(item.id) === parseInt(record.status)
                )[0]?.status
              } */}

              <Select
                optionFilterProp="children"

                onSelect={(data) => handleSelect(data, record)}
                value={
                  status?.filter(
                    (item) => parseInt(item.id) === parseInt(record.customer_status)
                  )[0]?.status
                }
                style={{ width: "150px" }}
              >
                {status?.map((item) => (
                  <Option value={item.id} key={item.id}>
                    {item.status}
                  </Option>
                ))}
              </Select>
            </>
          );
        },
      },

      {
        title: 'Cx Email',
        dataIndex: 'email',
        key: 'id',
        width:200

   
      },
      {
        title: 'Phone',
        dataIndex: 'mobile',
        key: 'id',
   
      },

      {
        title: 'Site Address',
        dataIndex: 'address',
        key: 'id',
        width:300
  
   
      },
      {
        title: ' ',
        key: 'id',
        fixed: 'right',
        width:120,

        render: (record) => 
        
  <Popconfirm title="Sure to Create An User?" onConfirm={() => handleRegister(record)}>
  <Button size="small"  >

Register
     </Button>
</Popconfirm>
  
      },
      {
        title: ' ',
        key: 'id',
        fixed: 'right',
        width: 50,
        render: (record) =>   <BiEdit
        className="bi-edit"

        style={{ width: "100%", height: "20px" }}
        onClick={(e) => {
          e.stopPropagation();
          editfun(record);
        }}
      />,
  
  
      },
      
      {
        title: ' ',
        key: 'id',
        width: 50,
        fixed:'right',
        render: ( record) =>
          <Popconfirm title="Sure to delete?" onConfirm={() => deletethis(record)}>
            {/* <a style={{color:"red"}}>Delete</a> */}
            <BiTrash
            className="bi-edit"

                onClick={(e) => {
                  e.stopPropagation();
                }}
                style={{ width: "100%", height: "20px", color: "red" }}
              />
          </Popconfirm>
  
  
      },
    ])
  }
 }, [user_id,client_page,status]);
 const [formdata, setFormdata] = useState();
  
const create_client=()=>{
  // navigate(`/create_client`)
  setFormdata()
  setid()
setShow(true)
}
  const [deleteClient, deleteClientResponseInfo] = useDeleteClientMutation();

  useEffect(() => {
    if(deleteClientResponseInfo?.status==="fulfilled"){
      message.success("Delete Successfull")
  
    }
  }, [deleteClientResponseInfo]);
  const editfun=(record)=>{
    // navigate(`/create_client/${record.id}`)
    setShow(true)
    setFormdata(record)
    setid(record.id)

    
  }
  const deletethis=(record)=>{
    // navigate(`/create_client/${record.id}`)
    console.log("delete this ",record.id)
    deleteClient(record.id)
  }
  const shows=(data)=>{
    
    setShow(data)
  }
  // const { id } = useParams();
  // const {data: formdata, isLoading: client_loading,isSuccess:here} = useGetClientQuery(id);
  const CreateClinet = () => {
  
    
        return (
            <div>
                  {id?<h2 style={{textAlign:"center",marginBottom:"20px"}}>Update Client</h2>:<h2 style={{textAlign:"center",marginBottom:"20px"}}>Create Prospect</h2>}
                  {id?                <Clientform show={shows} datas={formdata} id={id}/>:
                <Clientform show={shows} id={id}/>
                  }
            </div>
        );
    }
    
  const ClientForm=()=>{
    return(
      <>
      <div className="model-con">
              <div className="model-box" style={{width:"80vw"}}>
          {/* <Cross  className="model-cross" onClick={()=>setShow(false)}/> */}
      <CreateClinet/>
             
              </div>
              </div>
              </>
    )
  }
const navi=()=>{

}
    return (
        <div>
            {/* <Navbar/> */}
            <Slidebar/>

            <div className='for-etable'>
                {/* <h2 className='e-table-h2' >Prospect List</h2> */}
                {/* <button  style={{padding:"10px 40px" ,borderRadius:"7px" ,border:"none",backgroundColor:"#0253a2",color:"white",fontSize:"15px",fontWeight:"bolder",cursor:"pointer",marginBottom:"30px"}} onClick={create_client}>Create New Prospect</button> */}
            
                {loading&&columns?<Skeleton />:
        <ETable data={data}  columns={columns} loading={fetch||statusFetching}  page={client_page} error={error} navi={navi}/>
                }
           {show?<ClientForm/>:null
           }
            </div>
        </div>
    );
}

export default Client;
