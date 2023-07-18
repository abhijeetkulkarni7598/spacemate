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
  useUpadteItemsMutation,
} from "../../store/store";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const layout = {
  labelCol: { span: 5 },
  wrapperCol: { span: 20 },
};

const onUpdate = (data, updateClient, id) => {
  data.id = id;
  console.log(data);
  updateClient(data);
};
const onFinish = (data, createClient) => {
  console.log(data);

  createClient(data);
};

export default function Itemform({ datas, id }) {
  const [createClient, creatClientResponseInfo] = useCreateItemMutation();
  const [updateClient, updateClientResponseInfo] = useUpadteItemsMutation();

  const navigate = useNavigate();

  useEffect(() => {
    if (creatClientResponseInfo?.status === "fulfilled") {
      message.success("Client Created");
      navigate(`/item`);
    }
    if (updateClientResponseInfo?.status === "fulfilled") {
      message.success("Client Upadted");

      navigate(`/item`);
    }
  }, [creatClientResponseInfo, updateClientResponseInfo]);

  const cat = [
    "LIVING ROOM",
    "MASTER BEDROOM",
    "BEDROOM",
    "CHILDBEDROOM",
    "KITCHEN",
  ];
  const unit = ["SQR METER", "INCH", "NUMBERS", "MILI METER", "SQR FOOT","RUNNING FOOT"];
  const [unit_data, setUnit_data] = useState();
const Getunit=(data)=>{
setUnit_data(data)
}
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
              onUpdate(data, updateClient, id);
            } else {
              onFinish(data, createClient);
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
    
              </>:<>
              
              {
                unit_data==="RUNNING FOOT"?
                <Form.Item name={["running_foot"]} label="Running Foot">
                <InputNumber 
                  style={{ width: "300px" }}
                  
                  placeholder="Enter Foot" />
              </Form.Item>:
                <Form.Item name={["numbers"]} label="Numbers">
                <InputNumber 
                  style={{ width: "300px" }}
                  
                  placeholder="Enter Number" />
              </Form.Item>

              }
              
              </>}

          <Form.Item name={["costing"]} label="Item Costing">
            <InputNumber
              required
              style={{ width: "300px" }}
              placeholder="Enter Costing"
            />
          </Form.Item>

          <Form.Item style={{ marginTop: "50px" }}>
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
