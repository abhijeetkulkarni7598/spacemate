import {
  Button,
  Col,
  Form,
  Input,
  InputNumber,
  Row,
  Select,
  message,
} from "antd";
import React, { useState } from "react";
import { SyncLoader } from "react-spinners";
import {
  useCreateItemMutation,
  useFetchCategoryQuery,
  useUpadteItemsMutation,
} from "../../store/store";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { BiLoader } from "react-icons/bi";
import { Option } from "antd/es/mentions";

const layout = {
  labelCol: { span: 5 },
  wrapperCol: { span: 20 },
};

const onUpdate = (data, updateClient, id,show,initaialData) => {
  data.id = id;
  if(Number.isInteger(parseInt(initaialData))){

    data.item_category=initaialData
  }
  console.log(data);
  updateClient(data);
  show(false)

};
const onFinish = (data, createClient,show,initaialData) => {
  if(Number.isInteger(parseInt(initaialData))){

    data.item_category=initaialData
  }
  console.log(data);

  createClient(data);
  show(false)

};



const Itemform = ({ datas, id,show,category,loading }) => {
  const [createClient, creatClientResponseInfo] = useCreateItemMutation();
  const [updateClient, updateClientResponseInfo] = useUpadteItemsMutation();
  // const {
  //   data: category,
  //   isLoading: loading,
   
  // } = useFetchCategoryQuery();
  // const category=[]
  // const loading=false
  console.log(category)
  const [initaialData, setInitaialData] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    if (creatClientResponseInfo?.status === "fulfilled") {
      message.success("Client Created");
      // navigate(`/item`);
    }
    if (updateClientResponseInfo?.status === "fulfilled") {
      message.success("Client Upadted");
      show(false)

      // navigate(`/item`);
    }
  }, [creatClientResponseInfo, updateClientResponseInfo]);

  const unit = ["SQR METER", "INCH", "NUMBERS", "MILI METER", "SQR FOOT","RUNNING FOOT","LUMPSUM","APPROXIMATE"];
  const [unit_data, setUnit_data] = useState();
const Getunit=(data)=>{
setUnit_data(data)
}
useEffect(() => {
if(datas?.unit){
  setUnit_data(datas.unit)

}

if(datas){
const {item_category,...data}=datas
  setInitaialData(category?.filter((item)=>parseInt(item.id)===parseInt(datas.item_category))[0]?.category)
}
}, [datas]);

  return (
    <div
    style={{
      display: "flex",
      width: "100%",
      height: "100%",
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    {/* {data ? ( */}
    <div className="form-box">
      {/* from {props.id} */}
      {datas?.item_category?

<p>Previous Item Category <b style={{color:"red"}}>
         {datas?.item_category}
        </b>
         </p>:null
      }
          <Form
          name="dynamic_form_nest_item"
          onFinish={(data) => {
            if (datas) {
              onUpdate(data, updateClient, id,show,initaialData);
            } else {
              onFinish(data, createClient,show,initaialData);
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
          <p className="p-item-itemForm">

          <Form.Item name={["item_name"]} label="Item Name">
            <Input placeholder="Enter Item Name" />
          </Form.Item>
          <Form.Item name={["specifications"]} label="Specifications">
            <Input placeholder="Enter Item Specifications" />
          </Form.Item>
          {loading?<BiLoader/>:
          <Form.Item label="Item Category" name="item_category">
            <p>

            <Select
              showSearch
              optionFilterProp="children"
              placeholder="Item Category"
              value={initaialData?initaialData:null}
              onSelect={(data)=>setInitaialData(data)}
              >
              {category?.map((client) => (
                <Option  value={client.id} >{client.category}</Option>
                ))}
            </Select>
                </p>
          </Form.Item>
              }
  
          <Form.Item label="Item Unit" name="unit">
            <Select
              showSearch
              optionFilterProp="children"
              placeholder="Item Unit"
              onSelect={Getunit}
  
            >
              {unit?.map((client) => (
                <Select.Option key={client} value={client}>{client}</Select.Option>
              ))}
            </Select>
          </Form.Item>
  
  {unit_data==="INCH"||unit_data==="MILI METER"||unit_data==="SQR FOOT"||unit_data==="SQR METER"?
  <>
          <Form.Item name={["height"]} label="Height">
            <InputNumber 
              style={{ width: "100%" }}
              
              placeholder="Enter Height" />
          </Form.Item>
          <Form.Item name={["width"]} label="Width">
            <InputNumber 
              style={{ width: "100%" }}
              
              placeholder="Enter Width" />
          </Form.Item>
          <Form.Item name={["length"]} label="Length">
            <InputNumber 
              style={{ width: "100%" }}
              
              placeholder="Enter Length" />
          </Form.Item>
          <Form.Item name={["depth"]} label="Depth">
            <InputNumber 
              style={{ width: "100%" }}
              
              placeholder="Enter Depth" />
          </Form.Item>
    
              </>:null}
              
              {
                unit_data==="RUNNING FOOT"?
                <Form.Item name={["running_foot"]} label="Running Foot">
                <InputNumber 
                  style={{ width: "100%" }}
                  
                  placeholder="Enter Foot" />
              </Form.Item>:
               null
  
              }
              {
                unit_data==="NUMBERS"? <Form.Item name={["numbers"]} label="Numbers">
                <InputNumber 
                  style={{ width: "100%" }}
                  
                  placeholder="Enter Number" />
              </Form.Item>:null
              }
              {
                unit_data==="APPROXIMATE"? <Form.Item name={["sqft"]} label="Sq Feet">
                <InputNumber 
                  style={{ width: "100%" }}
                  
                  placeholder="Enter Sq Feet" />
              </Form.Item>:null
              }
            
            {
                unit_data==="LUMPSUM"?null
  
              :null
              }
  
  
              
  
          <Form.Item name={["costing"]} label="Item Costing">
            <InputNumber
              required
              style={{ width: "100%" }}
              placeholder="Enter Costing"
            />
          </Form.Item>
          <Form.Item style={{ marginTop: "50px" }}>
            <Button style={{height:"100%",marginRight:"30px",background:"var(--pr-color) "}} type="primary" htmlType="submit" >
              {datas ? <>Update</> : <>Submit</>}
            </Button>
            <Button danger style={{height:"100%"}} type="primary" onClick={()=>show(false)}>
  Cancel
            </Button>
          </Form.Item>
          </p>

        </Form>
       
      
    
    </div>
    {/* ) : (
        <SyncLoader color="#323a3d" />
      )} */}
  </div>
  )
}

export default Itemform

