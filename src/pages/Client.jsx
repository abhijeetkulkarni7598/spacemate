import React, { useEffect, useState } from 'react';

import ETable from '../components/editable_table/Etable';
import "./../components/editable_table/etable.css"
import { useNavigate } from "react-router-dom";
import { useDeleteClientMutation, useFetchClientQuery } from '../store/store';
import { useDispatch, useSelector } from 'react-redux';
import { checkAuth } from '../store/mutation/userSlice';
import { Skeleton, message } from 'antd';
import useFormItemStatus from 'antd/es/form/hooks/useFormItemStatus';
import Slidebar from '../components/sidebar/Slidebar';

const Client = () => {
  const navigate = useNavigate();
  const { client_page } = useSelector(
    (state) => state.user
  );
  const { user } = useSelector(
    (state) => state.user
  );
  const [user_id, setUser_id] = useState("");
  useEffect(() => {

   if(user?.is_staff===true){
    

   }else{
    setUser_id(user?.id)
   }
  }, [user]);
  const { data: data, isLoading: loading,isFetching:fetch ,error:error} = useFetchClientQuery({
    val:client_page,id:user_id
  });

  // const dispatch = useDispatch()
  // useEffect(() => {
  //   dispatch(checkAuth());
  // }, []);
  const [columns, setColumn] = useState();  

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
          },
        {
          title: 'Name',
          dataIndex: 'contact_person_name',
          key: 'id',
          width:"100",
    
        //   ...getColumnSearchProps('name'),
        },
        {
          title: 'PERSON WHO MADE It',
          dataIndex: 'user_client_name',
          key: 'id',
        //   ...getColumnSearchProps('age'),
        },
        {
          title: 'Allocated Name',
          dataIndex: 'allocate_name',
          key: 'id',
        //   ...getColumnSearchProps('address'),
        //   sorter: (a, b) => a.address.length - b.address.length,
        //   sortDirections: ['descend', 'ascend'],
        },
        {
          title: 'Email',
          dataIndex: 'email',
          key: 'id',
     
        },
        {
          title: 'Phone',
          dataIndex: 'phone',
          key: 'id',
     
        },
        {
          title: 'Company Name',
          dataIndex: 'company_name',
          key: 'id',
    
     
        },
        {
          title: 'Site Address',
          dataIndex: 'site_address',
          key: 'id',
          width:300
    
     
        },
        {
          title: 'Action',
          key: 'id',
          fixed: 'right',
          render: (record) => <a onClick={()=>editfun(record)}>Edit</a>,
    
    
        }
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
        },
      {
        title: 'Name',
        dataIndex: 'contact_person_name',
        key: 'id',
        width:"100",
  
      //   ...getColumnSearchProps('name'),
      },
      {
        title: 'PERSON WHO MADE It',
        dataIndex: 'user_client_name',
        key: 'id',
      //   ...getColumnSearchProps('age'),
      },
      {
        title: 'Allocated Name',
        dataIndex: 'allocate_name',
        key: 'id',
      //   ...getColumnSearchProps('address'),
      //   sorter: (a, b) => a.address.length - b.address.length,
      //   sortDirections: ['descend', 'ascend'],
      },
      {
        title: 'Email',
        dataIndex: 'email',
        key: 'id',
   
      },
      {
        title: 'Phone',
        dataIndex: 'phone',
        key: 'id',
   
      },
      {
        title: 'Company Name',
        dataIndex: 'company_name',
        key: 'id',
  
   
      },
      {
        title: 'Site Address',
        dataIndex: 'site_address',
        key: 'id',
        width:300
  
   
      },
      {
        title: 'Action',
        key: 'id',
        render: (record) => <a onClick={()=>editfun(record)}>Edit</a>,
  
  
      },
      
      {
        title: 'Action',
        key: 'id',
        fixed:'right',
        render: (record) => <a onClick={()=>deletethis(record)}>Delete</a>,
  
  
      },
    ])
  }
 }, [user_id]);
  
const create_client=()=>{
  navigate(`/create_client`)

}
  const [deleteClient, deleteClientResponseInfo] = useDeleteClientMutation();

  useEffect(() => {
    if(deleteClientResponseInfo?.status==="fulfilled"){
      message.success("Delete Successfull")
  
    }
  }, [deleteClientResponseInfo]);
  const editfun=(record)=>{
    navigate(`/create_client/${record.id}`)
  }
  const deletethis=(record)=>{
    // navigate(`/create_client/${record.id}`)
    console.log("delete this ",record.id)
    deleteClient(record.id)
  }
 

    


    return (
        <div >
          <Slidebar/>
            {/* <Navbar/> */}
      
            <div className='for-etable'>
                <h2 className='e-table-h2' >Client Table </h2>
            
                {loading&&columns?<Skeleton />:
        <ETable data={data}  columns={columns} loading={fetch}  page={client_page} error={error}/>
                }
                <button onho style={{padding:"10px 40px" ,borderRadius:"7px" ,border:"none",backgroundColor:"#323a3d",color:"white",fontSize:"15px",fontWeight:"bolder",cursor:"pointer"}} onClick={create_client}>Create Client</button>
            </div>
        </div>
    );
}

export default Client;
