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

const layout = {
  labelCol: { span: 5 },
  wrapperCol: { span: 20 },
};

const onUpdate = (data, updateClient, id,show) => {
  data.id = id;
  console.log(data);
  updateClient(data);
  show(false)

};
const onFinish = (data, createClient,show) => {
  console.log(data);

  createClient(data);
  show(false)

};

export default function Itemform({ datas, id,show }) {
  const [createClient, creatClientResponseInfo] = useCreateItemMutation();
  const [updateClient, updateClientResponseInfo] = useUpadteItemsMutation();
  const {
    data: category,
    isLoading: loading,
   
  } = useFetchCategoryQuery();
  const navigate = useNavigate();
  const [cat, setCat] = useState();
useEffect(() => {
if(category){
  
  setCat(category.map((item)=>item.category))

}
}, [category]);
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

        <Form
          name="dynamic_form_nest_item"
          onFinish={(data) => {
            if (datas) {
              onUpdate(data, updateClient, id,show);
            } else {
              onFinish(data, createClient,show);
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
          <Form.Item name={["item_name"]} label="Item Name">
            <Input placeholder="Enter Item Name" />
          </Form.Item>
          <Form.Item name={["specifications"]} label="Specifications">
            <Input placeholder="Enter Item Specifications" />
          </Form.Item>
          <Form.Item label="Item Category" name="item_category">
            <Select
              showSearch
              optionFilterProp="children"
              placeholder="Item Category"
            >
              {cat?.map((client) => (
                <Select.Option value={client}>{client}</Select.Option>
              ))}
            </Select>
          </Form.Item>

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
              style={{ width: "300px" }}
              
              placeholder="Enter Height" />
          </Form.Item>
          <Form.Item name={["width"]} label="Width">
            <InputNumber 
              style={{ width: "300px" }}
              
              placeholder="Enter Width" />
          </Form.Item>
          <Form.Item name={["length"]} label="Length">
            <InputNumber 
              style={{ width: "300px" }}
              
              placeholder="Enter Length" />
          </Form.Item>
          <Form.Item name={["depth"]} label="Depth">
            <InputNumber 
              style={{ width: "300px" }}
              
              placeholder="Enter Depth" />
          </Form.Item>
    
              </>:null}
              
              {
                unit_data==="RUNNING FOOT"?
                <Form.Item name={["running_foot"]} label="Running Foot">
                <InputNumber 
                  style={{ width: "300px" }}
                  
                  placeholder="Enter Foot" />
              </Form.Item>:
               null

              }
              {
                unit_data==="NUMBERS"? <Form.Item name={["numbers"]} label="Numbers">
                <InputNumber 
                  style={{ width: "300px" }}
                  
                  placeholder="Enter Number" />
              </Form.Item>:null
              }
              {
                unit_data==="APPROXIMATE"? <Form.Item name={["sqft"]} label="Sq Feet">
                <InputNumber 
                  style={{ width: "300px" }}
                  
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
              style={{ width: "300px" }}
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
        </Form>
      </div>
      {/* ) : (
          <SyncLoader color="#323a3d" />
        )} */}
    </div>
  );
}
