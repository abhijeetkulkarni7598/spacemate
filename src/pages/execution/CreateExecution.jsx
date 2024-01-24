import React, { useEffect, useState } from "react";
import {
  useDeleteExecutionDesignMutation,
  useFetchExecutionDesignsQuery,
  useUpdateExecutionModelMutation,
} from "../../store/store";
import { ClipLoader } from "react-spinners";
import { ReactComponent as Data_empty } from "../../assets/no-data.svg";
import { Button, Popconfirm, Select, message } from "antd";
import { Option } from "antd/es/mentions";
import DesignUpload from "./form/DesignUpload";
import { BiTrash } from "react-icons/bi";
import PdfViewer from "../commonpage/PdfViewer";
import { useSelector } from "react-redux";

const CreateExecution = ({ data }) => {
  const [id, setid] = useState(data[0].id);
  const { user, userToken, checkAuthLoading ,isAuthenticated} = useSelector(
    (state) => state.user
  );
  const {
    data: design_data,
    isLoading: loading,
    isFetching: fetch,
    error: error,
  } = useFetchExecutionDesignsQuery(id);
  const handleDelete = (data) => {
    const formdata = { id: data };
    deleteEnquiry(formdata);
  };
  const [updateEnquiry, upadteEnquiryResponseInfo] =
    useUpdateExecutionModelMutation();
  const handleClick = (item) => {
    setid(item.id);
    // Smooth scroll to the element with the id "man"
    const isMobileView = window.innerWidth <= 768; // Adjust the threshold as needed
    // Smooth scroll to the element with the id "man" only in mobile view
    if (isMobileView) {
      const element = document.getElementById("project");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };
  useEffect(() => {
    if (upadteEnquiryResponseInfo?.isSuccess) {
      message.success("Successfully Updated..!!!");
    }
  }, [upadteEnquiryResponseInfo]);
  const [deleteEnquiry, DeleteExecResponseInfo] =
    useDeleteExecutionDesignMutation();

  useEffect(() => {
    if (DeleteExecResponseInfo?.isSuccess) {
      message.success("Successfully Delete..!!!");
    }
  }, [DeleteExecResponseInfo]);
  const handleSelect = (value) => {
    const form = {
      id: id,
      status: value,
    };
    updateEnquiry(form);
  };


  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: "30px 0px",
      }}
    >
      <div className="body-width main-project-box">
        <div style={{}}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              flex: "1",
              position: "sticky",
              top: 0,
            }}
          >
            {data.map((item) => (
              <div
                onClick={() => handleClick(item)}
                className="project-step-box"
                style={{
                  boxShadow: "0px 0px 7px grey",
                  transform: item.id === id ? "scale(1.05)" : "scale(1)",
                  background:
                    item?.status === "DONE" ? "var(--pr-color)" : "white",

                  cursor: "pointer",
                }}
              >
                <h3
                  style={{
                    color:
                      item?.status === "DONE" ? "white" : "var(--pr-color) ",
                  }}
                >
                  {item.model_name}
                </h3>
              </div>
            ))}
          </div>
        </div>
        <div
          id="project"
          style={{
            flex: "4",
            height: "100%",
            margin: "20px",
            overflowY: "auto",
          }}
        >
          {loading ? (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "400px",
              }}
            >
              <ClipLoader color="#36d7b7" />
            </div>
          ) : (
            <>
              <div style={{ margin: "20px 0px" }}>
                {user?.is_customer?
                <h3>
                {
                  data.filter((item) => item.id === id)[0].status

                }
                </h3>:

                <p>
                
                  <Select
                    optionFilterProp="children"
                    style={{ width: "100%" }}
                    value={data.filter((item) => item.id === id)[0].status}
                    onSelect={handleSelect}
                  >
                    <Option value={"DONE"}>DONE</Option>
                    <Option value={"NOT_DONE"}>NOT DONE</Option>
                  </Select>
                </p>}
                <div>
                  {data.filter((item) => item.id === id)[0].model_name ===
                  "PROJECT_START"||user?.is_customer ? null : (
                    <DesignUpload id={id} />
                  )}
                </div>
                <h3></h3>
              </div>
              {design_data.length > 0 ? (
                <>
                  {design_data.map((item) => (
                    <div>
                      <h3
                        style={{
                          background: "var(--pr-color)",
                          padding: "10px",
                          color: "white",
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        {item.title}
                        {user?.is_customer?null:

                        <Popconfirm
                        title="Sure to delete?"
                        onConfirm={() => handleDelete(item.id)}
                        >
                          <BiTrash style={{ cursor: "pointer" }} />
                        </Popconfirm>
                        }
                        {/* <BiTrash  style={{cursor:"pointer"}} onClick={()=>handleDelete(item.id)}/> */}
                      </h3>
                      <div>
                        <PdfViewer data={item.img} />
                      </div>
                      {/* <h4>{item.img}</h4> */}
                    </div>
                  ))}
                </>
              ) : (
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100%",
                  }}
                >
                  <Data_empty />
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default CreateExecution;
