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
  useUpadteClientMutation,
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

const Clientform = ({ datas, id, show }) => {
  const [createClient, creatClientResponseInfo] = useCreateClientMutation();
  const [updateClient, updateClientResponseInfo] = useUpadteClientMutation();
  console.log("datas", datas);
  const navigate = useNavigate();

  useEffect(() => {
    if (creatClientResponseInfo?.status === "fulfilled") {
      message.success("Client Created");
    show(false);

    }
    if (updateClientResponseInfo?.status === "fulfilled") {
      message.success("Client Updated");
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
          <Form.Item name={["contact_person_name"]} label="Prospect Name">
            <Input placeholder="Enter Your Prospect Name" />
          </Form.Item>
          <Form.Item name={["phone"]} label="Contact No">
            <InputNumber
              placeholder="Enter your Phone No"
              style={{ width: "200px" }}
            />
          </Form.Item>
          {/* <Form.Item name={["company_name"]} label="Company Name">
                    <Input placeholder="Enter Your Company name" />
                  </Form.Item> */}
          {/* <Form.Item name={["allocate_name"]} label="Allocated Name">
                    <Input placeholder="Enter Your Allocated Name" />
                  </Form.Item> */}
          <Form.Item name={["site_address"]} label="Site Address">
            <Input placeholder="Enter Site Address" />
          </Form.Item>
          <Form.Item name={["email"]} label="Email">
            <Input placeholder="Enter your Email" />
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

export default Clientform;
