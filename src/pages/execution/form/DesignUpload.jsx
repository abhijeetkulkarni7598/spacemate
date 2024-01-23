import { Button, Form, Input, message } from 'antd';
import React, { useEffect, useState } from 'react'
import { useCreateExecutionDesignMutation } from '../../../store/store';
const layout = {
    labelCol: { span: 5 },
    wrapperCol: { span: 20 },
  };
  const onFinish=(data,id,updateEnquiry)=>{
    data.stepsmodel=id
    // console.log(data)
    updateEnquiry(data)
  }
const DesignUpload = ({id}) => {
  const [updateEnquiry, upadteEnquiryResponseInfo] =
  useCreateExecutionDesignMutation();


useEffect(() => {
  if (upadteEnquiryResponseInfo?.isSuccess) {
  form.resetFields();

    message.success("Successfully Added..!!!");
  }
}, [upadteEnquiryResponseInfo]);
  const [form] = Form.useForm();
  const [datas, setDatas] = useState({});
useEffect(() => {
  
  form.resetFields();
}, [id]);
  return (
    <div>
      <Form
            form={form}

          name="dynamic_form_nest_item"
          onFinish={(data) => {
          
              onFinish(data,id,updateEnquiry);
            
          }}
          style={{
            maxWidth: "100%",
          }}
          // autoComplete="off"
          {...layout}
          initialValues={datas}
          // initialValues={thisone}
        >
          <Form.Item name={["title"]} label="Title">
            <Input placeholder="Enter Your Title" />
          </Form.Item>
         
          
          <Form.Item name={["img"]} label="Image" valuePropName="fileList">
            <Input placeholder="Enter your Image" type='file' onChange={(e)=>form.setFieldsValue({img:e.target.files[0]})} />
          </Form.Item>
          

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              style={{ marginRight: "40px", background: "var(--pr-color) " }}
            >
                Upload
            </Button>
     
          </Form.Item>
        </Form>
    </div>
  )
}

export default DesignUpload
