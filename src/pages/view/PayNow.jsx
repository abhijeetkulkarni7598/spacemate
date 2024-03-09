import { Button, message } from 'antd'
import React, { useEffect } from "react";

import { roundUpTenPercent } from '../../components/Functions/State'
import { useCreateOrderMutation } from '../../store/store';

const PayNow = ({total}) => {
   
  const [createProduct, creatProductResponseInfo] = useCreateOrderMutation();

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
              // razorpayObject.modal.close()
              //success api call
              // window.open("/profile-page","_self")
            },
            modal: {
              ondismiss: function () {
                message.error("Payment Cancelled");
                //cancel function







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
            // console.log(response)
            //fail api call
    
          });
    console.log(razorpayObject)
          razorpayObject.open();
        }
      }, [creatProductResponseInfo]);
    const handlePay=()=>{
        createProduct()
    }
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
        onClick={()=>handlePay()}
        type="primary"
          style={{
            background: "var(--pr-color)",
            color: "var(--pr-text-color)",
            fontSize: "18px",
            cursor:"pointer",
          }}
        >
          Pay Rs. {roundUpTenPercent(total)} 
        </Button>
      </div>

  )
}

export default PayNow
