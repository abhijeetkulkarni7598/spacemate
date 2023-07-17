import React, { useEffect, useState } from 'react'
import ETable from '../components/editable_table/Etable'
import { Input, Skeleton, message } from 'antd'
import { useSelector } from 'react-redux';
import { useDeleteItemMutation, useFetchItemsQuery } from '../store/store';
import { useNavigate } from 'react-router-dom';
import Slidebar from '../components/sidebar/Slidebar';

export default function Item() {


    const { item_page } = useSelector(
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
    const [search, setSearch] = useState("");


    const { data: data, isLoading: loading,isFetching:fetch ,error:error} = useFetchItemsQuery({
        val:item_page,search:search
      })
      const [deleteItem, deleteItemResponseInfo] = useDeleteItemMutation();
      useEffect(() => {
        if(deleteItemResponseInfo?.status==="fulfilled"){
          message.success("Delete Successfull")
      
        }
      }, [deleteItemResponseInfo]);
  const navigate = useNavigate();

const create_item=()=>{
    navigate("/item-create")
}

const editfun=(data)=>{

    navigate(`/item-create/${data.id}`)
}
const deletethis=(data)=>{
    console.log(data)
    if(data?.id){

        deleteItem(data?.id)
    }
}
    
      const [columns, setColumn] = useState();  

      useEffect(() => {
       if(user_id){
     
         setColumn(
          [
            {
                title: 'Sr.no',
                dataIndex: 'id',
                key: 'id',
              width:100

              //   ...getColumnSearchProps('name'),
              },
            {
              title: 'Item Name',
              dataIndex: 'item_name',
              key: 'id',
            //   ...getColumnSearchProps('name'),
            },
            {
              title: 'Item Category',
              dataIndex: 'item_category',
              key: 'id',
            //   ...getColumnSearchProps('age'),
            },
            {
              title: 'Size',
              dataIndex: 'size',
              key: 'id',
            //   ...getColumnSearchProps('address'),
            //   sorter: (a, b) => a.address.length - b.address.length,
            //   sortDirections: ['descend', 'ascend'],
            },
            {
              title: 'Unit',
              dataIndex: 'unit',
              key: 'id',
         
            },
            {
              title: 'Costing',
              dataIndex: 'costing',
              key: 'id',
              width:100,

         
            },
           
            {
                title: 'Action',
                key: 'id',
                fixed: 'right',
              width:100,

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
              width:100
            //   ...getColumnSearchProps('name'),
            },
          {
            title: 'Item Name',
            dataIndex: 'item_name',
            key: 'id',
          //   ...getColumnSearchProps('name'),
          },
          {
            title: 'Item Category',
            dataIndex: 'item_category',
            key: 'id',
          //   ...getColumnSearchProps('age'),
          },
          {
            title: 'Size',
            dataIndex: 'size',
            key: 'id',
          //   ...getColumnSearchProps('address'),
          //   sorter: (a, b) => a.address.length - b.address.length,
          //   sortDirections: ['descend', 'ascend'],
          },
          {
            title: 'Unit',
            dataIndex: 'unit',
            key: 'id',
       
          },
          {
            title: 'Costing',
            dataIndex: 'costing',
            key: 'id',
       
          },
         
          {
              title: 'Action',
              key: 'id',
              width:100,

              render: (record) => <a onClick={()=>editfun(record)}>Edit</a>,
    
            },
            {
              title: 'Action',
              key: 'id',
              fixed: 'right',
              width:100,

              render: (record) => <a onClick={()=>deletethis(record)}>Delete</a>,
    
            },
        ])
       }
      }, [user_id]);
  return (
    <>
<Slidebar/>
    <div className='for-etable'>
        <h2 className='e-table-h2' >Item Table </h2>
        <Input    autoFocus
        type="text" placeholder="Hello" value={search} onChange={(e)=>setSearch(e.target.value)}   style={{marginBottom:"20px"}} />
        {loading?<Skeleton />:
<ETable data={data}  columns={columns} loading={fetch} field={"item"} page={item_page} error={error}/>
        }
        <button onho style={{padding:"10px 40px" ,borderRadius:"7px" ,border:"none",backgroundColor:"#323a3d",color:"white",fontSize:"15px",fontWeight:"bolder",cursor:"pointer"}} onClick={create_item}>Create Item</button>
    </div>
</>
  )
}
