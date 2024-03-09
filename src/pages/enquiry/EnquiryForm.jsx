import { Button, Form, Input, InputNumber, message } from "antd";
import TextArea from "antd/es/input/TextArea";
import React, { useEffect } from "react";
import {
  useCreateEnquiryMutation,
  useUpdateEnquiryMutation,
} from "../../store/store";
import { useNavigate } from "react-router-dom";
import { modifyUrl } from "../../components/Functions/State";
const layout = {
  labelCol: { span: 5 },
  wrapperCol: { span: 20 },
};
const onFinish = (data, createEnquiry, user) => {
  const { floor_plain, moon_board, proposed_furniture_plan, ...other } = data;


  if (user) {
    data.created_by = user.id;
  }
  if (data?.floor_plain?.target) {
    data.floor_plain = data.floor_plain.target.files[0];
  } else {
    data.floor_plain=modifyUrl(floor_plain);
  }
  if (data?.moon_board?.target) {
    data.moon_board = data.moon_board.target.files[0];
  } else {
    data.moon_board=modifyUrl(moon_board);
  }
  if (data?.proposed_furniture_plan?.target) {
    data.proposed_furniture_plan = data.proposed_furniture_plan.target.files[0];
  } else {
    data.proposed_furniture_plan=modifyUrl(proposed_furniture_plan);
  }
  createEnquiry(data);

};
const onUpdate = (data, updateEnquiry) => {
  const { floor_plain, moon_board, proposed_furniture_plan, ...other } = data;
  // updateEnquiry(data)
  if (data?.floor_plain?.target) {
    data.floor_plain = data.floor_plain.target.files[0];
  } else {
    data.floor_plain=modifyUrl(floor_plain);
  }
  if (data?.moon_board?.target) {
    data.moon_board = data.moon_board.target.files[0];
  } else {
    data.moon_board=modifyUrl(moon_board);
  }
  if (data?.proposed_furniture_plan?.target) {
    data.proposed_furniture_plan = data.proposed_furniture_plan.target.files[0];
  } else {
    data.proposed_furniture_plan=modifyUrl(proposed_furniture_plan);
  }


  updateEnquiry(data);

  //  console.log(data)
};

const EnquiryForm = ({ user, enquiry }) => {
  const [createEnquiry, createEnquiryResponseInfo] = useCreateEnquiryMutation();
  const [updateEnquiry, updateEnquiryResponseInfo] = useUpdateEnquiryMutation();
  const navigate = useNavigate();
  useEffect(() => {
    if (createEnquiryResponseInfo?.isSuccess) {
      message.success("Successfully Sent..!!!");
      if (user) {
        navigate("/enquiry-table");
      }
    }
  }, [createEnquiryResponseInfo]);
  useEffect(() => {
    if (updateEnquiryResponseInfo?.isSuccess) {
      message.success("Successfully Updated..!!!");
      if (user) {
        navigate("/enquiry-table");
      }
    }
  }, [updateEnquiryResponseInfo]);
  const [form] = Form.useForm();

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: "30px 0px",
      }}
    >
      <div style={{ width: "800px" }}>
        <Form
          form={form}
          name="dynamic_form_nest_item"
          onFinish={(data) => {
            if (enquiry) {
              onUpdate(data, updateEnquiry);
            } else {
              onFinish(data, createEnquiry, user);
            }
          }}
          style={{
            maxWidth: "100%",
          }}
          // autoComplete="off"
          {...layout}
          initialValues={enquiry}
          // initialValues={thisone}
        >
          <Form.Item name={["id"]} style={{ display: "none" }}></Form.Item>
          <Form.Item
            name={["customer_id"]}
            style={{ display: "none" }}
          ></Form.Item>
          <Form.Item
            name={["created_by"]}
            style={{ display: "none" }}
          ></Form.Item>
          <Form.Item name={["name"]} label="Name">
            <Input
              placeholder="Enter Your Name"
              disabled={user?.is_customer}
              style={{ color: "black" }}
            />
          </Form.Item>
          <Form.Item name={["mobile"]} label="Contact No">
            <InputNumber
              placeholder="Enter your Phone No"
              style={{ width: "200px", color: "black" }}
              disabled={user?.is_customer}
            />
          </Form.Item>
          {/* <Form.Item name={["company_name"]} label="Company Name">
                    <Input placeholder="Enter Your Company name" />
                  </Form.Item> */}
          {/* <Form.Item name={["allocate_name"]} label="Allocated Name">
                    <Input placeholder="Enter Your Allocated Name" />
                  </Form.Item> */}

          <Form.Item name={["email"]} label="Email">
            <Input
              placeholder="Enter your Email"
              disabled={user?.is_customer}
              style={{ color: "black" }}
            />
          </Form.Item>
          <Form.Item name={["address"]} label="Address">
            <Input
              placeholder="Enter Address"
              disabled={user?.is_customer}
              style={{ color: "black" }}
            />
          </Form.Item>
          {/* {enquiry?.floor_plain?null: */}

          <Form.Item
            name={["floor_plain"]}
            label="Floor Plan"
            valuePropName="fileList"
          >
            <Input
              placeholder="Enter your Floor Plan"
              type="file"
              disabled={user?.is_customer}
              style={{ color: "black" }}
            />
          </Form.Item>
          <Form.Item
            name={["proposed_furniture_plan"]}
            label="Furniture Plan"
            valuePropName="fileList"
          >
            <Input
              placeholder="Enter your Furniture Plan"
              type="file"
              disabled={user?.is_customer}
              style={{ color: "black" }}
            />
          </Form.Item>
          <Form.Item
            name={["moon_board"]}
            label="Mood Board"
            valuePropName="fileList"
          >
            <Input
              placeholder="Enter your Mood Board"
              type="file"
              disabled={user?.is_customer}
              style={{ color: "black" }}
            />
          </Form.Item>
          {/* } */}
          <Form.Item name={["unit_size"]} label="Unit Size">
            <Input
              type="number"
              placeholder="Enter Unit Size"
              disabled={user?.is_customer}
              style={{ color: "black" }}
            />
          </Form.Item>
          {enquiry || user ? (
            <Form.Item name={["booking_amount"]} label="Booking Amount">
              <Input
                type="number"
                placeholder="Enter Booking Amount"
                disabled={user?.is_customer}
                style={{ color: "black" }}
              />
            </Form.Item>
          ) : null}
          <Form.Item name={["requirement"]} label="Requirement">
            <TextArea placeholder="Enter Requirement" />
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              style={{ marginRight: "40px", background: "var(--pr-color) " }}
            >
              {enquiry ? <>Update</> : <>Submit</>}
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default EnquiryForm;
