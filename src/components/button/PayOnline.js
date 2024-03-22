import { Button, Form, Input, InputNumber, message } from "antd";
import React, { useEffect } from "react";
import { MdClose } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { Login_show } from "../../store/mutation/userSlice";
import {
  useCancelOrderMutation,
  useCreateOrderMutation,
  useFailedOrderMutation,
  useSuccessOrderMutation,
} from "../../store/store";
import logo from "./../../assets/img/logo512.png";
import { validateEmail, validateNumber } from "../Functions/State";

const PayOnline = ({ customStyle, isValid, title }) => {
  const dispatch = useDispatch();
  const Login = () => {
    const [createProduct, creatProductResponseInfo] = useCreateOrderMutation();
    const [cancelOrder, cancelOrderResponseInfo] = useCancelOrderMutation();
    const [failedOrder, failedOrderResponseInfo] = useFailedOrderMutation();
    const [successOrder, successOrderResponseInfo] = useSuccessOrderMutation();

    useEffect(() => {
      if (cancelOrderResponseInfo?.isSuccess) {
        message.success("Order Cancelled");
      }
      if (cancelOrderResponseInfo?.isError) {
        message.error("Something went wrong");
      }
    }, [cancelOrderResponseInfo]);
    useEffect(() => {
      if (successOrderResponseInfo?.isSuccess) {
        message.success("Order Success");
      }
      if (successOrderResponseInfo?.isError) {
        message.error("Something went wrong");
      }
    }, [successOrderResponseInfo]);
    useEffect(() => {
      if (failedOrderResponseInfo?.isSuccess) {
        message.success("Order Failed");
      }
      if (failedOrderResponseInfo?.isError) {
        message.error("Something went wrong");
      }
    }, [failedOrderResponseInfo]);
    useEffect(() => {
      console.log(creatProductResponseInfo);

      if (creatProductResponseInfo?.isSuccess) {
        var options = {
          key: "" + creatProductResponseInfo?.data?.key_id + "",
          amount: "" + creatProductResponseInfo?.data?.amount + "",
          currency: "INR",
          name: "" + creatProductResponseInfo?.data?.product_name + "",
          description: "" + creatProductResponseInfo?.data?.description + "",
          image: "https://dummyimage.com/600x400/000/fff",
          order_id: "" + creatProductResponseInfo?.data?.order_id + "",
          handler: function (response) {
            message.success("Payment Succeeded");
            successOrder({
              order_id: creatProductResponseInfo?.data?.order_id,
            });
            dispatch(Login_show(false));
            // razorpayObject.modal.close()
            //success api call
            // window.open("/profile-page","_self")
          },
          modal: {
            ondismiss: function () {
              message.error("Payment Cancelled");
              //cancel function
              cancelOrder({
                order_id: creatProductResponseInfo?.data?.order_id,
              });
            },
          },
          prefill: {
            contact: "" + creatProductResponseInfo?.data?.contact + "",
            name: "" + creatProductResponseInfo?.data?.name + "",
            email: "" + creatProductResponseInfo?.data?.email + "",
          },
          notes: {
            description: "" + creatProductResponseInfo?.data?.description + "",
          },
          theme: {
            color: "#2300a3",
          },
        };
        var razorpayObject = new window.Razorpay(options);

        razorpayObject.on("payment.failed", function (response) {
          message.error("Payment Failed");
          failedOrder({ order_id: creatProductResponseInfo?.data?.order_id });

          // console.log(response)
          //fail api call
        });
        console.log(razorpayObject);
        razorpayObject.open();
      }
    }, [creatProductResponseInfo]);
    const {
      user,
      userToken,
      loading,
      checkAuthLoading,
      isAuthenticated,
    } = useSelector((state) => state.user);

    const validatePhoneNumber = (rule, value, callback) => {
      console.log(value)
      if (value && value.toString().length !== 10) {
        callback("Please enter a 10-digit number!");
      } else {
        callback();
      }
    };

    return (
      <div className="model-main-login">
        <div className="model-main-box-login">
          <div
            style={{
              position: "absolute",
              right: "10px",
              cursor: "pointer",
              color: "black",
            }}
            onClick={() => {
              dispatch(Login_show(false));
            }}
          >
            <MdClose color="black" fontSize={"20px"} />
          </div>

          <Form
            style={{ marginTop: "30px" }}
            initialValues={{
              id:user?.id,
              customer_name: user?.enquiry?.name,
              customer_email: user?.email,
              customer_number: user?.enquiry?.mobile,
              enquiry:{
                id:user?.enquiry?.id,
                latest_quotation_id:user?.enquiry?.latest_quotation_id,
              }
            }}
            onFinish={(data) => createProduct(data)}
          >
            <img
              src={logo}
              alt=""
              onClick={() => dispatch(Login_show(false))}
              style={{ width: "200px", marginBottom: "20px" }}
            />

            <Form.Item name="customer_name">
              <Input
                required
                className="input-login-google"
                placeholder="Enter Your Name"
              />
            </Form.Item>
            <Form.Item
              name={["enquiry", "id"]}

              style={{ display: "none" }}
            ></Form.Item>
            <Form.Item
              name={["enquiry", "latest_quotation_id"]}

              style={{ display: "none" }}
            ></Form.Item>
            <Form.Item
              name="id"
              style={{ display: "none" }}
            ></Form.Item>
            <Form.Item
              name="customer_email"
              rules={[
                {
                  required: true,
                  message: "Please input your Gmail!",
                },
                {
                  validator: validateEmail,
                },
              ]}
            >
              <Input
                required
                className="input-login-google"
                placeholder="Enter Your Gmail"
              />
            </Form.Item>
            <Form.Item
              name="customer_number"
              rules={[
                {
                  required: true,
                  message: "Please input your number!",
                },
                {
                  validator: validatePhoneNumber,
                },
              ]}
            >
              <Input
                required
                className="input-login-google"
                placeholder="Enter Your Number"
              />
            </Form.Item>
            <Form.Item
              name="amount"
              rules={[
                {
                  required: true,
                  message: "Please input your amount!",
                },
                {
                  validator: validateNumber,
                },
              ]}
            >
              <InputNumber
                style={{ width: "100%" }}
                type="number"
                className="input-login-google"
                placeholder="Enter Your Amount"
              />
            </Form.Item>

            <Form.Item>
              <Button
                loading={false}
                type="primary"
                htmlType="submit"
                style={{
                  width: "100%",
                  background: "var(--pr-color)",
                  color: "white",
                }}
              >
                Pay
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    );
  };
  const {
    user,
    userToken,
    loading,
    checkAuthLoading,
    isAuthenticated,
    login_show,
  } = useSelector((state) => state.user);
  return (
    <>
      <BtnStyle onClick={() => dispatch(Login_show(true))}>
        <button className={!isValid ? "button-65" : "button-65 customstyle"}>
          {title}
        </button>
      </BtnStyle>
      {login_show ? <Login /> : null}
    </>
  );
};

