import React, { useEffect, useState } from "react";
import { useCreateProjectMutation, useDeleteProjectMutation, useFetchCustomerQuery, useFetchExecutionUsersQuery } from "../../../store/store";
import { Button, Popconfirm, Select, Table, message } from "antd";
import { BiEdit, BiTrash } from "react-icons/bi";
import { FaEye } from "react-icons/fa";
import { RiEyeFill } from "react-icons/ri";
import { BsEye } from "react-icons/bs";
import { Option } from "antd/es/mentions";
import { useNavigate } from "react-router-dom";

const ModelUserTable = () => {
  const { data: user_data, isLoading: user_Loading } =
    useFetchExecutionUsersQuery();
    const navigate=useNavigate()
    const [deleteEnquiry, deleteEnquiryResponseInfo] =
    useDeleteProjectMutation();
    useEffect(() => {
  if(deleteEnquiryResponseInfo?.isSuccess){
    message.success("Project Deleted...!!!")
    performCancel()

  }

    }, [deleteEnquiryResponseInfo]);
    const {
        data: customer_data,
        isLoading: customer_loading,
        isFetching: customer_fetch,
        error: customer_error,
      } = useFetchCustomerQuery();
      const [userSeted, setUserSeted] = useState();
      const handleSelect=(data)=>{
        setUserSeted(data)
      }
      const performCancel=()=>{
        setUserSeted()
        setShow(false)
      }
      const UserModel=()=>{

        const [updateEnquiry, upadteEnquiryResponseInfo] =
        useCreateProjectMutation();
   
        useEffect(() => {
      if(upadteEnquiryResponseInfo?.isSuccess){
        message.success("Project Created...!!!")
        performCancel()

      }
      if(upadteEnquiryResponseInfo?.isError){
        message.error("Project Creation Failed...!!!")
        
      }
        }, [upadteEnquiryResponseInfo]);
    
        return(
          

<>
<div className="model-con">
        <div className="model-box" style={{width:"80vw"}}>
    {/* <Cross  className="model-cross" onClick={()=>setShow(false)}/> */}
    <h2  style={{
          padding: "10px 10px",
          borderRadius: "7px",
          border: "none",
          backgroundColor: "#0253a2",
          color: "white",
          fontSize: "15px",
          fontWeight: "bolder",
          cursor: "pointer",
          marginBottom: "30px",
        }}>Select User To Create Project</h2>
    <Select
            onSelect={(data) => handleSelect(data)}
            value={userSeted}
            style={{ width: "150px" }}
          >
            {customer_data?.map((item) => (
              <Option value={item.id} key={item.id}>
                {item.username}
              </Option>
            ))}
          </Select>
          <div style={{margin:"20px 0px"}}>
          <Popconfirm
          title="Sure to Create Project?"
          onConfirm={()=>updateEnquiry({id:userSeted})} 
        >
          <Button type="primary" style={{marginRight:"10px"}} >Create Project</Button>

        </Popconfirm>
          <Button onClick={()=>performCancel()} type="primary" danger>Cancel</Button>
          </div>
        </div>
        </div>
        </>
        )
      }
  const editfun = (record) => {
navigate(`/execution-project/${record.id}`)
  };
  const deletethis = (data) => {
    deleteEnquiry(data)
  };
  const create_client = () => {
    setShow(true)

  };
  const columns = [
    {
      title: "Sr.no",
      dataIndex: "id",
      key: "id",
      width: 60,
      render: (text, record, index) => {
        return <span>{index + 1}</span>;
      },
      //   ...getColumnSearchProps('name'),
    },
    {
      title: "User Name",
      dataIndex: "username",
      key: "id",
      //   ...getColumnSearchProps('name'),
    },

    {
      title: "Email",
      dataIndex: "email",
      key: "id",
    },

    {
      title: " ",
      key: "id",
      fixed: "right",
      width: "50px",

      render: (record) => (
        <FaEye
          className="bi-edit FaEye"
          style={{ width: "100%", height: "20px", color: "var(--pr-color)" }}
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
      width: "50px",
      fixed: "right",
      render: (record) => (
        <Popconfirm
          title="Sure to delete?"
          onConfirm={() => deletethis(record)}
        >
          {/* <a style={{color:"red"}}>Delete</a> */}
          <BiTrash
            className="bi-edit FaEye"
            onClick={(e) => {
              e.stopPropagation();
            }}
            style={{ width: "100%", height: "20px", color: "red" }}
          />
        </Popconfirm>
      ),
    },
  ];
  const [show, setShow] = useState(false);
  return (
    <div className="for-etable">
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
        Create New User Project
      </button>

      <Table
        className="custom-table-ant"
        dataSource={user_data}
        columns={columns}
      />
      
    {show?
        <UserModel/>
       :null

    }
    </div>

  );
};

export default ModelUserTable;
