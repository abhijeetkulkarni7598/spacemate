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

const onUpdate = (data, updateClient, id, show, initaialData) => {
  data.id = id;
  if (Number.isInteger(parseInt(initaialData))) {
    data.item_category = initaialData;
  }
  if (
    data.unit === "SQR METER" ||
    data.unit === "INCH" ||
    data.unit === "MILI METER" ||
    data.unit === "SQR FOOT"
  ) {
    console.log("delete quantity");

    data.quantity = 1;
    data.numbers = null;
    data.sqft = null;
    data.running_foot = null;
  }

  if (
    data.unit === "RUNNING FOOT" ||
    data.unit === "NUMBERS" ||
    data.unit === "APPROXIMATE"
  ) {
    console.log("delete lenght");

    data.length = null;
    data.width = null;
    data.height = null;
    data.depth = null;
    data.sqft = null;
    data.running_foot = null;
    data.numbers = null;
  }
  if (data.unit === "LUMPSUM") {
    data.length = null;
    data.running_foot = null;
    data.width = null;
    data.height = null;
    data.depth = null;
    data.quantity = 1;
    data.sqft = null;
    data.numbers = null;
  }
  console.log(data);
  updateClient(data);
};
const onFinish = (data, createClient, show, initaialData) => {
  if (Number.isInteger(parseInt(initaialData))) {
    data.item_category = initaialData;
  }
  console.log(data);

  createClient(data);
};

const Itemform = ({ datas, id, show, category, loading }) => {
  const [createClient, creatClientResponseInfo] = useCreateItemMutation();
  const [updateClient, updateClientResponseInfo] = useUpadteItemsMutation();
  // const {
  //   data: category,
  //   isLoading: loading,

  // } = useFetchCategoryQuery();
  // const category=[]
  // const loading=false
  const [initaialData, setInitaialData] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    if (creatClientResponseInfo?.status === "fulfilled") {
      message.success("Item Created");
      // navigate(`/item`);
      show(false);
    }
    if (creatClientResponseInfo?.isError === true) {
      message.error("Item Created Failed");
      // navigate(`/item`);
    }
    if (updateClientResponseInfo?.isError === true) {
      message.error("Item Updated Failed");

      // navigate(`/item`);
    }
    if (updateClientResponseInfo?.status === "fulfilled") {
      message.success("Item Updated");
      show(false);

      // navigate(`/item`);
    }
  }, [creatClientResponseInfo, updateClientResponseInfo]);

  const unit = [
    "SQR METER",
    "INCH",
    "NUMBERS",
    "MILI METER",
    "SQR FOOT",
    "RUNNING FOOT",
    "LUMPSUM",
    "APPROXIMATE",
  ];
  const [unit_data, setUnit_data] = useState();
  const Getunit = (data) => {
    setUnit_data(data);
  };
  useEffect(() => {
    if (datas?.unit) {
      setUnit_data(datas.unit);
    }

    if (datas) {
      const { item_category, ...data } = datas;
      setInitaialData(
        category?.filter(
          (item) => parseInt(item.id) === parseInt(datas.item_category)
        )[0]?.category
      );
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
        {datas?.item_category ? (
          <p>
            Previous Item Category{" "}
            <b style={{ color: "red" }}>{datas?.item_category}</b>
          </p>
        ) : null}
        <Form
          name="dynamic_form_nest_item"
          onFinish={(data) => {
            if (datas) {
              onUpdate(data, updateClient, id, show, initaialData);
            } else {
              onFinish(data, createClient, show, initaialData);
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
            {loading ? (
              <BiLoader />
            ) : (
              <Form.Item label="Item Category" name="item_category">
                <p>
                  <Select
                    showSearch
                    optionFilterProp="children"
                    placeholder="Item Category"
                    value={initaialData ? initaialData : null}
                    onSelect={(data) => setInitaialData(data)}
                  >
                    {category?.map((client) => (
                      <Option value={client.id}>{client.category}</Option>
                    ))}
                  </Select>
                </p>
              </Form.Item>
            )}

            <Form.Item label="Item Unit" name="unit">
              <Select
                showSearch
                optionFilterProp="children"
                placeholder="Item Unit"
                onSelect={Getunit}
              >
                {unit?.map((client) => (
                  <Select.Option key={client} value={client}>
                    {client}
                  </Select.Option>
                ))}
              </Select>
            </Form.Item>

            {unit_data === "INCH" ||
            unit_data === "MILI METER" ||
            unit_data === "SQR FOOT" ||
            unit_data === "SQR METER" ? (
              <>
                <Form.Item name={["height"]} label="Height">
                  <InputNumber
                    style={{ width: "100%" }}
                    placeholder="Enter Height"
                  />
                </Form.Item>
                <Form.Item name={["width"]} label="Width">
                  <InputNumber
                    style={{ width: "100%" }}
                    placeholder="Enter Width"
                  />
                </Form.Item>
                <Form.Item name={["length"]} label="Length">
                  <InputNumber
                    style={{ width: "100%" }}
                    placeholder="Enter Length"
                  />
                </Form.Item>
                <Form.Item name={["depth"]} label="Depth">
                  <InputNumber
                    style={{ width: "100%" }}
                    placeholder="Enter Depth"
                  />
                </Form.Item>
              </>
            ) : null}

            {unit_data === "RUNNING FOOT" ||
            unit_data === "NUMBERS" ||
            unit_data === "APPROXIMATE" ? (
              <Form.Item name={["quantity"]} label="Quantity">
                <InputNumber
                  style={{ width: "100%" }}
                  placeholder="Enter Quantity"
                />
              </Form.Item>
            ) : null}
            {/* {unit_data === "NUMBERS" ? (
              <Form.Item name={["numbers"]} label="Numbers">
                <InputNumber
                  style={{ width: "100%" }}
                  placeholder="Enter Number"
                />
              </Form.Item>
            ) : null}
            {unit_data === "APPROXIMATE" ? (
              <Form.Item name={["sqft"]} label="Sq Feet">
                <InputNumber
                  style={{ width: "100%" }}
                  placeholder="Enter Sq Feet"
                />
              </Form.Item>
            ) : null} */}

            {/* {unit_data === "LUMPSUM" ? null : null} */}

            <Form.Item name={["costing"]} label="Item Costing">
              <InputNumber
                required
                style={{ width: "100%" }}
                placeholder="Enter Costing"
              />
            </Form.Item>
            <Form.Item style={{ marginTop: "50px" }}>
              <Button
                style={{
                  height: "100%",
                  marginRight: "30px",
                  background: "var(--pr-color) ",
                }}
                type="primary"
                htmlType="submit"
              >
                {datas ? <>Update</> : <>Submit</>}
              </Button>
              <Button
                danger
                style={{ height: "100%" }}
                type="primary"
                onClick={() => show(false)}
              >
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
  );
};

export default Itemform;
