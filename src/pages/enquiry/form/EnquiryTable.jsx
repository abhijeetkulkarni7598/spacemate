import React, { useEffect, useState } from "react";
import ETable from "../../../components/editable_table/Etable";
import Slidebar from "../../../components/sidebar/Slidebar";
import { Popconfirm, Select, Skeleton, message } from "antd";
import {
  useFetchCustomerQuery,
  useFetchEnquiryQuery,
  useUpdateEnquiryMutation,
} from "../../../store/store";
import { BiEdit, BiTrash } from "react-icons/bi";
import { Option } from "antd/es/mentions";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const EnquiryTable = () => {
  const [updateEnquiry, updateEnquiryResponseInfo] = useUpdateEnquiryMutation();
  useEffect(() => {
    if (updateEnquiryResponseInfo?.isSuccess) {
      message.success("User Set Successfull");
    }
  }, [updateEnquiryResponseInfo]);
  const navigate = useNavigate();
  const { user, userToken, checkAuthLoading, isAuthenticated } = useSelector(
    (state) => state.user
  );
 const [user_id, setUser_id] = useState("");

  const {
    data: data,
    isLoading: loading,
    isFetching: fetch,
    error: error,
  } = useFetchEnquiryQuery({user:user_id});
  const {
    data: customer_data,
    isLoading: customer_loading,
    isFetching: customer_fetch,
    error: customer_error,
  } = useFetchCustomerQuery();
  const [columns, setColumn] = useState();

  const create_client = () => {};
  const deletethis = (e) => {
    e.stopPropagation();
  };
  const editfun = () => {};
  const navi = (data) => {
    navigate(`/design-table/${data.id}`);
  };
  const handleSelect = (data, record) => {
    const { user, floor_plain, ...other } = record;
    const newData = { user: data, ...other };

    updateEnquiry(newData);
  };
  useEffect(() => {
    if (user?.is_customer) {
setUser_id(user?.id)
    }
  }, [user]);
  const client_page = 1;
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
            return <span>{client_page * 10 - 10 + index + 1}</span>;
          },
        },
        {
          title: "Name",
          dataIndex: "name",
          key: "id",
          width: "100",
          fixed: "left",

          //   ...getColumnSearchProps('name'),
        },

        {
          title: "Cx Email",
          dataIndex: "email",
          key: "id",
          width: 200,
        },
        {
          title: "User",
          dataIndex: "user",
          key: "id",
          width: "15%",
          render: (text, record, index) => {
            return (
              <p>
                {
                  customer_data?.filter(
                    (item) => parseInt(item.id) === parseInt(record.user)
                  )[0]?.username
                }
              </p>
            );
          },
        },
        {
          title: "Floor Plan",
          dataIndex: "floor_plain",
          key: "id",
          width: 300,
        },
        {
          title: "Phone",
          dataIndex: "mobile",
          key: "id",
        },

        {
          title: "Address",
          dataIndex: "address",
          key: "id",
          width: 300,
        },
        {
          title: " ",
          key: "id",
          fixed: "right",
          width: 50,
          render: (record) => (
            <BiEdit
              className="bi-edit"
              style={{ width: "100%", height: "20px" }}
              onClick={(e) => {
                e.stopPropagation();
                editfun(record);
              }}
            />
          ),
        },
      ]);
    } else {
      setColumn([
        {
          title: "Sr.no",
          dataIndex: "id",
          key: "id",
          //   ...getColumnSearchProps('name'),
          width: 100,
          fixed: "left",
          render: (text, record, index) => {
            return <span>{client_page * 10 - 10 + index + 1}</span>;
          },
        },
        {
          title: "Name",
          dataIndex: "name",
          key: "id",
          width: "100",

          //   ...getColumnSearchProps('name'),
        },

        {
          title: "Cx Email",
          dataIndex: "email",
          key: "id",
          width: 200,
        },
        {
          title: "User",
          dataIndex: "user",
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
                  onSelect={(data) => handleSelect(data, record)}
                  value={
                    customer_data?.filter(
                      (item) => parseInt(item.id) === parseInt(record.user)
                    )[0]?.username
                  }
                  style={{ width: "150px" }}
                >
                  {customer_data?.map((item) => (
                    <Option value={item.id} key={item.id}>
                      {item.username}
                    </Option>
                  ))}
                </Select>
              </>
            );
          },
        },
        {
          title: "Floor Plan",
          dataIndex: "floor_plain",
          key: "id",
          width: 300,
        },
        {
          title: "Phone",
          dataIndex: "mobile",
          key: "id",
        },

        {
          title: "Address",
          dataIndex: "address",
          key: "id",
          width: 300,
        },
        {
          title: " ",
          key: "id",
          fixed: "right",
          width: 50,
          render: (record) => (
            <BiEdit
              className="bi-edit"
              style={{ width: "100%", height: "20px" }}
              onClick={(e) => {
                e.stopPropagation();
                editfun(record);
              }}
            />
          ),
        },

        {
          title: " ",
          key: "id",
          width: 50,
          fixed: "right",
          render: (record) => (
            <Popconfirm
              title="Sure to delete?"
              onConfirm={(e) => deletethis(e, record)}
              onCancel={(e) => e.stopPropagation()}
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
  }, [customer_data, data,user_id]);
  return (
    <div>
      {/* <Navbar/> */}
      <Slidebar />

      <div className="for-etable">
        <h2 className="e-table-h2">Enquiry Table</h2>
        {user_id?null:

        <button
        style={{
            padding: "10px 40px",
            borderRadius: "7px",
            border: "none",
            backgroundColor: "#0253a2",
            color: "white",
            fontSize: "15px",
            fontWeight: "bolder",
            cursor: "pointer",
            marginBottom: "30px",
          }}
          onClick={create_client}
        >
          Create New Enquiry
        </button>
        }

        {loading && columns ? (
          <Skeleton />
        ) : (
          <ETable
            data={data}
            columns={columns}
            loading={fetch || updateEnquiryResponseInfo?.isLoading}
            page={client_page}
            error={error}
            navi={navi}
          />
        )}
        {/* {show ? <ClientForm /> : null} */}
      </div>
    </div>
  );
};

export default EnquiryTable;
