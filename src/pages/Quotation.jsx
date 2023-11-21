import React, { useEffect, useState } from "react";

import ETable from "../components/editable_table/Etable";
import "./../components/editable_table/etable.css";
import { useNavigate } from "react-router-dom";
import {
  useDeleteInvoiceMutation,
  useDeleteQuotationMutation,
  useFetchQuotationQuery,
  useFetchStatusQuery,
} from "../store/store";
import { useDispatch, useSelector } from "react-redux";
import { Button, Popconfirm, Skeleton, message } from "antd";
import Slidebar from "../components/sidebar/Slidebar";
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

  const {
    data: data1,
    isLoading: loading,
    error: error,
    isFetching: fetch,
  } = useFetchQuotationQuery({ val: quotation_page, id: user_id });
  const [deleteInvoice, deleteInvoiceResponseInfo] =
    useDeleteQuotationMutation();

  console.log(data1);
  const thisfun = (record) => {
    console.log(record.id);
    navigate(`/view/${record.id}`);
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
   
  } = useFetchStatusQuery();
  const deletethis = (record) => {
    deleteInvoice(record.id);
  };
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
          width: 60,
          render: (text, record, index) => {
            return <span>{quotation_page * 10 - 10 + index + 1}</span>;
          },
          //   ...getColumnSearchProps('name'),
        },
        {
          title: "Quotation No",
          dataIndex: "quotation_number",
          key: "id",
          width: 150,
        },
        {
          title: "Revision",
          dataIndex: "revision_no",
          key: "id",
          width: "10%",
        },
        {
          title: "User",
          dataIndex: "user_client",
          key: "id",
          width: 150,
        },
        {
          title: "Client Name",
          dataIndex: "client_name",
          key: "id",
          width: "20%",
        },
        {
          title: "Status",
          dataIndex: "status",
          key: "id",
          width: "20%",
          render: (text, record, index) => {
            return <>{status?.filter((item)=>parseInt(item.id)===parseInt(record.staus))[0]?.status
            }</>;
          },
        },
        {
          title: "Client Contact",
          dataIndex: "client_contact",
          key: "id",
          width: "20%",
        },
        {
          title: "Client Address",
          dataIndex: "client_address",
          key: "id",
          width: 200,
        },
        {
          title: "Action",
          key: "id",
          fixed: "right",
          width: 100,

          render: (record) => (
            <Button className="edit-link" onClick={() => editfun(record)}>
              Edit
            </Button>
          ),
        },
        {
          title: "Action",
          key: "id",
          fixed: "right",
          width: 100,
          render: (record) => (
            <Button className="view-link" onClick={() => thisfun(record)}>
              View
            </Button>
          ),
        },
      ]);
    } else {
      setColumn([
        {
          title: "Sr.no",
          dataIndex: "id",
          key: "id",
          width: 60,
          render: (text, record, index) => {
            return <span>{quotation_page * 10 - 10 + index + 1}</span>;
          },
          //   ...getColumnSearchProps('name'),
        },
        {
          title: "Quotation No",
          dataIndex: "quotation_number",
          key: "id",
          width: 150,
        },
        {
          title: "Revision",
          dataIndex: "revision_no",
          key: "id",
          width: "10%",
        },
        {
          title: "User",
          dataIndex: "user_client",
          key: "id",
          width: 150,
        },
        {
          title: "Client Name",
          dataIndex: "client_name",
          key: "id",
          width: "20%",
        },
        {
          title: "Status",
          dataIndex: "status",
          key: "id",
          width: "20%",
          render: (text, record, index) => {
            return <>{status?.filter((item)=>parseInt(item.id)===parseInt(record.status))[0]?.status
            }</>;
          },
        },
        {
          title: "Client Contact",
          dataIndex: "client_contact",
          key: "id",
          width: "20%",
        },
        {
          title: "Client Address",
          dataIndex: "client_address",
          key: "id",
          width: 200,
        },
        {
          title: "Action",
          key: "id",
          fixed: "right",
          width: 100,

          render: (record) => (
            <Button
              className="edit-link"
              onClick={(e) => {
                e.stopPropagation();
                editfun(record);
              }}
            >
              Edit
            </Button>
          ),
        },
        // {
        //   title: 'Action',
        //   key: 'id',
        //   fixed: 'right',
        //   width: 100,
        //   render: (record) => <Button className="view-link" onClick={()=>thisfun(record)}>View</Button>,

        // },
        {
          title: "Action",
          key: "id",
          fixed: "right",
          width: 100,
          render: (record) => (
            <Popconfirm
              title="Sure to delete?"
              onConfirm={(e) => {
                e.stopPropagation();

                deletethis(record);
              }}
              onCancel={(e)=>e.stopPropagation()}
            >
              <a
                style={{ color: "red" }}
                onClick={(e) => {
                  e.stopPropagation();
                }}
              >
                Delete
              </a>
            </Popconfirm>
          ),
        },
      ]);
    }
  }, [user_id, quotation_page]);
  const navi = (data) => {
    thisfun(data);
  };
  return (
    <div>
      {/* <Navbar/> */}
      <Slidebar />
      <div className="for-etable">
        <h2 className="e-table-h2">Quotation</h2>
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
          Create Quotation
        </button>

        {loading ? (
          <Skeleton />
        ) : (
          <ETable
            navi={navi}
            field={"quotation"}
            page={quotation_page}
            data={data1}
            loading={fetch}
            error={error}
            columns={columns}
          />
        )}
      </div>
    </div>
  );
};

export default Quotation;
