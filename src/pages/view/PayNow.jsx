import { Button, message } from "antd";
import React, { useEffect } from "react";

import { roundUpTenPercent } from "../../components/Functions/State";
import { useCancelOrderMutation, useCreateOrderMutation, useFailedOrderMutation, useSuccessOrderMutation } from "../../store/store";
import { useSelector } from "react-redux";

const PayNow = ({ total }) => {
  const [createProduct, creatProductResponseInfo] = useCreateOrderMutation();
  const [cancelOrder, cancelOrderResponseInfo] = useCancelOrderMutation();
  const [failedOrder, failedOrderResponseInfo] = useFailedOrderMutation();
  const [successOrder, successOrderResponseInfo] = useSuccessOrderMutation();
  const {
    user,
    userToken,
    loading,
    checkAuthLoading,
    isAuthenticated,
  } = useSelector((state) => state.user);

  useEffect(() => {
 if(cancelOrderResponseInfo?.isSuccess){
  message.success("Order Cancelled")
 }
 if(cancelOrderResponseInfo?.isError){
  message.error("Something went wrong")

 }
  }, [cancelOrderResponseInfo]);
  useEffect(() => {
 if(successOrderResponseInfo?.isSuccess){
  message.success("Order Success")
 }
 if(successOrderResponseInfo?.isError){
  message.error("Something went wrong")

 }
  }, [successOrderResponseInfo]);
  useEffect(() => {
 if(failedOrderResponseInfo?.isSuccess){
  message.success("Order Failed")
 }
 if(failedOrderResponseInfo?.isError){
  message.error("Something went wrong")

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
        successOrder({order_id:creatProductResponseInfo?.data?.order_id})

          // razorpayObject.modal.close()
          //success api call
          // window.open("/profile-page","_self")
        },
        modal: {
          ondismiss: function () {
            message.error("Payment Cancelled");
            //cancel function
            cancelOrder({order_id:creatProductResponseInfo?.data?.order_id})
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
        failedOrder({order_id:creatProductResponseInfo?.data?.order_id})

        // console.log(response)
        //fail api call
      });
      console.log(razorpayObject);
      razorpayObject.open();
    }
  }, [creatProductResponseInfo]);
  const handlePay = (data) => {
    if (user && isAuthenticated) {
      const newData = {
        amount: data,
        ...user,
      };
      createProduct(newData);
    } else {
      message.error("Cant Pay");
    }
  };
  return (
    <div
      style={{
        margin: "20px auto",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Button
        onClick={() => handlePay(roundUpTenPercent(total))}
        type="primary"
        style={{
          background: "var(--pr-color)",
          color: "var(--pr-text-color)",
          fontSize: "18px",
          cursor: "pointer",
        }}
      >
        Pay Rs. {roundUpTenPercent(total)}
      </Button>
    </div>
  );
};

export default PayNow;
