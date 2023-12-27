import {
    Button,
    Col,
    Form,
    Input,
    InputNumber,
    Row,
    Select,
    message,
  } from "antd";
  import React from "react";
  import { SyncLoader } from "react-spinners";
  import {
    useCreateClientMutation,
    useCreateEmployeeMutation,
    useUpadteClientMutation,
    useUpadteEmployeeMutation,
  } from "../../store/store";
  import { useEffect } from "react";
  import { useNavigate } from "react-router-dom";
  import { indianStates } from "./uuid";
  import { logout } from "../../store/mutation/userSlice";
  
  const layout = {
    labelCol: { span: 5 },
    wrapperCol: { span: 20 },
  };
  
  const onUpdate = (data, updateClient, id, show) => {
    data.id = id;
    if (JSON.parse(localStorage.getItem("user"))?.id) {
      data.user_client_id = JSON.parse(localStorage.getItem("user"))?.id;
      // data.user_client_id=1
      data.user_client_name = JSON.parse(localStorage.getItem("user"))?.username;
  
      updateClient(data);
      // show(false);
    } else {
      message.error("You are unAuthoriused");
    }
  };
  const onFinish = (data, createClient, show) => {
    console.log(data);
  
    console.log();
    if (JSON.parse(localStorage.getItem("user"))?.id) {
      data.user_client_id = JSON.parse(localStorage.getItem("user"))?.id;
      data.user_client_name = JSON.parse(localStorage.getItem("user"))?.username;
      createClient(data);
      // show(false);
    } else {
      message.error("You are unAuthoriused");
    }
  };
  
  const Employeeform = ({ datas, id, show }) => {
    const [createClient, creatClientResponseInfo] = useCreateEmployeeMutation();
    const [updateClient, updateClientResponseInfo] = useUpadteEmployeeMutation();
    console.log("datas", datas);
    const navigate = useNavigate();
  
    useEffect(() => {
      if (creatClientResponseInfo?.status === "fulfilled") {
        message.success("Employee Created");
      show(false);
  
      }
      if (updateClientResponseInfo?.status === "fulfilled") {
        message.success("Employee Updated");
      show(false);
  
  
      }
    }, [creatClientResponseInfo, updateClientResponseInfo]);
    return (
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {/* {data ? ( */}
        <div className="form-box">
          {/* from {props.id} */}
  
          <Form
            name="dynamic_form_nest_item"
            onFinish={(data) => {
              if (datas) {
                onUpdate(data, updateClient, id, show);
              } else {
                onFinish(data, createClient, show);
              }
            }}
            style={{
              maxWidth: "100%",
            }}
            // autoComplete="off"
            {...layout}
            initialValues={datas}
            // initialValues={thisone}
          >
            <Form.Item name={["name"]} label="Employee Name">
              <Input placeholder="Enter Your Employee Name" />
            </Form.Item>
            <Form.Item name={["number"]} label="Contact No">
              <InputNumber
                placeholder="Enter Employee Phone No"
                style={{ width: "200px" }}
              />
            </Form.Item>
            <Form.Item name={["email"]} label="Email">
              <Input placeholder="Enter your Email" />
            </Form.Item>
            <Form.Item name={["adhar_pan"]} label="Adhar Pan">
              <Input
                placeholder="Enter Adhar Pan"
              />
            </Form.Item>
            <Form.Item name={["bank_name"]} label="Bank Name">
              <Input
                placeholder="Enter Bank Name"
              />
            </Form.Item>
            <Form.Item name={["account_number"]} label="Account Number">
              <Input
                placeholder="Enter Account Number"
              />
            </Form.Item>
            <Form.Item name={["ifsc"]} label="IFSC">
              <Input
                placeholder="Enter IFSC"
              />
            </Form.Item>
    
            <Form.Item name={["upi_detials"]} label="Upi Details">
              <Input
                placeholder="Enter UPI"
              />
            </Form.Item>
    
            <Form.Item name={["permanent_address"]} label="Permanent Address">
              <Input placeholder="Enter Permanent Address" />
            </Form.Item>
            <Form.Item name={["local_address"]} label="Local Address">
              <Input placeholder="Enter Local Address" />
            </Form.Item>
            <Form.Item name={["field_experience"]} label="Field Experience">
              <Input placeholder="Enter Field Experience" />
            </Form.Item>
            <Form.Item name={["service_provided"]} label="Service Provided">
              <Input placeholder="Enter Service Provided" />
            </Form.Item>
          
  
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                style={{ marginRight: "40px", background: "var(--pr-color) " }}
              >
                {datas ? <>Update</> : <>Submit</>}
              </Button>
              <Button danger type="primary" onClick={() => show(false)}>
                Cancel
              </Button>
            </Form.Item>
          </Form>
        </div>
        {/* ) : (
            <SyncLoader color="#323a3d" />
          )} */}
      </div>
    );
  };
  
  export default Employeeform;
  