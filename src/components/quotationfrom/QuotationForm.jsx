import {
  Form,
  Input,
  Row,
  Col,
  DatePicker,
  Button,
  Space,
  InputNumber,
  Select,
  message,
} from "antd";
import React, { useEffect, useState } from "react";
import SyncLoader from "react-spinners/SyncLoader";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import "./invoiceform.css";
import useFormItemStatus from "antd/es/form/hooks/useFormItemStatus";
import {
  useCreateQuotationMutation,
  useDeleteQuotationMutation,
  useFetchClientQuery,
  useFetchInventoryQuery,
  useFetchInvoiceQuery,
  useFetchQuotationQuery,
  useGetClientQuery,
  useSearchClientQuery,
  useUpadteInventoryMutation,
} from "../../store/store";
import { useNavigate } from "react-router-dom";
import moment from "moment/moment";
import { uuid, indianStates } from "./uuid";
import TextArea from "antd/es/input/TextArea";
import ItemTable from "../models/ItemTable";
import { useSelector } from "react-redux";

const layout = {
  labelCol: { span: 15 },
  wrapperCol: { span: 25 },
};
const ly = {
  labelCol: { span: 20 },
};
const onUpdate = (
  data,

  id,
  // thisfun,
  setformdata_update,
  createQuotation,
  client_id,
  client_name,
  client_address,
  client_contact,
  total
) => {
  console.log("Upadte", data);

  // setformdata_update(id);

  // thisfun(data);

  data.total_with_discount = total;
  if (client_id) {
    data.client_address = client_address;
    data.client_contact = client_contact;
    data.client_id = client_id;
    data.client_name = client_name;
  }
  if (data) {
    // data?.terms[0]?.customer_terms="hellos"

    // formdata_update.dated="adfsd"
    // formdata_update.delivery_date="adfsd"
    if (data.client_id) {
      const updatedObject = {
        ...data,
        item: data.item.map((item) => {
          return {
            ...item,
            item_id: item.id,
            id: undefined, // Remove the old id property if necessary
          };
        }),
      };

      updatedObject?.item?.forEach((obj) => {
        delete obj["id"];
        delete obj["quotation"];
      });
      updatedObject?.terms?.forEach((obj) => {
        delete obj["id"];
        delete obj["quotation"];
      });
      console.log("Payload", updatedObject);

      createQuotation(updatedObject);
    }
  }
};
const onFinish = (
  data,
  createQuotation,
  invoice_id,
  client_id,
  client_name,
  client_address,
  client_contact,
  data1,
  total
) => {
  const { item, ...values } = data;

  data.client_address = client_address;
  data.client_contact = client_contact;
  data.client_id = client_id;
  data.client_name = client_name;
  console.log(data1);
  data.quotation_number = data1.count + 1;

  data.user_client = JSON.parse(localStorage.getItem("user")).username;
  data.user_client_id = JSON.parse(localStorage.getItem("user")).id;
  // data.invoice_no = invoice_id;
  data.total_with_discount = total;

  const today = new Date();

  // Extract the day, month, and year
  const day = String(today.getDate()).padStart(2, "0");
  const month = String(today.getMonth() + 1).padStart(2, "0"); // Months are zero-based
  const year = today.getFullYear();

  // Format the date as dd/mm/yyyy
  const formattedDate = `${day}/${month}/${year}`;

  // Output the formatted date
  console.log(formattedDate);
  console.log("main", data);
  data.dated2 = formattedDate;

  const updatedObject = {
    ...data,
    item: data.item.map((item) => {
      return {
        ...item,
        item_id: item.id,
        id: undefined, // Remove the old id property if necessary
      };
    }),
  };
  createQuotation(updatedObject);
};

