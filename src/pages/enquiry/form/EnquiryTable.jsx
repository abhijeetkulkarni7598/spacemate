import React, { useEffect, useRef, useState } from "react";
import ETable from "../../../components/editable_table/Etable";
import Slidebar from "../../../components/sidebar/Slidebar";
import {
  Button,
  Input,
  Popconfirm,
  Select,
  Skeleton,
  Space,
  message,
} from "antd";
import { SearchOutlined } from "@ant-design/icons";
import Highlighter from "react-highlight-words";

import {
  useFetchCustomerQuery,
  useFetchEnquiryQuery,
  useFetchStatusQuery,
  useUpdateEnquiryMutation,
} from "../../../store/store";
import { BiEdit, BiTrash } from "react-icons/bi";
import { Option } from "antd/es/mentions";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { FaEye } from "react-icons/fa";
import PdfViewer from "./../../commonpage/PdfViewer";
import { MdViewList } from "react-icons/md";
import { Filter_Enquiry } from "../../../store/mutation/userSlice";
import { EnquiryStatusArray } from "../../../components/Functions/State";

const ViewModel = ({ performCancel, getData }) => {
  return (
    <>
      <div className="model-con">
        <div className="model-box" style={{ width: "80vw" }}>
          <PdfViewer data={getData} />
          {getData}
          <div style={{ margin: "20px 0px" }}>
            <Button onClick={() => performCancel()} type="primary" danger>
              Cancel
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};
const EnquiryTable = () => {
  const [updateEnquiry, updateEnquiryResponseInfo] = useUpdateEnquiryMutation();
  useEffect(() => {
    if (updateEnquiryResponseInfo?.isSuccess) {
      message.success("User Set Successfull");
    }
  }, [updateEnquiryResponseInfo]);
  const navigate = useNavigate();
  const { user, userToken, enquiry_page,filter_enquiry, checkAuthLoading, isAuthenticated } =
    useSelector((state) => state.user);
  const [user_id, setUser_id] = useState("");
const dispatch=useDispatch()
  const handleChange = (pagination, filters, sorter) => {
    console.log(pagination);
    dispatch(Filter_Enquiry(filters));
   

    console.log(sorter);
  };
  const {
    data: data,
    isLoading: loading,
    isFetching: fetch,
    error: error,
  } = useFetchEnquiryQuery({ user: user_id, page: enquiry_page ,name:filter_enquiry.name===null?"": filter_enquiry?.name[0]});
  const {
    data: customer_data,
    isLoading: customer_loading,
    isFetching: customer_fetch,
    error: customer_error,
  } = useFetchCustomerQuery();
  const [columns, setColumn] = useState();

  const create_client = () => {};
  const deletethis = (e) => {
    e.stopPropagation();
  };
  const [getData, setGetData] = useState();
  const [showFloorPlan, setShowFloorPlan] = useState(false);
  const performCancel = () => {
    setGetData();
    setShowFloorPlan(false);
  };
  const editfun = (record) => {
    setGetData(record.floor_plain);
    setShowFloorPlan(true);
  };
  const navi = (data) => {
    // navigate(`/design-table/${data.id}`);
  };
  const navi2 = (data) => {
    navigate(`/design-table/${data.id}`);
  };
  const handleSelect = (data, record) => {
    const { customer_id, floor_plain, ...other } = record;
    const newData = { customer_id: data, ...other };

    updateEnquiry(newData);
  };
  const handleSelectCustomerStatus = (data, record) => {
    const { status, floor_plain, ...other } = record;
    const newData = { status: data, ...other };
    updateEnquiry(newData);

  };
  useEffect(() => {
    if (user?.is_customer) {
      setUser_id(user?.id);
    }
  }, [user]);
  const [searchText, setSearchText] = useState("");
  const [searchedColumn, setSearchedColumn] = useState("");
  const searchInput = useRef(null);
  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };
  const handleReset = (clearFilters) => {
    clearFilters();
    setSearchText("");
  };
  const getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters,
      close,
      filter,
    }) => (
      <div
        style={{
          padding: 8,
        }}
        onKeyDown={(e) => e.stopPropagation()}
      >
        <Input
          ref={searchInput}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) =>
            setSelectedKeys(e.target.value ? [e.target.value] : [])
          }
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{
            marginBottom: 8,
            display: "block",
          }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{}}
          >
            Search
          </Button>
          <Button
            onClick={() => clearFilters && handleReset(clearFilters)}
            size="small"
          >
            Reset
          </Button>
          {/* <Button
            type="link"
            size="small"
            onClick={() => {
              confirm({
                closeDropdown: false,
              });
              setSearchText(selectedKeys[0]);
              setSearchedColumn(dataIndex);
            }}
          >
            Filter
          </Button> */}
          <Button
            type="link"
            size="small"
            onClick={() => {
              close();
            }}
          >
            close
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered) => (
      <>
        <SearchOutlined
          className="SearchOutlined"
          style={{
            color: filtered ? "#ffffff" : undefined,
          }}
        />
      </>
    ),
    onFilter: (value, record) =>
      record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
    onFilterDropdownOpenChange: (visible) => {
      if (visible) {
        setTimeout(() => searchInput.current?.select(), 100);
      }
    },
    render: (text) =>
      searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{
            backgroundColor: "#ffc069",
            padding: 0,
          }}
          searchWords={[searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ""}
        />
      ) : (
        text
      ),
    filteredValue:
    filter_enquiry[dataIndex] || undefined,
  });


  useEffect(() => {
    if (user_id) {
      setColumn([
        {
          title: "Sr.no",
          dataIndex: "id",
          key: "id",
          //   ...getColumnSearchProps('name'),
          width: 100,
          fixed: "left",
          render: (text, record, index) => {
            return <span>{enquiry_page * 10 - 10 + index + 1}</span>;
          },
        },
        {
          title: "Name",
          dataIndex: "name",
          key: "id",
          width: "100",
          fixed: "left",
          //   ...getColumnSearchProps('name'),
        },

        {
          title: "Cx Email",
          dataIndex: "email",
          key: "id",
          width: 200,
        },
        {
          title: "Customer",
          dataIndex: "customer_id",
          key: "id",
          width: "15%",
          render: (text, record, index) => {
            return (
              <p>
                {
                  customer_data?.filter(
                    (item) => parseInt(item.id) === parseInt(record.user)
                  )[0]?.username
                }
              </p>
            );
          },
        },
       
        {
          title: "Phone",
          dataIndex: "mobile",
          key: "id",
        },

        {
          title: "Address",
          dataIndex: "address",
          key: "id",
          width: 300,
        },
        {
          title: " ",
          key: "id",
          fixed: "right",
          width: 50,
          render: (record) => (
            <MdViewList
              className="bi-edit"
              style={{ width: "100%", height: "20px" }}
              onClick={(e) => {
                e.stopPropagation();
                navi2(record);
              }}
            />
          ),
        },
        {
          title: " ",
          key: "id",
          fixed: "right",
          width: 50,
          render: (record) => (
            <FaEye
              className="bi-edit"
              style={{ width: "100%", height: "20px" }}
              onClick={(e) => {
                e.stopPropagation();
                editfun(record);
              }}
            />
          ),
        },
      ]);
    } else {
      setColumn([
        {
          title: "Sr.no",
          dataIndex: "id",
          key: "id",
          //   ...getColumnSearchProps('name'),
          width: 100,
          fixed: "left",
          render: (text, record, index) => {
            return <span>{enquiry_page * 10 - 10 + index + 1}</span>;
          },
        },
        {
          title: "Name",
          dataIndex: "name",
          key: "name",
          width: "100",

          ...getColumnSearchProps("name"),

          //   ...getColumnSearchProps('name'),
        },

        {
          title: "Cx Email",
          dataIndex: "email",
          key: "email",
          width: 200,
          // ...getColumnSearchProps("email"),
        },
        {
          title: "Customer Status",
          dataIndex: "status",
          key: "id",
          width: 160,
          render: (text, record, index) => {
            return (
              <>
                <Select
                  onSelect={(data) => handleSelectCustomerStatus(data, record)}
                 value={text}
                  style={{ width: "150px" }}
                >
                  {EnquiryStatusArray?.map((item) => (
                    <Option value={item} key={item}>
                      {item}
                    </Option>
                  ))}
                </Select>
              </>
            );
          },
        },
       
        {
          title: "Customer",
          dataIndex: "customer_id",
          key: "id",
          width: 160,
          render: (text, record, index) => {
            return (
              <>
                <Select
                  onSelect={(data) => handleSelect(data, record)}
                  value={
                    customer_data?.filter(
                      (item) => parseInt(item.id) === parseInt(record.user)
                    )[0]?.username
                  }
                  style={{ width: "150px" }}
                >
                  {customer_data?.map((item) => (
                    <Option value={item.id} key={item.id}>
                      {item.username}
                    </Option>
                  ))}
                </Select>
              </>
            );
          },
        },
    
        {
          title: "Phone",
          dataIndex: "mobile",
          key: "id",
        },

        {
          title: "Address",
          dataIndex: "address",
          key: "id",
          width: 300,
        },
        {
          title: " ",
          key: "id",
          fixed: "right",
          width: 50,
          render: (record) => (
            <MdViewList
              className="bi-edit"
              style={{ width: "100%", height: "20px" }}
              onClick={(e) => {
                e.stopPropagation();
                navi2(record);
              }}
            />
          ),
        },
        {
          title: " ",
          key: "id",
          fixed: "right",
          width: 50,
          render: (record) => (
            <FaEye
              className="bi-edit"
              style={{ width: "100%", height: "20px" }}
              onClick={(e) => {
                e.stopPropagation();
                editfun(record);
              }}
            />
          ),
        },

        {
          title: " ",
          key: "id",
          width: 50,
          fixed: "right",
          render: (record) => (
            <Popconfirm
              title="Sure to delete?"
              onConfirm={(e) => deletethis(e, record)}
              onCancel={(e) => e.stopPropagation()}
            >
              {/* <a style={{color:"red"}}>Delete</a> */}
              <BiTrash
                className="bi-edit"
                onClick={(e) => {
                  e.stopPropagation();
                }}
                style={{ width: "100%", height: "20px", color: "red" }}
              />
            </Popconfirm>
          ),
        },
      ]);
    }
  }, [customer_data, data, user_id, searchText, searchedColumn, filter_enquiry]);

  return (
    <div>
      {/* <Navbar/> */}
      <Slidebar />

      <div className="for-etable">
        <h2 className="e-table-h2">Enquiry Table</h2>
        {/* {user_id?null:

        <button
        style={{
            padding: "10px 40px",
            borderRadius: "7px",
            border: "none",
            backgroundColor: "#0253a2",
            color: "white",
            fontSize: "15px",
            fontWeight: "bolder",
            cursor: "pointer",
            marginBottom: "30px",
          }}
          onClick={create_client}
        >
          Create New Enquiry
        </button>
        } */}

        {loading && columns ? (
          <Skeleton />
        ) : (
          <ETable
            data={data}
            columns={columns}
            loading={fetch || updateEnquiryResponseInfo?.isLoading}
            page={enquiry_page}
            error={error}
            field={"enquiry"}
            navi={navi}
            handleChange={handleChange}
          />
        )}
        {showFloorPlan ? (
          <ViewModel performCancel={performCancel} getData={getData} />
        ) : null}
      </div>
    </div>
  );
};

export default EnquiryTable;
