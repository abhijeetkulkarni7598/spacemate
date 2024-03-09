import React, { useEffect, useState } from "react";
import ETable from "../../../components/editable_table/Etable";
import Slidebar from "../../../components/sidebar/Slidebar";
import { Popconfirm, Select, Skeleton, message } from "antd";
import {
  useFetchCustomerQuery,
  useFetchDesignsQuery,
  useFetchEnquiryQuery,
  useUpdateDesignsMutation,

} from "../../../store/store";
import { BiEdit, BiTrash } from "react-icons/bi";
import { Option } from "antd/es/mentions";
import { ApprovalArray } from "../../../components/Functions/State";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const DesignTable = () => {
  const {id}=useParams();

  const [updateDesign, UpdateDesignsResponseInfo] = useUpdateDesignsMutation();
  useEffect(() => {
    if (UpdateDesignsResponseInfo?.isSuccess) {
      message.success("Approval Set Successfull");
    }
  }, [UpdateDesignsResponseInfo]);
  const { user, userToken, checkAuthLoading, design_page,isAuthenticated } = useSelector(
    (state) => state.user
  );
  const [approval, setApproval] = useState("");
  const [user_id, setUser_id] = useState("");
  useEffect(() => {
 if(user?.is_customer){
  setApproval("Rejected")
  setUser_id(user.id)
 }
  }, [user]);
  const {
    data: data,
    isLoading: loading,
    isFetching: fetch,
    error: error,
  } = useFetchDesignsQuery({enquiry:id,approval:approval,page:design_page});
  const {
    data: customer_data,
    isLoading: customer_loading,
    isFetching: customer_fetch,
    error: customer_error,
  } = useFetchCustomerQuery();
  const [columns, setColumn] = useState();
  const navigate = useNavigate();
  const create_client = () => {
    navigate(`/design-form/enquiry=${id}`);
  };
  const deletethis = () => {};
  const editfun = (data) => {
    navigate(`/design-form/enquiry=${id}&design=${data.id}`);

  };
  const navi = () => {};
  const handleSelect = (data, record) => {
    const { approval, ...other } = record;
    const newData = { approval: data, ...other };

    updateDesign(newData);
  };


  useEffect(() => {
    if (user_id) {
      setColumn([
        {
          title: "Sr.no",
          dataIndex: "id",
          key: "id",
          //   ...getColumnSearchProps('name'),
          width: 20,
          fixed: "left",
          render: (text, record, index) => {
            return <span>{design_page * 10 - 10 + index + 1}</span>;
          },
        },
        {
          title: "Title",
          dataIndex: "title",
          key: "id",
          width: 100,
          fixed: "left",

          //   ...getColumnSearchProps('name'),
        },
        {
          title: "Approval",
          dataIndex: "approval",
          key: "id",
          width: 100,
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
                    ApprovalArray?.filter((item) => item === record.approval)[0]
                  }
                  style={{ width: "150px" }}
                >
                  {ApprovalArray?.map((item) => (
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
          title: "Image",
          dataIndex: "image",
          key: "id",
          width: 200,

          //   ...getColumnSearchProps('name'),
        },

        {
          title: " ",
          key: "id",
          fixed: "right",
          width: 20,
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
          width: 30,
          fixed: "left",
          render: (text, record, index) => {
            return <span>{design_page * 10 - 10 + index + 1}</span>;
          },
        },
        {
          title: "Title",
          dataIndex: "title",
          key: "id",
          width: 100,

          //   ...getColumnSearchProps('name'),
        },

        {
          title: "Approval",
          dataIndex: "approval",
          key: "id",
          width: 100,
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
                    ApprovalArray?.filter((item) => item === record.approval)[0]
                  }
                  style={{ width: "150px" }}
                >
                  {ApprovalArray?.map((item) => (
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
          title: "Image",
          dataIndex: "image",
          key: "id",
          width: 200,

          //   ...getColumnSearchProps('name'),
        },

        {
          title: " ",
          key: "id",
          fixed: "right",
          width: 20,
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
          width: 20,
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
  }, [customer_data, data]);
  return (
    <div>
      {/* <Navbar/> */}
      <Slidebar />

      <div className="for-etable">
        <h2 className="e-table-h2">Design Table</h2>
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
          Create New Design
        </button>

        {loading && columns ? (
          <Skeleton />
        ) : (
          <ETable
            data={data}
            columns={columns}
            loading={fetch || UpdateDesignsResponseInfo?.isLoading}
            page={design_page}
            error={error}
            navi={navi}
            field={"design"}
            scroll={"100%"}
          />
        )}
        {/* {show ? <ClientForm /> : null} */}
      </div>
    </div>
  );
};

export default DesignTable;
