import React, { useEffect, useState } from 'react'
import { useSearchClientQuery } from '../../store/store';
import { useSelector } from 'react-redux';
import { Button, Input, Table } from 'antd';
import { BiPlus } from 'react-icons/bi';

export default function ClientModel({show,client_data}) {
    const editfun=(data)=>{
        console.log(data)
        client_data(data)
        show(false)
    }
    const [client_name_search, setclient_name_search] = useState("");
    const { user } = useSelector((state) => state.user);
    const [user_id, setUser_id] = useState("");
    useEffect(() => {
      if (user.role === "ADMIN") {
      } else {
        setUser_id(user.id);
      }
    }, [user]);
    const [page, setPage] = useState(1);
    const [table_page, setTable_page] = useState(1);
    // useEffect(() => {
    //  if (table_page/2 % 1 === 0.5) {
    //   console.log("page",Math.round(table_page/2))
    //     setPage(Math.round(table_page/2))
    //   }
    // }, [table_page]);

  
    const { data: client, isLoading: clientLoading ,isFetching:client_fetch} = useSearchClientQuery({
      val: client_name_search,
      id: user_id,
      page:page,
    });


    const columns= [
        {
            title: 'Sr.no',
            dataIndex: 'id',
            key: 'id',
          //   ...getColumnSearchProps('name'),
          width:70,
          render: (text, record, index) => {

            return <span>{page * 10 - 10 + index + 1}</span>;
          },
          },
        {
          title: 'Name',
          dataIndex: 'contact_person_name',
          key: 'id',
          width:200,
    
        //   ...getColumnSearchProps('name'),
        },
        {
          title: 'Email',
          dataIndex: 'email',
          key: 'id',
          width:200,

     
        },
        {
          title: 'Phone',
          dataIndex: 'phone',
          key: 'id',
     
        },
    
        {
          title: 'ADD',
          key: 'id',
          fixed: 'right',
          width: 80,
          render: (record) => <Button type='primary' style={{display:"flex",justifyContent:"center",alignItems:"center"}} className='hover' onClick={()=>editfun(record)}>

            <BiPlus/>
          </Button>,
    
    
        }
      ]
  return (
    <>
    <div className="model-con">
            <div className="model-box" style={{padding:"30px "}}>
            <Input
              autoFocus
              type="text"
              placeholder="Hello"
              value={client_name_search}
              onChange={(e) => setclient_name_search(e.target.value)}
              style={{marginBottom:"30px"}}
            />
            <Table
      className="custom-table-ant custom-table-with-low-padding"

            columns={columns}
            loading={client_fetch}
            dataSource={client?.results}
            scroll={{
                x: 1000,
            }}
            pagination={{
              total: client?.count,
              pageSize: 10,
              current: page,
              onChange: (page) => {
                setPage(page)
              },
            }}
          ></Table>    
              <Button danger type="primary" style={{background:"var(--pr-color) "}} onClick={()=>show(false)}>
               Cancel
                  </Button>
            </div>
            </div>
            </>
  )
}
