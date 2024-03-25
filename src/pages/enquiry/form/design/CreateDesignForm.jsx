import { Button, Form, Input, InputNumber, Select, message } from "antd";
import TextArea from "antd/es/input/TextArea";
import React, { useEffect, useState } from "react";
import {
  useCreateDesignMutation,
  useUpdateDesignsMutation,
} from "../../../../store/store";
import { useNavigate } from "react-router-dom";
import PdfViewer from "../../../commonpage/PdfViewer";
import { useSelector } from "react-redux";
import { ApprovalArray, titleArray, typeArray } from "../../../../components/Functions/State";
import { Option } from "antd/es/mentions";
const layout = {
  labelCol: { span: 5 },
  wrapperCol: { span: 20 },
};
const onFinish = (data, createEnquiry, query) => {
  data.enquiry = query.enquiry;
  console.log(data);
  const {id,...newData}=data
  createEnquiry(newData);
};

const CreateDesignForm = ({ query, datas }) => {
  const onUpdate = (data, updateEnquiry) => {
    console.log(data);
    updateEnquiry(data);
  };
  const { user, userToken, checkAuthLoading, isAuthenticated } = useSelector(
    (state) => state.user
  );
  const [user_id, setUser_id] = useState("");
  useEffect(() => {
    if (user?.is_customer) {
      setUser_id(user.id);
    }
  }, [user]);
  const [createEnquiry, createEnquiryResponseInfo] = useCreateDesignMutation();
  const [updateEnquiry, upadteEnquiryResponseInfo] = useUpdateDesignsMutation();
  const navigate = useNavigate();
  useEffect(() => {
    if (createEnquiryResponseInfo?.isSuccess) {
      message.success("Successfully Created..!!!");
      navigate(`/design-table/${query.enquiry}`);
    }
  }, [createEnquiryResponseInfo]);
  useEffect(() => {
    if (upadteEnquiryResponseInfo?.isSuccess) {
      message.success("Successfully Updated..!!!");
      navigate(`/design-table/${query.enquiry}`);
    }
  }, [upadteEnquiryResponseInfo]);

  const [form] = Form.useForm();
  const [image, setImage] = useState();

  const beforeUpload = (file) => {
    const reader = new FileReader();

    reader.onload = (e) => {
      const previewUrl = e.target.result;
      setImage(previewUrl);
    };

    reader.readAsDataURL(file);

    // Returning false prevents automatic upload of the file
    return false;
  };

  const fileListRender = (fileList) => {
    return fileList.map((file) => {
      return {
        ...file,
        thumbUrl: image, // Use the preview image URL for thumbnail
      };
    });
  };
  useEffect(() => {
    if (datas) {
      setImage(datas.image);
    }
  }, [datas]);
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
        {user_id ? (
          <>{datas?.image ?<>
          
          <Form
              form={form}
              name="dynamic_form_nest_item"
              onFinish={(data) => {
                if (datas) {
                  onUpdate(data, updateEnquiry);
                } else {
                  onFinish(data, createEnquiry, query);
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
              <div style={{display:"none"}}>

              <Form.Item name={["id"]}></Form.Item>
              <Form.Item name={["title"]} label="Title">
                <Select placeholder="Select Title" style={{ width: "150px" }}>
                  {titleArray?.map((item) => (
                    <Option value={item} key={item}>
                      {item}
                    </Option>
                  ))}
                </Select>
              </Form.Item>
              <Form.Item name={["type"]} label="Type">
              <Select placeholder="Select Type" style={{ width: "150px" }}>
                  {typeArray?.map((item) => (
                    <Option value={item} key={item}>
                      {item}
                    </Option>
                  ))}
                </Select>
              </Form.Item>

              {/* <Form.Item name={["company_name"]} label="Company Name">
                    <Input placeholder="Enter Your Company name" />
                  </Form.Item> */}
              {/* <Form.Item name={["allocate_name"]} label="Allocated Name">
                    <Input placeholder="Enter Your Allocated Name" />
                  </Form.Item> */}

              <Form.Item
                name={["image"]}
                label="Image"
                valuePropName="fileList"
                >
                <Input
                  placeholder="Enter your Floor Plan"
                  type="file"
                  onChange={(event) => {
                    // Assuming `setImage` is a state variable
                    // Make sure to declare `const [image, setImage] = useState(null);` in your functional component
                    setImage(event.target.value);
                    form.setFieldsValue({ image: event.target.files[0] });
                  }}
                />
              </Form.Item>
                  </div>
              {datas?.image ? <PdfViewer data={datas.image} /> : null}

              <Form.Item name={["approval"]} label="Approval">
              <Select placeholder="Select Status" style={{ width: "150px" }}>
                  {ApprovalArray?.map((item) => (
                    <Option value={item} key={item}>
                      {item}
                    </Option>
                  ))}
                </Select>
              </Form.Item>
              <Form.Item name={["enquiry"]} className="none"></Form.Item>

              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  loading={createEnquiryResponseInfo?.isLoading||upadteEnquiryResponseInfo?.isLoading}
                  style={{
                    marginRight: "40px",
                    background: "var(--pr-color) ",
                  }}
                >
                  {datas ? <>Update</> : <>Submit</>}
                </Button>
              </Form.Item>
            </Form>
          </> : null}</>
        ) : (
          <>
            <Form
              form={form}
              name="dynamic_form_nest_item"
              onFinish={(data) => {
                if (datas) {
                  onUpdate(data, updateEnquiry);
                } else {
                  onFinish(data, createEnquiry, query);
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
              <Form.Item name={["id"]}></Form.Item>
              <Form.Item name={["title"]} label="Title">
                <Select placeholder="Select Title" style={{ width: "150px" }}>
                  {titleArray?.map((item) => (
                    <Option value={item} key={item}>
                      {item}
                    </Option>
                  ))}
                </Select>
              </Form.Item>
              <Form.Item name={["type"]} label="Type">
              <Select placeholder="Select Type" style={{ width: "150px" }}>
                  {typeArray?.map((item) => (
                    <Option value={item} key={item}>
                      {item}
                    </Option>
                  ))}
                </Select>
              </Form.Item>

              {/* <Form.Item name={["company_name"]} label="Company Name">
                    <Input placeholder="Enter Your Company name" />
                  </Form.Item> */}
              {/* <Form.Item name={["allocate_name"]} label="Allocated Name">
                    <Input placeholder="Enter Your Allocated Name" />
                  </Form.Item> */}

              <Form.Item
                name={["image"]}
                label="Image"
                valuePropName="fileList"
              >
                <Input
                  placeholder="Enter your Floor Plan"
                  type="file"
                  onChange={(event) => {
                    // Assuming `setImage` is a state variable
                    // Make sure to declare `const [image, setImage] = useState(null);` in your functional component
                    setImage(event.target.value);
                    form.setFieldsValue({ image: event.target.files[0] });
                  }}
                />
              </Form.Item>
              {datas?.image ? <PdfViewer data={datas.image} /> : null}
              {image ? <>{image}</> : <>null</>}

              <Form.Item name={["approval"]} label="Approval">
              <Select placeholder="Select Status" style={{ width: "150px" }}>
                  {ApprovalArray?.map((item) => (
                    <Option value={item} key={item}>
                      {item}
                    </Option>
                  ))}
                </Select>
              </Form.Item>
              <Form.Item name={["enquiry"]} className="none"></Form.Item>

              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  loading={createEnquiryResponseInfo?.isLoading||upadteEnquiryResponseInfo?.isLoading}
                  style={{
                    marginRight: "40px",
                    background: "var(--pr-color) ",
                  }}
                >
                  {datas ? <>Update</> : <>Submit</>}
                </Button>
              </Form.Item>
            </Form>
          </>
        )}
      </div>
    </div>
  );
};

export default CreateDesignForm;
