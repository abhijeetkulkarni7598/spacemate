import React, { useEffect, useState } from 'react'
import Slidebar from '../../components/sidebar/Slidebar'
import { useFetchOrderQuery, useUpdateOrderMutation } from '../../store/store';
import { useSelector } from 'react-redux';
import { Popconfirm, Select, Skeleton, message } from 'antd';
import { BiTrash } from 'react-icons/bi';
import ETable from '../../components/editable_table/Etable';
import { IDate, PaymentArray } from '../../components/Functions/State';
import { Option } from 'antd/es/mentions';

const OrderTable = () => {
    const { user, userToken,order_page, checkAuthLoading ,isAuthenticated} = useSelector(
        (state) => state.user
      );
      const [updateEnquiry, updateEnquiryResponseInfo] = useUpdateOrderMutation();
      useEffect(() => {
        if (updateEnquiryResponseInfo?.isSuccess) {
          message.success("Stage Updated");
        }
      }, [updateEnquiryResponseInfo]);
  const [columns, setColumn] = useState();
  const [user_id, setUser_id] = useState("");
  useEffect(() => {
    if (user?.is_superuser || user?.is_admin) {
    } else {
      setUser_id(user?.id);
    }
  }, [user]);
    const {
        data: data,
        isLoading: loading,
        isFetching: fetch,
        error: error,
      } = useFetchOrderQuery({page:order_page});
      const navi=(data)=>{
        console.log(data)
      }
      const deletethis=(data)=>{
        console.log(data)
      }
      const handleSelectCustomerStatus=(data,record)=>{
        updateEnquiry({id:record.id,stage:data})
        console.log(data)
        console.log(record)
      }
      useEffect(() => {
        if (user_id) {
          setColumn([
            {
              title: "Sr.no",
              dataIndex: "id",
              key: "id",
              //   ...getColumnSearchProps('name'),
              width: 100,
              fixed: "left",
              render: (text, record, index) => {
                return <span>{order_page * 10 - 10 + index + 1}</span>;
              },
            },
            {
              title: "Order id",
              dataIndex: "order_payment_id",
              key: "order_payment_id",
              width: "100",
              fixed: "left",
    
              //   ...getColumnSearchProps('name'),
            },
            {
              title: "order_product",
              dataIndex: "order_product",
              key: "order_product",
              //   ...getColumnSearchProps('age'),
            },
    
            {
              title: "order_amountl",
              dataIndex: "order_amount",
              key: "order_amount",
              width: 200,
            },
            {
              title: "order_date",
              dataIndex: "order_date",
              key: "id",
              render: (text, record, index) => {
                return (
                  <>
                   {IDate(text)}
                  </>
                );
              },
            },
    
            {
              title: "stage",
              dataIndex: "stage",
              key: "stage",
              width: 300,
            },
          
          ]);
        } else {
          setColumn([
            {
              title: "Sr.no",
              dataIndex: "id",
              key: "id",
              fixed: "left",

              //   ...getColumnSearchProps('name'),
              width: 100,
              render: (text, record, index) => {
                return <span>{order_page * 10 - 10 + index + 1}</span>;
              },
            },
            {
                title: "Order id",
                dataIndex: "order_payment_id",
                key: "order_payment_id",
                width: "100",
      
                //   ...getColumnSearchProps('name'),
              },
              {
                title: "order_product",
                dataIndex: "order_product",
                key: "order_product",
                //   ...getColumnSearchProps('age'),
              },
      
              {
                title: "order_amountl",
                dataIndex: "order_amount",
                key: "order_amount",
                width: 200,
              },
              {
                title: "order_date",
                dataIndex: "order_date",
                key: "id",
                render: (text, record, index) => {
                  return (
                    <>
                     {IDate(text)}
                    </>
                  );
                },
              },
      
              
            
              {
                title: "Stage",
                dataIndex: "stage",
                key: "stage",
                width: 180,
                render: (text, record, index) => {
                  return (
                    <>
                      <Select
                        onSelect={(data) => handleSelectCustomerStatus(data, record)}
                       value={text}
                        style={{ width: "150px" }}
                      >
                        {PaymentArray?.map((item) => (
                          <Option value={item} key={item}>
                            {item}
                          </Option>
                        ))}
                      </Select>
                
                    </>
                  );
                },
              },
           
            {
              title: " ",
              key: "id",
              width: 50,
              fixed: "right",
              render: (record) => (
                <Popconfirm
                  title="Sure to delete?"
                  onConfirm={() => deletethis(record)}
                >
                  {/* <a style={{color:"red"}}>Delete</a> */}
                  <BiTrash
                    className="bi-edit"
                    onClick={(e) => {
                      e.stopPropagation();
                    }}
                    style={{ width: "100%", height: "20px", color: "red" }}
                  />
                </Popconfirm>
              ),
            },
          ]);
        }
      }, [user_id, order_page]);
  return (
    <>
      {/* <Navbar/> */}
      <Slidebar />

      <div className="for-etable">
        <h2 className='e-table-h2' >Order Table</h2>
        {/* <button  style={{padding:"10px 40px" ,borderRadius:"7px" ,border:"none",backgroundColor:"#0253a2",color:"white",fontSize:"15px",fontWeight:"bolder",cursor:"pointer",marginBottom:"30px"}} onClick={create_client}>Create New Prospect</button> */}

        {loading && columns ? (
          <Skeleton />
        ) : (
          <ETable
            data={data}
            columns={columns}
            loading={fetch}
            page={order_page}
            error={error}
            field={"order"}
            navi={navi}
          />
        )}
      </div>
    </>
  )
}

export default OrderTable
