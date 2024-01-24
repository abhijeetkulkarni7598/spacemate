import React, { useEffect } from "react";
import "./login.css";
import { useDispatch, useSelector } from "react-redux";

import { Button, Form, Input, message } from "antd";
import { userLogin } from "../store/mutation/userSlice";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import logo from "./../assets/img/logo512.png"

const onFinish = ({username,password},dispatch) => {
//   console.log(data);
// localStorage.setItem("user", username,password);
console.log("hsafhfsfjhsbdfjhsbdbfjshbf")
// const email=username
  dispatch(userLogin({ username, password }));

};
const Login = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const { user, userToken, loading, checkAuthLoading,isAuthenticated } = useSelector(
    (state) => state.user
  );

  const [vname, setVname] = useState('');

  useEffect(() => {

 if(userToken&&loading===false&&checkAuthLoading===false&&isAuthenticated===true){
  localStorage.setItem('usera',vname)
  message.success("SuccessFull Login")
  navigate('/home')

 }
 if(userToken&&loading===false&&checkAuthLoading===false&&isAuthenticated===false){
  message.error("UnsuccessFull Login")

 }

 if(isAuthenticated===true){
  navigate('/home')

 }
  }, [loading]);

  let obj=["a","b"]
 
  let obj2 ={
    ...obj,

  }
  console.log(obj2[1])
  return (
    <div className="login">
      <div className="login-box">
        <div>
<img src={logo} alt="" style={{width:"200px"}}/>
        <h2
          style={{
            textAlign: "center",
            marginBottom: "30px",
            color: "#323a3d",
          }}
          >
          {/* Login */}

        </h2>
          </div>
        <Form labelCol={20} onFinish={(data) => onFinish(data,dispatch)}>
          <Form.Item label="User name" name={"username"} >
            <Input placeholder="Enter Your User Name" required onChange={(e)=>setVname(e.target.value)}/>
          </Form.Item>
          <Form.Item name={"password"} label="Password">
            <Input required placeholder="Enter Your Password" type="password"/>
          </Form.Item>
          <Form.Item >
          
                <Button  loading={loading} style={{height:"100%"}}  type="primary" htmlType="submit">

              Login
            </Button>
           
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Login;
