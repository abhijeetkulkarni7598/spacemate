import { Button, Form, Input, InputNumber, Upload, message } from "antd";
import TextArea from "antd/es/input/TextArea";
import React, { useEffect, useState } from "react";
import {
  useCreateEnquiryMutation,
  useUpdateEnquiryMutation,
} from "../../store/store";
import { useNavigate } from "react-router-dom";
import { modifyUrl } from "../../components/Functions/State";
import { UploadOutlined } from "@ant-design/icons";
import FloorPlan from "./floorplan/FloorPlan";
const layout = {
  labelCol: { span: 5 },
  wrapperCol: { span: 20 },
};
const onFinish = (data, createEnquiry, user) => {
  console.log(data);

  const { floor_plain, moon_board, proposed_furniture_plan, ...other } = data;

  if (user) {
    data.created_by = user.id;
  }
  if (data?.floor_plain?.file) {
    data.floor_plain = data.floor_plain.file.originFileObj;
  } else {
    data.floor_plain = modifyUrl(floor_plain);
  }
  if (data?.moon_board?.file) {
    data.moon_board = data.moon_board.file.originFileObj;
  } else {
    data.moon_board = modifyUrl(moon_board);
  }
  if (data?.proposed_furniture_plan?.file) {
    data.proposed_furniture_plan = data.proposed_furniture_plan.file.originFileObj;
  } else {
    data.proposed_furniture_plan = modifyUrl(proposed_furniture_plan);
  }
  createEnquiry(data);
};
const onUpdate = (data, updateEnquiry) => {
  const { floor_plain, moon_board, proposed_furniture_plan, ...other } = data;
  // updateEnquiry(data)
  if (data?.floor_plain?.file) {
    data.floor_plain = data.floor_plain.file.originFileObj;
  } else {
    data.floor_plain = modifyUrl(floor_plain);
  }
  if (data?.moon_board?.file) {
    data.moon_board = data.moon_board.file.originFileObj;
  } else {
    data.moon_board = modifyUrl(moon_board);
  }
  if (data?.proposed_furniture_plan?.file) {
    data.proposed_furniture_plan = data.proposed_furniture_plan.file.originFileObj;
  } else {
    data.proposed_furniture_plan = modifyUrl(proposed_furniture_plan);
  }

  updateEnquiry(data);

  //  console.log(data)
};

const EnquiryForm = ({ user, enquiry, page }) => {
  const [createEnquiry, createEnquiryResponseInfo] = useCreateEnquiryMutation();
  const [updateEnquiry, updateEnquiryResponseInfo] = useUpdateEnquiryMutation();
  const navigate = useNavigate();
  useEffect(() => {
    if (createEnquiryResponseInfo?.isSuccess) {
      message.success("Enquiry submitted successfully");
      if (user) {
        navigate("/enquiry-table");
      }
    }
  }, [createEnquiryResponseInfo]);
  useEffect(() => {
    if (updateEnquiryResponseInfo?.isSuccess) {
      message.success("Enquiry updated successfully");
      if (user) {
        if (user?.is_customer) {
          navigate("/home");
        }else if(page==="client"){
          navigate("/client");

        } else {
          navigate("/enquiry-table");
        }
      }
    }
  }, [updateEnquiryResponseInfo]);
  const [form] = Form.useForm();
  const beforeUpload = (file) => {
    // Ensure only one file is uploaded
    if (file && file.length > 1) {
      message.error("You can only upload one photo.");
      return false;
    }
    return true;
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
          <div style={{ display: user?.is_customer ? "none" : "block" }}>
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
          </div>
          {/* {enquiry?.floor_plain?null: */}
          <Form.Item
            name={["floor_plain"]}
            label="Floor Plan"
            // valuePropName="fileList"
          >
            <Upload
              action="https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188"
              listType="picture"
              maxCount={1}
              defaultFileList={
                enquiry?.floor_plain
                  ? [
                      {
                        url: enquiry?.floor_plain, // URL of the default image
                      },
                    ]
                  : null
              }
            >
              <Button icon={<UploadOutlined />}>Upload</Button>
            </Upload>
          </Form.Item>
                <div style={{display:page === "client"?"block":"none"}}>
                  <Form.Item
                    name={["proposed_furniture_plan"]}
                    label="Furniture Plan"
                  >
                    <Upload
                      action="https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188"
                      listType="picture"
                      maxCount={1}
                      defaultFileList={
                        enquiry?.proposed_furniture_plan
                          ? [
                              {
                                url: enquiry?.proposed_furniture_plan, // URL of the default image
                              },
                            ]
                          : null
                      }
                    >
                      <Button icon={<UploadOutlined />}>Upload</Button>
                    </Upload>
                  </Form.Item>
                  <Form.Item
                    name={["moon_board"]}
                    label="Mood Board"
                  >
                  <Upload
                      action="https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188"
                      listType="picture"
                      maxCount={1}
                      defaultFileList={
                        enquiry?.moon_board
                          ? [
                              {
                                url: enquiry?.moon_board, // URL of the default image
                              },
                            ]
                          : null
                      }
                    >
                      <Button icon={<UploadOutlined />}>Upload</Button>
                    </Upload>
                  </Form.Item>
                </div>
          {/* } */}
          {!user?.is_customer ? (
            <>
            

              <Form.Item name={["unit_size"]} label="Unit Size">
                <Input
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
            </>
          ) : null}
          <Form.Item name={["requirement"]} label="Requirement">
            <TextArea placeholder="Enter Requirement" />
          </Form.Item>

          <Form.Item>
            <Button
              loading={
                updateEnquiryResponseInfo?.isLoading ||
                createEnquiryResponseInfo?.isLoading
              }
              type="primary"
              htmlType="submit"
              style={{ marginRight: "40px", background: "var(--pr-color) " }}
            >
              {enquiry ? <>Update</> : <>Submit</>}
            </Button>
          </Form.Item>
        </Form>
        {user?.is_customer ? (
          <>
            <FloorPlan />
          </>
        ) : null}
      </div>
    </div>
  );
};

export default EnquiryForm;
