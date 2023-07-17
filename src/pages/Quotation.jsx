import React, { useEffect, useState } from 'react';

import ETable from '../components/editable_table/Etable';
import "./../components/editable_table/etable.css"
import { useNavigate } from 'react-router-dom';
import { useDeleteInvoiceMutation, useDeleteQuotationMutation, useFetchQuotationQuery } from '../store/store';
import { useDispatch, useSelector } from 'react-redux';
import { Skeleton, message } from 'antd';
import Slidebar from '../components/sidebar/Slidebar';
const Quotation = () => {
  const navigate = useNavigate();
  const { quotation_page } = useSelector(
    (state) => state.user
  );

  const { user } = useSelector(
    (state) => state.user
  );
  const [user_id, setUser_id] = useState("");
  useEffect(() => {
   if(user.is_staff===true){

   }else{
    setUser_id(user.id)
   }
  }, [user]);

  const {data: data1, isLoading: loading,error:error,isFetching:fetch } = useFetchQuotationQuery({val:quotation_page,id:user_id});
  const [deleteInvoice, deleteInvoiceResponseInfo] = useDeleteQuotationMutation();

console.log(data1)
  const thisfun=(record)=>{
    console.log(record.id)
    navigate(`/view/${record.id}`)

  }
  const dispatch = useDispatch()
  // useEffect(() => {
  //   dispatch(checkAuth());
  // }, []);

  const editfun=(record)=>{
    navigate(`/quotation/${record.id}`)
  }
  const deletethis=(record)=>{
    deleteInvoice(record.id)
  }
  useEffect(() => {
    if(deleteInvoiceResponseInfo?.status==="fulfilled"){
      message.success("Delete Successfull")
  
    }
  }, [deleteInvoiceResponseInfo]);
      const [columns, setColumn] = useState();  

      useEffect(() => {
       if(user_id){
     
         setColumn(
          [
            {
              title: 'Quotation No',
              dataIndex: 'quotation_number',
              key: 'id',
              width:100
            },
              {
                title: 'User',
                dataIndex: 'user_client',
                key: 'id',
              },
              {
                title: 'Client Name',
                dataIndex: 'client_name',
                key: 'id',
              },
              {
                title: 'Client Contact',
                dataIndex: 'client_contact',
                key: 'id',
              },
              {
                title: 'Client Address',
                dataIndex: 'client_address',
                key: 'id',
      
              },
              {
                title: 'Action',
                key: 'id',
      
                render: (record) => <a onClick={()=>editfun(record)}>Edit</a>,
              },
              {
                title: 'Action',
                key: 'id',
                fixed: 'right',
                render: (record) => <a onClick={()=>thisfun(record)}>View</a>,
      
              },
             
            ]
         )
       }else{
         setColumn([
          {
            title: 'Quotation No',
            dataIndex: 'quotation_number',
            key: 'id',

            width:110

          },
            {
              title: 'User',
              dataIndex: 'user_client',
              key: 'id',
            },
            {
              title: 'Client Name',
              dataIndex: 'client_name',
              key: 'id',
            },
            {
              title: 'Client Contact',
              dataIndex: 'client_contact',
              key: 'id',
            },
            {
              title: 'Client Address',
              dataIndex: 'client_address',
              key: 'id',
    
            },
            {
              title: 'Action',
              key: 'id',
    
              render: (record) => <a onClick={()=>editfun(record)}>Edit</a>,
            },
            {
              title: 'Action',
              key: 'id',
              render: (record) => <a onClick={()=>thisfun(record)}>View</a>,
    
            },
            {
              title: 'Action',
              key: 'id',
              fixed: 'right',
              render: (record) => <a onClick={()=>deletethis(record)}>Delete</a>,
    
            },
          ])
       }
      }, [user_id]);
    return (
        <>
        <Slidebar/>
            {/* <Navbar/> */}
            <div className='for-etable'>
                <h2 className='e-table-h2'>Quotation Table</h2>
                {
                  loading?<Skeleton/>:
        <ETable field={"quotation"}page={quotation_page} data={data1} loading={fetch} error={error} columns={columns}/>
                }
            </div>
        </>
    );
}

export default Quotation;
