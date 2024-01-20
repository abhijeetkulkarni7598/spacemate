import { Button, Form, Input, InputNumber, message } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import React, { useEffect } from 'react'
import { useCreateEnquiryMutation } from '../../store/store';
const layout = {
  labelCol: { span: 5 },
  wrapperCol: { span: 20 },
};
const onFinish=(data,createEnquiry)=>{
  console.log(data)
  createEnquiry(data)
}
const onUpdate=()=>{

}


const EnquiryForm = () => {
  const [createEnquiry, createEnquiryResponseInfo] = useCreateEnquiryMutation();
  useEffect(() => {
if(createEnquiryResponseInfo?.isSuccess){
  message.success("Successfully Sent..!!!")
}
  }, [createEnquiryResponseInfo]);
  const [form] = Form.useForm();

  const datas=null
  return (
    <div style={{display:"flex",justifyContent:"center",alignItems:"center",margin:"30px 0px"}}>
      <div style={{width:"800px"}}>

      <Form
            form={form}

          name="dynamic_form_nest_item"
          onFinish={(data) => {
            if (datas) {
              onUpdate(data);
            } else {
              onFinish(data,createEnquiry);
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
          <Form.Item name={["name"]} label="Name">
            <Input placeholder="Enter Your Name" />
          </Form.Item>
          <Form.Item name={["mobile"]} label="Contact No">
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
          
          <Form.Item name={["email"]} label="Email">
            <Input placeholder="Enter your Email" />
          </Form.Item>
          <Form.Item name={["address"]} label="Address">
            <Input placeholder="Enter Address" />
          </Form.Item>
          
          <Form.Item name={["floor_plain"]} label="Floor Plan" valuePropName="fileList">
            <Input placeholder="Enter your Floor Plan" type='file' onChange={(e)=>form.setFieldsValue({floor_plain:e.target.files[0]})} />
          </Form.Item><Form.Item name={["requirement"]} label="Requirement">
            <TextArea placeholder="Enter Requirement" />
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              style={{ marginRight: "40px", background: "var(--pr-color) " }}
            >
              {datas ? <>Update</> : <>Submit</>}
            </Button>
     
          </Form.Item>
        </Form>
      </div>
    </div>
  )
}

export default EnquiryForm
