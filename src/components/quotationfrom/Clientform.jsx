import { Button, Col, Form, Input, InputNumber, Row, Select, message } from 'antd';
import React from 'react';
import { SyncLoader } from 'react-spinners';
import { useCreateClientMutation, useUpadteClientMutation } from '../../store/store';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { indianStates } from './uuid';
import { logout } from '../../store/mutation/userSlice';













const layout = {
    labelCol: { span: 5 },
    wrapperCol: { span: 20 },
  };


const onUpdate = (
 data,
 updateClient,
 id,
  ) => {
  data.id=id
  if(JSON.parse(localStorage.getItem('user'))?.id){

    data.user_client_id=JSON.parse(localStorage.getItem('user'))?.id
    // data.user_client_id=1
    data.user_client_name=JSON.parse(localStorage.getItem('user'))?.username
  
    updateClient(data)
  }else{
    message.error("You are unAuthoriused")
  }

  
  };
  const onFinish = (
 data,
 createClient
  ) => {
    console.log(data)


console.log()
if(JSON.parse(localStorage.getItem('user'))?.id){

  data.user_client_id=JSON.parse(localStorage.getItem('user'))?.id
  data.user_client_name=JSON.parse(localStorage.getItem('user'))?.username
  createClient(data)

}else{
  message.error("You are unAuthoriused")
}

 
  };

const Clientform = ({datas,id}) => {
  const [createClient, creatClientResponseInfo] = useCreateClientMutation();
  const [updateClient, updateClientResponseInfo] = useUpadteClientMutation();

  const navigate = useNavigate();


  useEffect(() => {
  if(creatClientResponseInfo?.status==="fulfilled"){
    message.success("Client Created")
    navigate(`/`)

  }
  if(updateClientResponseInfo?.status==="fulfilled"){
    message.success("Client Upadted")
    
    navigate(`/`)
  }
  }, [creatClientResponseInfo,updateClientResponseInfo]);
    return (
        <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: "100px",
        }}
      >
        {/* {data ? ( */}
          <div className="form-box">
            {/* from {props.id} */}
  
            <Form
           
              name="dynamic_form_nest_item"
              onFinish={(data) => {
                if (datas) {
                  onUpdate(
                    data,
                    updateClient,
                    id,
                    
                  );
                } else {
                  onFinish(
                    data,
                    createClient,
                    
                  );
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
              
             
  
            
             
              
             
  
                  <Form.Item name={["contact_person_name"]} label="Contact Person Name">
                    <Input placeholder="Enter Your Contact Person Name" />
                  </Form.Item>
                  <Form.Item name={["company_name"]} label="Company Name">
                    <Input placeholder="Enter Your Company name" />
                  </Form.Item>
                  <Form.Item name={["allocate_name"]} label="Allocated Name">
                    <Input placeholder="Enter Your Allocated Name" />
                  </Form.Item>
                  <Form.Item
                    name={["email"]}
                    label="Email"
                  >
                    <Input placeholder="Enter your Email" />
                  </Form.Item>
                  <Form.Item
                    name={["phone"]}
                    label="Phone No"
                  >
                    <InputNumber placeholder="Enter your Phone No" style={{width:"200px"}} />
                  </Form.Item>

                  <Form.Item name={["site_address"]} label="Site Address">
                    <Input placeholder="Enter Site Address" />
                  </Form.Item>
             
  
             
         
              <Form.Item style={{marginTop:"50px"}}>
               
                  <Button style={{height:"100%"}} type="primary" htmlType="submit">
                    {datas ? <>Update</> : <>Submit</>}
                  </Button>
              
              </Form.Item>
            </Form>
          </div>
        {/* ) : (
          <SyncLoader color="#323a3d" />
        )} */}
      </div>
    );
}

export default Clientform;