const QuotationForm = (props) => {
  const navigate = useNavigate();
  const [client_name_search, setclient_name_search] = useState(null);
  const [datas, setdatas] = useState();

  const { user } = useSelector((state) => state.user);
  const [user_id, setUser_id] = useState("");
  useEffect(() => {
    if (user.is_staff === true) {
    } else {
      setUser_id(user.id);
    }
  }, [user]);

  const { data: client, isLoading: clientLoading } = useSearchClientQuery({
    val: client_name_search,
    id: user_id,
  });
  const { data: data1, isLoading: loading } = useFetchQuotationQuery({
    val: 1,
    id: "",
  });

  // const { data: invoice_data, isLoading: invoiceLoading } =
  //   useFetchInvoiceQuery();

  const [invoice_id, setinvoice_id] = useState();
  // useEffect(() => {
  //   if (invoice_data) {
  //     setinvoice_id(
  //       "AS" +
  //         (1 + invoice_data.length).toString().padStart(4, "0") +
  //         (moment(new Date()).format("/YY") +
  //           moment(new Date()).add(1, "years").format("-YY"))
  //     );
  //   }
  // }, [invoice_data]);
  const [client_id, setClient_id] = useState();
  const {
    data: client_data,
    isLoading: client_loading,
    isSuccess: client_success,
  } = useGetClientQuery(client_id);

  const [discount, setDiscount] = useState();

  const [client_address, setClient_address] = useState();
  const [client_contact, setClient_contact] = useState();
  const [client_name, setClient_name] = useState();

  const client_fun_to_get_id = (data) => {
    setClient_id(data);
  };

  useEffect(() => {
    console.log("client", client_data);
    if (client_data) {
      setClient_address(client_data.site_address);
      setClient_contact(client_data.phone);
      setClient_name(client_data.contact_person_name);
    }
  }, [client_data]);

  const client_fun = (data) => {
    console.log("serach", data);
    setclient_name_search(data);
  };

  const [total_bam, setTotal_bam] = useState();

  const ultimate = () => {
    console.log("this data", total_bam);
    const data2 = total_bam.map((item) => {
      const length = item.length || 1; // Set default value of 1 if length is not present
      const height = item.height || 1; // Set default value of 1 if height is not present
      const width = item.width || 1; // Set default value of 1 if height is not present
      const depth = item.depth || 1; // Set default value of 1 if height is not present
      const total = item.costing * length * height * width * depth;

      return {
        ...item, // Keep all existing properties from data1 item
        total, // Add the total property to the item
      };
    });
    console.log(data2);

    const totalSum = data2?.reduce((accumulator, currentItem) => {
      const totalValue = parseFloat(currentItem.total);
      return accumulator + totalValue;
    }, 0);

    if (discount) {
      const lastSum = (totalSum * discount) / 100;

      setTotal(totalSum - lastSum);
    } else {
      setTotal(totalSum);
    }

    console.log(total);
    form.setFieldsValue({ item: data2 });
  };

  useEffect(() => {
    if (total_bam && total_bam !== undefined) {
      ultimate();
    }
  }, [total_bam, discount]);
  useEffect(() => {
    console.log("ashasjd:", discount);
  }, [discount]);

  const [createQuotation, creatQuotationResponseInfo] =
    useCreateQuotationMutation();
  const [deleteQuotation, deleteQuotationResponseInfo] =
    useDeleteQuotationMutation();
  const [formdata_update, setformdata_update] = useState();

  useEffect(() => {
    if (props.id) {
      setformdata_update(props.id);
    }
  }, [props.id]);
  useEffect(() => {
    if (creatQuotationResponseInfo?.isSuccess === true) {
      message.success("Invoice Created");
      navigate("/quotation");
    }
    //  if(creatQuotationResponseInfo?)
  }, [creatQuotationResponseInfo]);

  useEffect(() => {
    console.log("load", creatQuotationResponseInfo.isLoading);
    if (creatQuotationResponseInfo?.isSuccess === true) {
      if (datas !== "name") {
        deleteQuotation(formdata_update);
      }
    }
    //  if(creatQuotationResponseInfo?)
  }, [creatQuotationResponseInfo]);

  const thisfun = (data) => {
    console.log(deleteQuotationResponseInfo);

    if (data) {
      data?.item?.forEach((obj) => {
        delete obj["id"];
        delete obj["quotation"];
      });
      // formdata_update.dated="adfsd"
      // formdata_update.delivery_date="adfsd"
      console.log("Payload", data);
      createQuotation(data);
    }
  };
  const unit = ["gram", "meter"];

  useEffect(() => {
    if (props.loading === false && props.isSuccess === false) {
      setdatas("name");
    }
  }, [props.loading, props.isSuccess]);

  useEffect(() => {
    if (props.data && props.id) {
      setdatas(props.data);
      setClient_address(props.data?.client_address);
      setClient_contact(props.data?.client_contact);
      setClient_name(props.data?.client_name);

      const modifiedData = props.data.item.map((item) => {
        const { id, item_id, ...rest } = item;
        return { id: item_id, ...rest };
      });

      // Convert back to JSON string
      console.log(modifiedData);
      setTotal_bam(modifiedData);
    }
  }, [props.data]);
  useEffect(() => {
    console.log("datas", props.data);
  }, [datas]);

  const [total, setTotal] = useState();

  const [form] = Form.useForm();

  const datafun = (data) => {
    if (total_bam) {
      const mergedData = total_bam?.map((item1) => {
        const item2 = data?.find((item) => item.id === item1.id);
        if (item2) {
          return { ...item1, ...item2 };
        }
        return item1;
      });
      console.log("total bam", total_bam);
      const filteredData = mergedData?.filter((item) =>
        data?.find((obj) => obj.id === item.id)
      );
      const newData = data.filter(
        (item) => !total_bam.find((obj) => obj.id === item.id)
      );
      const updatedData = [...filteredData, ...newData];

      form.setFieldsValue({ item: updatedData });
    } else {
      form.setFieldsValue({ item: data });
    }
    console.log("data", data);
    setTotal_bam(data);
    // const totalSum = data?.reduce((accumulator, currentItem) => {
    //   const totalValue = parseFloat(currentItem.total);
    //   return accumulator + totalValue;
    // }, 0);
    // setTotal(totalSum)
  };

  const [formData, setFormData] = useState([]);
  useEffect(() => {
    console.log("add", formData);
  }, [formData]);
  const handleLengthChange = (value, index) => {
    const updatedData = [...formData];
    updatedData[index] = { ...updatedData[index], length: value };
    setFormData(updatedData);
  };

  const handleHeightChange = (value, index) => {
    const updatedData = [...formData];
    updatedData[index] = { ...updatedData[index], height: value };
    setFormData(updatedData);
  };
  const handleWidthChange = (value, index) => {
    const updatedData = [...formData];
    updatedData[index] = { ...updatedData[index], width: value };
    setFormData(updatedData);
  };
  const handleDepthChange = (value, index) => {
    const updatedData = [...formData];
    updatedData[index] = { ...updatedData[index], depth: value };
    setFormData(updatedData);
  };

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
      {datas || props.id === undefined ? (
        <div className="form-box">
          <Form
            form={form}
            onValuesChange={(changedValues, allValues) => {
              // Check if the 'item' field has changed
              if ("item" in changedValues) {
                console.log(changedValues);
                const userData = allValues.item;
                setTotal_bam(userData);
              }
            }}
            name="dynamic_form_nest_item"
            onFinish={(data) => {
              if (props.data) {
                onUpdate(
                  data,
                  deleteQuotation,

                  props.id,
                  // thisfun,
                  // setformdata_update,
                  createQuotation,
                  client_id,
                  client_name,
                  client_address,
                  client_contact,
                  total
                );
              } else {
                onFinish(
                  data,
                  createQuotation,
                  invoice_id,
                  client_id,
                  client_name,
                  client_address,
                  client_contact,
                  data1,
                  total
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
            <Form.Item label="Client" name="client_id">
              <Select
                showSearch
                optionFilterProp="children"
                placeholder="Your Client Name"
                onChange={client_fun_to_get_id}
                onSearch={client_fun}
              >
                {client?.results?.map((client) => (
                  <Select.Option
                    value={client.id}
                    onChange={client_fun_to_get_id}
                  >
                    {client.contact_person_name}
                  </Select.Option>
                ))}
              </Select>
            </Form.Item>

            <Form.Item name="user_client"></Form.Item>
            <Form.Item name="user_client_id"></Form.Item>

            <div className="address">
              <h3 className="h3-title">Client Details</h3>
              <Form.Item
                style={{}}
                label="Client Address"
                name={["client_address"]}
                labelCol={5}
              >
                <p>
                  <Input
                    value={client_address}
                    onChange={(e) => setClient_address(e.target.value)}
                    placeholder="Enter Client Address"
                  />
                </p>
              </Form.Item>
              <Form.Item
                label="Client Contact"
                name={["client_contact"]}
                labelCol={5}
              >
                <p>
                  <Input
                    type="number"
                    value={client_contact}
                    onChange={(e) => setClient_contact(e.target.value)}
                    placeholder="Enter Your Shipping Company Name"
                  />
                </p>
              </Form.Item>
            </div>
            <div className="address">
              <h3 className="h3-title">Item Details</h3>
              <Form.Item
                style={{}}
                label="Special Note"
                name={["special_note"]}
                labelCol={5}
              >
                <p>
                  <Input placeholder="Enter Special Note" />
                </p>
              </Form.Item>
              <Form.Item label="Discount " name={["discount"]} labelCol={5}>
                <p>
                  <Input
                    type="number"
                    value={discount}
                    onChange={(e) => setDiscount(e.target.value)}
                    style={{ width: "200px" }}
                    placeholder="Enter Discount in percent"
                  />
                </p>
              </Form.Item>
            </div>

            <div className="add-amount">
              <ItemTable data1={datafun} total_bam={total_bam} />
              <Form.Item name="client_name"></Form.Item>
              <Form.Item name="quotation_number"></Form.Item>
              <Form.List name="item">
                {(fields, { remove }) => (
                  <>
                    {fields.map(({ key, name, ...restField }, index) => (
                      // {fields.map(({ key, name, ...restField }) => (
                      <Space
                        key={key}
                        style={{
                          display: "flex",
                          marginBottom: 8,
                        }}
                        align="baseline"
                        className="quotation-form-list"
                      >
                        <Form.Item
                          {...restField}
                          name={[name, "item_name"]}
                          rules={[
                            {
                              required: true,
                              message: "Missing Item Name",
                            },
                          ]}
                        >
                          <Input
                            placeholder="Description of Goods"
                            className="b c w-cus-moblie"
                          />
                          {/* {console.log(users[0].Desc)} */}
                        </Form.Item>
                        <Form.Item
                          {...restField}
                          name={[name, "item_category"]}
                          rules={[
                            {
                              required: true,
                              message: "Missing first name",
                            },
                          ]}
                        >
                          <Input
                            placeholder="Enter the Category"
                            className="b c w-cus-moblie"
                          />
                        </Form.Item>

                        <Form.Item
                          {...restField}
                          name={[name, "costing"]}
                          rules={[
                            {
                              required: true,
                              message: "Missing last name",
                            },
                          ]}
                        >
                          <InputNumber
                            className="b w-cus-moblie"
                            placeholder="sac no of product"
                          />
                        </Form.Item>

                        <Form.Item
                          {...restField}
                          name={[name, "unit"]}
                          rules={[
                            {
                              required: true,
                              message: "Missing last name",
                            },
                          ]}
                          style={{ width: "200px" }}
                        >
                          <Select
                            showSearch
                            className="w-cus-moblie"
                            placeholder="Select Unit Type"
                          >
                            {unit?.map((item) => (
                              <Select.Option key={item} value={item}>
                                {item}
                              </Select.Option>
                            ))}
                          </Select>
                        </Form.Item>

                        <Form.Item {...restField} name={[name, "length"]}>
                          <InputNumber
                            className="w-cus-moblie"

                            placeholder="Length"
                          />
                        </Form.Item>
                        <Form.Item {...restField} name={[name, "height"]}>
                          <InputNumber 
                            className="w-cus-moblie"
                          
                          placeholder="Height" />
                        </Form.Item>
                        <Form.Item {...restField} name={[name, "depth"]}>
                          <InputNumber 
                            className="w-cus-moblie"
                          
                          placeholder="Depth" />
                        </Form.Item>
                        <Form.Item {...restField} name={[name, "width"]}>
                          <InputNumber  
                            className="w-cus-moblie"
                          
                          placeholder="Width" />
                        </Form.Item>
                        <Form.Item
                          {...restField}
                          name={[name, "total"]}
                          rules={[
                            {
                              required: true,
                              message: "Missing Total",
                            },
                          ]}
                        >
                          <InputNumber
                            className="w-cus-moblie"
                          
                          placeholder="Total" />
                        </Form.Item>

                        <MinusCircleOutlined
                          className="c"
                          onClick={() => remove(name)}
                        />
                      </Space>
                    ))}
                  </>
                )}
              </Form.List>
            </div>
            {discount ? (
              <p>
                <b>Total Value : </b> {total} with <b>{discount}</b>% Discount
              </p>
            ) : (
              <p>
                <b>Total Value : </b> {total}{" "}
              </p>
            )}
            <Form.Item>
              {creatQuotationResponseInfo.isLoading === true ? (
                <p>Please Waity</p>
              ) : (
                <Button  style={{height:"100%"}}  type="primary" htmlType="submit">
                  {props?.data ? <>Update</> : <>Submit</>}
                </Button>
              )}
            </Form.Item>
          </Form>
        </div>
      ) : (
        <SyncLoader color="#323a3d" />
      )}
    </div>
  );
};

export default QuotationForm;
