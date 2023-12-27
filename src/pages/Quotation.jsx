import React, { useEffect, useState } from "react";

import ETable from "../components/editable_table/Etable";
import "./../components/editable_table/etable.css";
import { useNavigate } from "react-router-dom";
import {
  useCreateQuotationMutation,
  useDeleteInvoiceMutation,
  useDeleteQuotationMutation,
  useFetchQuotationQuery,
  useFetchStatusQuery,
} from "../store/store";
import { useDispatch, useSelector } from "react-redux";
import {
  Button,
  Form,
  Input,
  Popconfirm,
  Select,
  Skeleton,
  message,
} from "antd";
import Slidebar from "../components/sidebar/Slidebar";
import { Option } from "antd/es/mentions";
import { BiEdit, BiTrash } from "react-icons/bi";
import { BsEye } from "react-icons/bs";
import { GrView } from "react-icons/gr";
import Search from "antd/es/input/Search";
const Quotation = () => {
  const navigate = useNavigate();
  const { quotation_page } = useSelector((state) => state.user);
  const create_quotation = () => {
    navigate("/create");
  };

  const { user } = useSelector((state) => state.user);
  const [user_id, setUser_id] = useState("");
  useEffect(() => {
    if (user?.is_staff === true) {
    } else {
      setUser_id(user?.id);
    }
  }, [user]);
  const [searchText, setSearchText] = useState("");

  const {
    data: data1,
    isLoading: loading,
    error: error,
    isFetching: fetchDATA,
  } = useFetchQuotationQuery({
    val: quotation_page,
    id: user_id,
    client_name: searchText,
  });
  const [deleteInvoice, deleteInvoiceResponseInfo] =
    useDeleteQuotationMutation();

  console.log(data1);
  const thisfun = (record) => {
    console.log(record.id);
    navigate(`/view/${record.id}`);
  };
  const [tempId, setTempId] = useState(0);

  const [createQuotation, creatQuotationResponseInfo] =
    useCreateQuotationMutation();
  const [deleteQuotation, deleteQuotationResponseInfo] =
    useDeleteQuotationMutation();
  useEffect(() => {
    if (creatQuotationResponseInfo?.isSuccess === true) {
      if (tempId !== 0) {
        // deleteQuotation(tempId)
      }
    }
  }, [creatQuotationResponseInfo]);
  useEffect(() => {
    if (deleteQuotationResponseInfo?.isSuccess === true) {
      message.success("Quotation Updated");
    }
  }, [deleteQuotationResponseInfo]);
  const handleSelect = (data, record) => {
    // record.status=data
    const { status, ...remain } = record;
    const newData = { ...remain, status: data };

    const updatedObject = {
      ...newData,
      item: newData.item.map((item) => {
        return {
          ...item,
          item_id: item.id,
          id: undefined, // Remove the old id property if necessary
        };
      }),
    };

    updatedObject?.item?.forEach((obj) => {
      delete obj["id"];
      delete obj["quotation"];
    });
    deleteQuotation(updatedObject.id);
    delete updatedObject["id"];
    createQuotation(updatedObject);
  };

  const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(checkAuth());
  // }, []);

  const editfun = (record) => {
    navigate(`/quotation/${record.id}`);
  };
  const {
    data: status,
    isLoading: statusLoading,
    isFetching: statusFetching,
  } = useFetchStatusQuery();
  const deletethis = (record) => {
    deleteInvoice(record.id);
  };
  if (!statusFetching) {
    console.log("tiger", status);
  }
  useEffect(() => {
    if (deleteInvoiceResponseInfo?.status === "fulfilled") {
      message.success("Delete Successfull");
    }
  }, [deleteInvoiceResponseInfo]);
  const [columns, setColumn] = useState();
  useEffect(() => {
    if (user_id) {
      setColumn([
        {
          title: "Sr.no",
          dataIndex: "id",
          key: "id",
          width: 70,
          render: (text, record, index) => {
            return <span>{quotation_page * 10 - 10 + index + 1}</span>;
          },
          //   ...getColumnSearchProps('name'),
        },
        {
          title: "Status",
          dataIndex: "status",
          key: "id",
          width: "15%",
          render: (text, record, index) => {
            return (
              <p>
                {
                  status?.filter(
                    (item) => parseInt(item.id) === parseInt(record.status)
                  )[0]?.status
                }
              </p>
            );
          },
        },
        {
          title: "Total",
          dataIndex: "total_with_discount",
          key: "id",
          width: "15%",
        },
        {
          title: "Prospect Name",
          dataIndex: "client_name",
          key: "id",
          width: "15%",
        },
        {
          title: "Contact No",
          dataIndex: "client_contact",
          key: "id",
          width: "15%",
        },
        {
          title: "Revision",
          dataIndex: "revision_no",
          key: "id",
          width: 100,
          render: (record) => {
            // console.log(record)
            let numericPart = parseInt(record?.slice(1)); // Extracts "01" and converts it to a number

            // Reduce the numeric part by 1
            numericPart -= 1;
            const returnvalue="R" + numericPart?.toString().padStart(2, "0");
            // Reconstruct the string with the reduced numeric part
            if(returnvalue==="R00"){

              return "Fresh" 
            }else{
              return returnvalue
            }
            
          },
        },
        {
          title: "Representative",
          dataIndex: "user_client",
          key: "id",
          width: 150,
        },
        {
          title: "Remark",
          dataIndex: "remark",
          key: "id",
          width: 250,
        },

        {
          title: "Quotation No",
          dataIndex: "quotation_number",
          key: "id",
          width: 150,
        },
        {
          title: "Date",
          dataIndex: "date",
          key: "id",
          width: 150,
        },

        {
          title: " ",
          key: "id",
          fixed: "right",
          width: 50,

          render: (record) => (
            // <Button
            //   className="edit-link"
            //   onClick={(e) => {
            //     e.stopPropagation();
            //     editfun(record);
            //   }}
            // >
            <BiEdit
              className="bi-edit"
              style={{ width: "100%", height: "20px" }}
              onClick={(e) => {
                e.stopPropagation();
                editfun(record);
              }}
            />

            // </Button>
          ),
        },
        {
          title: " ",
          key: "id",
          fixed: "right",
          width: 50,
          render: (record) => (
            // <Button className="view-link" onClick={()=>thisfun(record)}>
            <BsEye
              className="bi-edit"
              onClick={() => thisfun(record)}
              style={{ width: "100%", height: "20px" }}
            />
            // </Button>
          ),
        },
      ]);
    } else {
      setColumn([
        {
          title: "Sr.no",
          dataIndex: "id",
          key: "id",
          width: 70,
          render: (text, record, index) => {
            return <span>{quotation_page * 10 - 10 + index + 1}</span>;
          },
          //   ...getColumnSearchProps('name'),
        },
        {
          title: "Status",
          dataIndex: "status",
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
                    status?.filter(
                      (item) => parseInt(item.id) === parseInt(record.status)
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
          title: "Total",
          dataIndex: "total_with_discount",
          key: "id",
          width: "15%",
        },
        {
          title: "Prospect Name",
          dataIndex: "client_name",
          key: "id",
          width: "15%",
        },
        {
          title: "Contact No",
          dataIndex: "client_contact",
          key: "id",
          width: "15%",
        },
        {
          title: "Revision",
          dataIndex: "revision_no",
          key: "id",
          width: 100,
          render: (record) => {
            // console.log(record)
            let numericPart = parseInt(record?.slice(1)); // Extracts "01" and converts it to a number

            // Reduce the numeric part by 1
            numericPart -= 1;
            const returnvalue="R" + numericPart?.toString().padStart(2, "0");
            // Reconstruct the string with the reduced numeric part
            if(returnvalue==="R00"){

              return "Fresh" 
            }else{
              return returnvalue
            }
            
          },
        },
        {
          title: "Representative",
          dataIndex: "user_client",
          key: "id",
          width: 150,
        },
        {
          title: "Remark",
          dataIndex: "remark",
          key: "id",
          width: 250,
        },

        {
          title: "Quotation No",
          dataIndex: "quotation_number",
          key: "id",
          width: 150,
        },

        {
          title: "Date",
          dataIndex: "date",
          key: "id",
          width: 150,
        },

        {
          title: " ",
          key: "id",
          fixed: "right",
          width: 50,

          render: (record) => (
            // <Button
            //   className="edit-link"
            //   onClick={(e) => {
            //     e.stopPropagation();
            //     editfun(record);
            //   }}
            // >

            <BiEdit
              className="bi-edit"
              style={{ width: "100%", height: "20px" }}
              onClick={(e) => {
                e.stopPropagation();
                editfun(record);
              }}
            />

            // </Button>
          ),
        },
        {
          title: " ",
          key: "id",
          fixed: "right",
          width: 50,
          render: (record) => (
            // <Button className="view-link" onClick={()=>thisfun(record)}>
            <BsEye
              className="bi-edit"
              onClick={() => thisfun(record)}
              style={{ width: "100%", height: "20px" }}
            />
            // </Button>
          ),
        },
        {
          title: " ",
          key: "id",
          fixed: "right",
          width: 50,
          render: (record) => (
            <Popconfirm
              title="Sure to delete?"
              onConfirm={(e) => {
                e.stopPropagation();

                deletethis(record);
              }}
              onCancel={(e) => e.stopPropagation()}
            >
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
  }, [user_id, quotation_page, status]);
  const navi = (data) => {
    // thisfun(data);
  };
  return (
    <div>
      {/* <Navbar/> */}
      <Slidebar />
      <div className="for-etable">
        {/* <h2 className="e-table-h2">Quotation</h2> */}
        <button
          style={{
            padding: "10px 40px",
            borderRadius: "7px",
            border: "none",
            backgroundColor: "var(--pr-color)",
            color: "white",
            fontSize: "15px",
            fontWeight: "bolder",
            cursor: "pointer",
            marginBottom: "30px",
          }}
          onClick={create_quotation}
        >
          Create New Quotation
        </button>
        <div className="body-width">
          <Search
            placeholder="Search Quotation By Clients Name"
            enterButton="Search"
            size="large"
            onSearch={(data) => {
              console.log(data);
              setSearchText(data);
            }}
          />
        </div>
        {loading ? (
          <Skeleton />
        ) : (
          <ETable
            navi={navi}
            field={"quotation"}
            page={quotation_page}
            data={data1}
            loading={fetchDATA || statusFetching}
            error={error}
            columns={columns}
          />
        )}
      </div>
    </div>
  );
};

export default Quotation;