export default PayOnline;
const BtnStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  /* margin-bottom: 3rem; */

  /* CSS */
  .button-65 {
    appearance: none;
    display: flex;
    align-items: center;
    justify-content: center;
    backface-visibility: hidden;
    background-color: var(--primary-color-pay);
    border-radius: 10px;
    border-style: none;
    box-shadow: none;
    box-sizing: border-box;
    color: #ffffff;
    cursor: pointer;
    display: inline-block;
    font-family: Inter, -apple-system, system-ui, "Segoe UI", Helvetica, Arial,
      sans-serif;
    font-size: 18px;
    font-weight: 500;
    height: 50px;
    letter-spacing: normal;
    line-height: 1.5;
    outline: none;
    overflow: hidden;
    /* padding: 14px 30px; */
    position: relative;
    text-align: center;
    text-decoration: none;
    transform: translate3d(0, 0, 0);
    transition: all 0.3s;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    vertical-align: top;
    white-space: nowrap;
  }

  .customstyle {
    padding: 3rem 6rem !important;
    /* width: 310px !important; */

    margin: 4rem;
    a {
      font-size: 25px !important;
      padding: 2rem 5rem !important;
    }
  }

  .button-65:hover {
    background-color: #29384f;
    box-shadow: rgba(0, 0, 0, 0.05) 0 5px 30px, rgba(0, 0, 0, 0.05) 0 1px 4px;
    opacity: 1;
    transform: translateY(0);
    transition-duration: 0.35s;
  }

  .button-65:hover:after {
    opacity: 0.5;
  }

  .button-65:active {
    box-shadow: rgba(0, 0, 0, 0.1) 0 3px 6px 0, rgba(0, 0, 0, 0.1) 0 0 10px 0,
      rgba(0, 0, 0, 0.1) 0 1px 4px -1px;
    transform: translateY(2px);
    transition-duration: 0.35s;
  }

  .button-65:active:after {
    opacity: 1;
  }
  @media (max-width: 520px) {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 2rem;

    .button-65 {
      display: flex;
      align-items: center;
      justify-content: center;
      backface-visibility: hidden;
      /* padding-right: 2rem; */
    }
  }

  @media (min-width: 768px) {
    .button-65 {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 3px 22px;
      /* width: 176px; */
    }
  }
`;
