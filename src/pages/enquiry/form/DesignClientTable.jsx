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
import { CloseOutlined } from "@ant-design/icons";

import {
  useFetchClientQuery,
  useFetchCustomerQuery,
  useFetchEnquiryQuery,
  useFetchSalesUserQuery,
  useFetchStatusQuery,
  useUpdateEnquiryMutation,
} from "../../../store/store";
import { BiEdit, BiTrash } from "react-icons/bi";
import { Option } from "antd/es/mentions";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { FaEdit, FaEye } from "react-icons/fa";
import PdfViewer from "./../../commonpage/PdfViewer";
import { MdViewList } from "react-icons/md";
import { Filter_Enquiry } from "../../../store/mutation/userSlice";
import { EnquiryStatusArray } from "../../../components/Functions/State";

const ViewModel = ({ performCancel, getData }) => {
  return (
    <>
      <div className="model-con">
        <div className="model-box" style={{ width: "80vw" ,height:"90vh"}}>
          <div style={{height:"100%",overflow:"auto"}}>

          <h2>Floor Plan</h2>
          <PdfViewer data={getData?.floor_plain} />
          <h2>Mood Board</h2>
          <PdfViewer data={getData?.moon_board} />
          <h2>Furniture Plan</h2>
          <PdfViewer data={getData?.proposed_furniture_plan} />
          </div>
          
          
          {/* {getData} */}
          {/* <div style={{ margin: "20px 0px" }}> */}
          <p className="p--cross--custom" onClick={()=>performCancel()}>
                    <CloseOutlined />
                  </p>
          {/* </div> */}
        </div>
      </div>
    </>
  );
};
const DesignClientTable = () => {
  const [updateEnquiry, updateEnquiryResponseInfo] = useUpdateEnquiryMutation();
  useEffect(() => {
    if (updateEnquiryResponseInfo?.isSuccess) {
      message.success("User Set Successfull");
    }
  }, [updateEnquiryResponseInfo]);
  const navigate = useNavigate();
  const { user, userToken, enquiry_page,filter_enquiry,client_page, checkAuthLoading, isAuthenticated } =
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
  } = useFetchClientQuery({
    val: client_page,
    id: user_id,
    status: "&customer_status=1",
    search:""
  });
  const [columns, setColumn] = useState();

  const create_client = () => {
    navigate("/create-enquiry")
  };

  const [getData, setGetData] = useState();
  const [showFloorPlan, setShowFloorPlan] = useState(false);
  const performCancel = () => {
    setGetData();
    setShowFloorPlan(false);
  };
  const editfun = (record) => {
    setGetData(record);
    setShowFloorPlan(true);
  };
  const navi = (data) => {
    // navigate(`/design-table/${data.id}`);
  };
  const navi2 = (data) => {
    navigate(`/design-table/${data.id}`);
  };
 
  useEffect(() => {
    if (user?.is_customer) {
      setUser_id(user?.id);
    }else if(user?.is_superuser||user?.is_admin){

    }else{
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
    if (user_id&&user?.is_customer) {
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
            <FaEdit
              className="bi-edit"
              style={{ width: "100%", height: "20px" }}
              onClick={(e) => {
                e.stopPropagation();
                navigate(`/create-enquiry/${record.id}`)

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
    } else if(user_id){
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
          ...getColumnSearchProps("email"),

          // ...getColumnSearchProps("email"),
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
        // {
        //   title: " ",
        //   key: "id",
        //   fixed: "right",
        //   width: 50,
        //   render: (record) => (
        //     <MdViewList
        //       className="bi-edit"
        //       style={{ width: "100%", height: "20px" }}
        //       onClick={(e) => {
        //         e.stopPropagation();
        //         navi2(record);
        //       }}
        //     />
        //   ),
        // },
      
       

       
      ]);
    }
      else {
      setColumn([
        {
          title: "Sr.no",
          dataIndex: "id",
          key: "id",
          //   ...getColumnSearchProps('name'),
          width: 20,
          fixed: "left",
          render: (text, record, index) => {
            return <span>{enquiry_page * 10 - 10 + index + 1}</span>;
          },
        },
        {
          title: "Name",
          dataIndex: "name",
          key: "name",
          width: 50,

          ...getColumnSearchProps("name"),

          //   ...getColumnSearchProps('name'),
        },

        {
          title: "Cx Email",
          dataIndex: "email",
          key: "email",
          width: 100,
          ...getColumnSearchProps("email"),
        },
       
       
       
       
        {
          title: "Phone",
          dataIndex: "mobile",
          key: "mobile",
          width: 100,

          ...getColumnSearchProps("mobile"),

        },

        {
          title: "Address",
          dataIndex: "address",
          key: "id",
          width: 200,
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
      
      ]);
    }
  }, [ data, user_id, searchText, searchedColumn, filter_enquiry]);

  return (
    <div>
      {/* <Navbar/> */}
      <Slidebar />

      <div className="for-etable">
        <h2 className="e-table-h2">Client Design Table</h2>
     
  {/* <Search
            placeholder="Search Quotation By Clients Name"
            enterButton="Search"
            size="large"
            onSearch={(data) => {
              console.log(data);
              setSearchText(data);
            }}
          /> */}
        {loading ||!columns? (
          <Skeleton />
        ) : (
          <ETable
          size={"small"}
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

export default DesignClientTable;

