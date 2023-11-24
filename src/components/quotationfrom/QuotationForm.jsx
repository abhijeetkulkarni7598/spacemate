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
// import { parse, format } from 'date-fns';
// import 'antd/es/date-picker/locale/en_US';
import "./invoiceform.css";
import useFormItemStatus from "antd/es/form/hooks/useFormItemStatus";
import {
  useCreateQuotationMutation,
  useDeleteQuotationMutation,
  useFetchCategoryQuery,
  useFetchClientQuery,
  useFetchInventoryQuery,
  useFetchInvoiceQuery,
  useFetchQuotationQuery,
  useFetchStatusQuery,
  useGetClientQuery,
  useGetQuotationCountQuery,
  useSearchClientQuery,
  useUpadteInventoryMutation,
} from "../../store/store";
import { useNavigate } from "react-router-dom";
import moment from "moment/moment";
import { uuid, indianStates } from "./uuid";
import TextArea from "antd/es/input/TextArea";
import ItemTable from "../models/ItemTable";
import { useSelector } from "react-redux";
import ClientModel from "../models/ClientModel";
import { Option } from "antd/es/mentions";
import FormItem from "antd/es/form/FormItem";

const layout = {
  labelCol: { span: 15 },
  wrapperCol: { span: 25 },
};
const ly = {
  labelCol: { span: 20 },
};
const onRevision = (
  data,
  createQuotation,
  client_id,
  client_name,
  client_address,
  client_contact,
  statusInit,
  data1,
  total,
  count
) => {
  const { item, ...values } = data;

  data.client_address = client_address;
  data.client_contact = client_contact;
  data.client_id = client_id;
  data.client_name = client_name;
  if(Number.isInteger(parseInt(statusInit))){

    data.status=statusInit;

  }
  console.log(data1);

  data.revision_no = "R" + (1 + count.count).toString().padStart(2, "0");

  data.user_client = JSON.parse(localStorage.getItem("user")).username;
  data.user_client_id = JSON.parse(localStorage.getItem("user")).id;
  data.total_with_discount = total;

  const today = new Date(data.date);

  // Extract the day, month, and year
  const day = String(today.getDate()).padStart(2, "0");
  const month = String(today.getMonth() + 1).padStart(2, "0"); // Months are zero-based
  const year = today.getFullYear().toString().slice(-2);

  // Format the date as dd/mm/yyyy
  const formattedDate = `${day}/${month}/${year}`;

  // Output the formatted date
  data.date = formattedDate;

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
  statusInit,
  total
) => {
  console.log("Upadte", data);
  if(Number.isInteger(parseInt(statusInit))){

    data.status=statusInit;

  }
  // setformdata_update(id);

  // thisfun(data);
  const today = new Date(data.date);

  // Extract the day, month, and year
  const day = String(today.getDate()).padStart(2, "0");
  const month = String(today.getMonth() + 1).padStart(2, "0"); // Months are zero-based
  const year = today.getFullYear().toString().slice(-2);

  // Format the date as dd/mm/yyyy
  const formattedDate = `${day}/${month}/${year}`;

  // Output the formatted date
  data.date = formattedDate;


  data.total_with_discount = total;
  if (client_id) {
    data.client_address = client_address;
    data.client_contact = client_contact;
    data.client_id = client_id;
    data.client_name = client_name;

  }
  if (data) {

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

    console.log("Payload", updatedObject);

    createQuotation(updatedObject);
  }
};
const onFinish = (
  data,
  createQuotation,
  client_id,
  client_name,
  client_address,
  client_contact,
  statusInit,
  data1,
  total
) => {
  const { item, ...values } = data;

  data.client_address = client_address;
  data.client_contact = client_contact;
  data.client_id = client_id;
  data.client_name = client_name;
  if(Number.isInteger(parseInt(statusInit))){

    data.status=statusInit;

  }

  console.log(data1);
  data.quotation_number =
    "SM" +
    (1 + data1.count).toString().padStart(4, "0") +
    (moment(new Date()).format("/YY") +
      moment(new Date()).add(1, "years").format("-YY"));
  data.revision_no = "R" + (1).toString().padStart(2, "0");

  data.user_client = JSON.parse(localStorage.getItem("user")).username;
  data.user_client_id = JSON.parse(localStorage.getItem("user")).id;
  data.total_with_discount = total;

  const today = new Date(data.date);

  // Extract the day, month, and year
  const day = String(today.getDate()).padStart(2, "0");
  const month = String(today.getMonth() + 1).padStart(2, "0"); // Months are zero-based
  const year = today.getFullYear().toString().slice(-2);

  // Format the date as dd/mm/yyyy
  const formattedDate = `${day}/${month}/${year}`;

  // Output the formatted date
  data.date = formattedDate;

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
  const [datas, setdatas] = useState();

  const { data: data1, isLoading: loading } = useFetchQuotationQuery({
    val: 1,
    id: "",
  });
  const [quo_no, setQuo_no] = useState();
  const { data: count, isLoading: countloading } = useGetQuotationCountQuery({
    name: quo_no,
  });
  const { data: category, isLoading: Catloading } = useFetchCategoryQuery();

  const getCategory = (data) => {
    console.log("lion", data);
  };
  // const { data: invoice_data, isLoading: invoiceLoading } =
  //   useFetchInvoiceQuery();

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
  const [clientShow, setClientShow] = useState(false);
  const client_fun_to_get_id = (data) => {
    setClient_id(data.id);
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
    // setclient_name_search(data);
  };
  const manage_client_show = (data) => {
    setClientShow(data);
  };
  const [total_bam, setTotal_bam] = useState();

  const ultimate = () => {
    console.log("this data", total_bam);
    const data2 = total_bam.map((item) => {
      const length = item?.length || 1; // Set default value of 1 if length is not present
      const height = item?.height || 1; // Set default value of 1 if height is not present
      const width = item?.width || 1; // Set default value of 1 if height is not present
      const depth = item?.depth || 1; // Set default value of 1 if height is not present
      const running_foot = item?.running_foot || 1; // Set default value of 1 if height is not present
      const sqft = item?.sqft || 1; // Set default value of 1 if height is not present
      const quantity = item?.quantity || 1; // Set default value of 1 if height is not present
      const numbers = item?.numbers || 1; // Set default value of 1 if height is not present
      const total =
        item.costing *
        length *
        height *
        width *
        depth *
        running_foot *
        numbers *
        quantity *
        sqft;

      return {
        ...item, // Keep all existing properties from data1 item
        total, // Add the total property to the item
      };
    });

    data2.map(
      (it) =>
        (it.item_category =
          category?.filter(
            (item) => parseInt(item.id) === parseInt(it.item_category)
          )[0]?.category !== undefined
            ? category?.filter(
                (item) => parseInt(item.id) === parseInt(it.item_category)
              )[0]?.category
            : it.item_category)
    );
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
      if(props.data){
        
        if(revision===true){

          message.success("Quotation Revision Created");
        }else{

          message.success("Quotation Updated");
        }
      }else{
        message.success("Quotation Created");

      }
      if (!props.data || revision === true) {
        navigate("/quotation");
      }
    }
    if (creatQuotationResponseInfo?.isError === true) {
      if(props.data){
        
        if(revision===true){

          message.error("Quotation Revision Failed");
        }else{

          message.error("Quotation Update Failed");
        }
      }else{
        message.error("Quotation Creation Failed");

      }
   
    }
    //  if(creatQuotationResponseInfo?)
  }, [creatQuotationResponseInfo]);
  useEffect(() => {
    if (deleteQuotationResponseInfo?.isSuccess === true) {
      navigate("/quotation");
    }
    //  if(creatQuotationResponseInfo?)
  }, [deleteQuotationResponseInfo]);

  useEffect(() => {
    if (creatQuotationResponseInfo?.isSuccess === true) {
      if (datas !== "name" && revision === false) {
        deleteQuotation(formdata_update);
      }
    }
    //  if(creatQuotationResponseInfo?)
  }, [creatQuotationResponseInfo]);

  const thisfun = (data) => {
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
  const unit = [
    "SQR METER",
    "MILI METER",
    "INCH",
    "SQR FOOT",
    "RUNNING FOOT",
    "NUMBERS",
    "LUMPSUM",
    "APPROXIMATE",
  ];
  const [revision, setRevision] = useState(false);
  const handleRevision = (data) => {
    setRevision(true);
  };

  const [Loading, setLoading] = useState(false);

  useEffect(() => {
    if (
      creatQuotationResponseInfo.isSuccess !==
      creatQuotationResponseInfo.isError
    ) {
      setLoading(false);
    }
  }, [creatQuotationResponseInfo]);

  useEffect(() => {
    if (props.loading === false && props.isSuccess === false) {
      setdatas("name");
    }
  }, [props.loading, props.isSuccess]);
  const [date, setDate] = useState();
  
  const {
    data: status,
    isLoading: statusLoading,
   
  } = useFetchStatusQuery();
const [statusInit, setStatusInit] = useState("");
useEffect(() => {
if(status&&props.data){
  setStatusInit(status?.filter((item)=>parseInt(item.id)===parseInt(props.data?.status))[0]?.status)

}
}, [props.data,status]);
  useEffect(() => {
    if (props.data && props.id) {
      setQuo_no(props.data?.quotation_number);
      setdatas({
        ...props.data,
        date: props.data?.date ? moment(props.data?.date, "DD/MM/YY") : null,
      });
      setClient_address(props.data?.client_address);
      setClient_contact(props.data?.client_contact);
      setClient_name(props.data?.client_name);
      setDiscount(props.data?.discount);

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
              if (revision) {
                onRevision(
                  data,
                  createQuotation,

                  client_id,
                  client_name,
                  client_address,
                  client_contact,
                  statusInit,
                  data1,
                  total,
                  count
                );
              } else {
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
                  statusInit,

                    total
                  );
                } else {
                  onFinish(
                    data,
                    createQuotation,
                    client_id,
                    client_name,
                    client_address,
                    client_contact,
                  statusInit,

                    data1,
                    total
                  );
                }
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
            <Form.Item>
              <Button
                style={{ background: "var(--pr-color) " }}
                type="primary"
                onClick={() => setClientShow(true)}
              >
                Select Client
              </Button>
            </Form.Item>

            {clientShow ? (
              <ClientModel
                show={manage_client_show}
                client_data={client_fun_to_get_id}
              />
            ) : null}
            <div className="address">
              <h3 className="h3-title">Client Details</h3>
              <Form.Item
                label="Remark"
                name={["remark"]}
                labelCol={5}
              >
                
                  <Input
                    type="text"
                    placeholder="Enter Remark"
                  />
              </Form.Item>
              <Form.Item
                label="Client Name"
                name={["client_name"]}
                labelCol={5}
              >
                <p>
                  <Input
                    value={client_name}
                    onChange={(e) => setClient_name(e.target.value)}
                    placeholder="Enter Client Name"
                  />
                </p>
              </Form.Item>
              <Form.Item
                style={{}}
                label="Client Address"
                name={["client_address"]}
                labelCol={5}
              >
                <p>
                  <TextArea
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
                    placeholder="Enter Client Contact"
                  />
                </p>
              </Form.Item>
     
            </div>
            <Form.Item  style={{margin:"0px",padding:"0px"}} name="client_id"></Form.Item>
            <Form.Item style={{margin:"0px",padding:"0px"}} name="revision_no"></Form.Item>

            <div className="address">
              <h3 className="h3-title">Item Details</h3>
              <Form.Item
                style={{}}
                label="Special Note"
                name={["special_note"]}
                labelCol={5}
              >
                  <Input placeholder="Enter Special Note" />
              </Form.Item>
              <Form.Item style={{}} label="Date" name={["date"]} labelCol={5}>
                <DatePicker format={"DD/MM/YY"} />
              </Form.Item>
              <FormItem
                style={{}}
                label="Status"
                name={["status"]}
                labelCol={5}
              >
<p>

                <Select 
                onSelect={(data)=>setStatusInit(data)}
                value={statusInit}
                >

                {status?.map((item)=>

<Option value={item.id} key={item.id}>{item.status}</Option>
                  )}
                </Select>
                  </p>
              </FormItem>
            </div>
            <Form.Item style={{margin:"0px",padding:"0px"}} name="user_client"></Form.Item>
            <Form.Item style={{margin:"0px",padding:"0px"}} name="user_client_id"></Form.Item>
            <div className="add-amount">
              <ItemTable data1={datafun} total_bam={total_bam} />
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
                          marginBottom: "50px",
                          padding: "20px",
                          flexDirection: "column",
                          background: "#e5e5e5",
                          width: "100%",
                          boxShadow: " 0px 0px 2px gray inset",
                        }}
                        align="baseline"
                        className="quotation-form-list"
                      >
                        <Row className="from-row">
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
                            name={[name, "specifications"]}
                          >
                            <Input
                              placeholder="Specifications"
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
                        </Row>
                        <Row className="from-row">
                          <Form.Item
                            {...restField}
                            label={"Length"}
                            labelCol={2}
                            name={[name, "length"]}
                          >
                            <InputNumber
                              className="w-cus-moblie"
                              placeholder="Length"
                            />
                          </Form.Item>
                          <Form.Item
                            {...restField}
                            label={"Height"}
                            labelCol={2}
                            name={[name, "height"]}
                          >
                            <InputNumber
                              className="w-cus-moblie"
                              placeholder="Height"
                            />
                          </Form.Item>
                          <Form.Item
                            {...restField}
                            label={"Depth"}
                            labelCol={2}
                            name={[name, "depth"]}
                          >
                            <InputNumber
                              className="w-cus-moblie"
                              placeholder="Depth"
                            />
                          </Form.Item>
                          <Form.Item
                            {...restField}
                            label={"Width"}
                            labelCol={2}
                            name={[name, "width"]}
                          >
                            <InputNumber
                              className="w-cus-moblie"
                              placeholder="Width"
                            />
                          </Form.Item>
                          <Form.Item
                            {...restField}
                            label={"Numbers"}
                            labelCol={2}
                            name={[name, "numbers"]}
                          >
                            <InputNumber
                              className="w-cus-moblie"
                              placeholder="Number"
                            />
                          </Form.Item>
                          <Form.Item
                            {...restField}
                            label={"Running_foot"}
                            labelCol={2}
                            name={[name, "running_foot"]}
                          >
                            <InputNumber
                              className="w-cus-moblie"
                              placeholder="Running Foot"
                            />
                          </Form.Item>
                          <Form.Item
                            {...restField}
                            label={"Sq Feet"}
                            labelCol={2}
                            name={[name, "sqft"]}
                          >
                            <InputNumber
                              className="w-cus-moblie"
                              placeholder="Sq Ft"
                            />
                          </Form.Item>
                          <Form.Item
                            {...restField}
                            label={"Quantity"}
                            labelCol={2}
                            name={[name, "quantity"]}
                          >
                            <InputNumber
                              className="w-cus-moblie"
                              placeholder="Quantity"
                            />
                          </Form.Item>
                          <Form.Item
                            labelCol={2}
                            {...restField}
                            label={"Total"}
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
                              placeholder="Total"
                            />
                          </Form.Item>
                        </Row>

                        {/* <MinusCircleOutlined
                          className="c"
                          onClick={() => remove(name)}
                        /> */}
                        <Button
                          style={{
                            background: "var(--pr-color)",
                            color: "white",
                          }}
                          className="c"
                          onClick={() => remove(name)}
                        >
                          Delete
                        </Button>
                      </Space>
                    ))}
                  </>
                )}
              </Form.List>
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
              <Button
                loading={creatQuotationResponseInfo.isLoading}
                style={{ height: "100%", background: "var(--pr-color) " }}
                type="primary"
                htmlType="submit"
                disabled={creatQuotationResponseInfo.isLoading}
              >
                {props?.data ? <>Update</> : <>Submit</>}
              </Button>

              {props?.data ? (
                <Button
                  onClick={handleRevision}
                  loading={creatQuotationResponseInfo.isLoading}
                  style={{
                    marginLeft: "40px",
                    height: "100%",
                    background: "var(--pr-color) ",
                  }}
                  type="primary"
                  htmlType="submit"
                >
                  Revision
                </Button>
              ) : null}
            </Form.Item>

            <Form.Item></Form.Item>
          </Form>
        </div>
      ) : (
        <SyncLoader color="#323a3d" />
      )}
    </div>
  );
};

export default QuotationForm;
