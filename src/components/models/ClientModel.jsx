import React, { useEffect, useState } from 'react'
import { useSearchClientQuery } from '../../store/store';
import { useSelector } from 'react-redux';
import { Button, Input, Table } from 'antd';

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
      if (user.is_staff === true) {
      } else {
        setUser_id(user.id);
      }
    }, [user]);
    const [page, setPage] = useState(1);
    const [table_page, setTable_page] = useState(1);
    useEffect(() => {
     if (table_page/2 % 1 === 0.5) {
        setPage(Math.round(table_page/2))
      }
    }, [table_page]);

  
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
          width:60,
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
          title: 'Company Name',
          dataIndex: 'company_name',
          key: 'id',
    
     
        },
        {
          title: 'Action',
          key: 'id',
          fixed: 'right',
          width: 100,
          render: (record) => <a onClick={()=>editfun(record)}>ADD</a>,
    
    
        }
      ]
  return (
    <>
    <div className="model-con">
            <div className="model-box">
            <Input
              autoFocus
              type="text"
              placeholder="Hello"
              value={client_name_search}
              onChange={(e) => setclient_name_search(e.target.value)}
              style={{marginBottom:"30px"}}
            />
            <Table
      className="custom-table-ant"

            columns={columns}
            loading={client_fetch}
            dataSource={client?.results}
            scroll={{
                x: 1000,
            }}
            pagination={{
              total: client?.count,
              pageSize: 5,
              current: table_page,
              onChange: (page) => {
                setTable_page(page)
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
