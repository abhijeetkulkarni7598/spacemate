import { Button, Form, Input, message } from "antd";
import React, { useEffect, useState } from "react";
import { useUpdateExecutionDesignMutation } from "../../../store/store";
const onFinish = (data, updateEnquiry) => {
    data.stepsmodel=data.model
    console.log(data);
//   updateEnquiry(data);
};
const layout = {
  labelCol: { span: 5 },
  wrapperCol: { span: 20 },
};
const RemarkUpload = ({ item }) => {
  console.log("lion", item);
  const [form] = Form.useForm();
  const [
    updateEnquiry,
    upadteEnquiryResponseInfo,
  ] = useUpdateExecutionDesignMutation();
  useEffect(() => {
    if (upadteEnquiryResponseInfo?.isSuccess) {
      message.success("Successfully Added..!!!");
    }
  }, [upadteEnquiryResponseInfo]);
  return (
    <div>
        {item.id}
      <Form
        form={form}
        name="dynamic_form_nest_item"
        onFinish={(data) => {
          onFinish(data, updateEnquiry);
        }}
        style={{
          maxWidth: "100%",
        }}
        // autoComplete="off"
        {...layout}
        initialValues={item}
        // initialValues={thisone}
      >
        <Form.Item name={["id"]} className="none"></Form.Item>
        <Form.Item name={["model"]} className="none"></Form.Item>
        <Form.Item name={["img"]} className="none"></Form.Item>
        <Form.Item name={["title"]} className="none"></Form.Item>
        <Form.Item name={["remark"]} label="Remark">
          <Input placeholder="Enter Your Remark" />
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            style={{ marginRight: "40px", background: "var(--pr-color) " }}
          >
            {item?.id ? <>Upload</> : null}
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default RemarkUpload;
