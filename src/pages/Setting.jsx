import React, { useEffect } from "react";
import "./login.css";
import { useDispatch, useSelector } from "react-redux";

import { Button, Form, Input, message } from "antd";
import { logout, userLogin } from "../store/mutation/userSlice";
import { useNavigate, useNavigation } from "react-router-dom";
import { useState } from "react";
import { useUpadtePasswordMutation } from "../store/store";
import Slidebar from "../components/sidebar/Slidebar";
const onFinish = (data,updatePass) => {
    console.log("hsafhfsfjhsbdfjhsbdbfjshbf")
    console.log(data)
    if(data.password!==data.password2){
        message.error("Password Didn't Match")
    }else{
        updatePass(data) 
    }
    
    };


const Setting = () => {
  const navigate = useNavigate();

  const [updatePass, updatePassResponseInfo] = useUpadtePasswordMutation();
  const dispatch = useDispatch()

  useEffect(() => {
    console.log(updatePassResponseInfo.isLoading)
    if(updatePassResponseInfo?.status==="fulfilled"){
      message.success("Change Successfull")

   
    dispatch(logout())
navigate("/login")
  
    }
  }, [updatePassResponseInfo]);
    const loading = false
    return (
       <>
       <Slidebar/>
             <div className="login">
      <div className="login-box" style={{padding:"40px 50px"}}>
        <h2
          style={{
            textAlign: "center",
            marginBottom: "30px",
            color: "#323a3d",
          }}
        >
          Change Password
        </h2>
        <Form labelCol={20} onFinish={(data) => onFinish(data,updatePass)}>
          <Form.Item label="Old Password" name={"old_password"} >
            <Input placeholder="Enter Your User Name" required />
          </Form.Item>
          <Form.Item name={"password"} label="New Password">
            <Input required placeholder="Enter Your Password" type="password"/>
          </Form.Item>
          <Form.Item name={"password2"} label="Confirm Password">
            <Input required placeholder="Enter Your Password" type="password"/>
          </Form.Item>
          <Form.Item >
              {updatePassResponseInfo.isLoading?
              <p>
                <Button style={{height:"100%"}} type="primary" >
            Loading  
            </Button>

              </p>
              :
              <p>
                <Button style={{height:"100%"}} type="primary" htmlType="submit">

              Change
            </Button>
              </p>
              }
          </Form.Item>
        </Form>
      </div>
    </div>
    </>

       
    );
}

export default Setting;
