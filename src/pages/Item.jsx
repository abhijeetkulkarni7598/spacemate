import React, { useEffect, useState } from "react";
import ETable from "../components/editable_table/Etable";
import { Button, Input, Popconfirm, Skeleton, message } from "antd";
import { useSelector } from "react-redux";
import { useDeleteItemMutation, useFetchCategoryQuery, useFetchItemsQuery, useGetItemsQuery } from "../store/store";
import { useNavigate, useParams } from "react-router-dom";
import CreateItem from "./CreateItem";
import Itemform from "../components/quotationfrom/Itemform";
import Slidebar from "../components/sidebar/Slidebar";
import { BiEdit, BiTrash } from "react-icons/bi";

export default function Item() {
  const [show, setShow] = useState(false);
  const { item_page } = useSelector((state) => state.user);

  const { user } = useSelector((state) => state.user);
  const [user_id, setUser_id] = useState("");
  useEffect(() => {
    if (user?.is_superuser===true || user?.is_admin===true) {
    } else {
      setUser_id(user?.id);
    }
  }, [user]);
  const [search, setSearch] = useState("");

  const {
    data: data,
    isLoading: loading,
    isFetching: fetch,
    error: error,
  } = useFetchItemsQuery({
    val: item_page,
    search: search,
  });
  const [deleteItem, deleteItemResponseInfo] = useDeleteItemMutation();
  useEffect(() => {
    if (deleteItemResponseInfo?.status === "fulfilled") {
      message.success("Delete Successfull");
    }
  }, [deleteItemResponseInfo]);
  const navigate = useNavigate();
  const [formdata, setFormdata] = useState();
  const [id, setid] = useState();
  const create_item = () => {
    setFormdata()
    setid()
    setShow(true);
    // navigate("/item-create")
  };

  const editfun = (data) => {
    // navigate(`/item-create/${data.id}`);
setFormdata(data)
setid(data.id)
setShow(true)
  };
  const deletethis = (data) => {
    console.log(data);
    if (data?.id) {
      deleteItem(data?.id);
    }
  };
  const handleDelete = (key) => {
   console.log("key",key)
  };
  const [columns, setColumn] = useState();
  const {
    data: category,
    isLoading: Catloading,
   
  } = useFetchCategoryQuery();
  useEffect(() => {
    if (user_id) {
      setColumn([
        {
          title: "Sr.no",
          dataIndex: "id",
          key: "id",
          width: 100,
          render: (text, record, index) => {
            return <span>{item_page * 10 - 10 + index + 1}</span>;
          },

          //   ...getColumnSearchProps('name'),
        },
        {
          title: "Item Name",
          dataIndex: "item_name",
          key: "id",
          //   ...getColumnSearchProps('name'),
        },
        {
          title: "Room/Area",
          dataIndex: "item_category",
          key: "id",
          render: (text, record, index) => {
            return <>{category?.filter((item)=>parseInt(item.id)===parseInt(record.item_category))[0]?.category
            }</>;
          },
          //   ...getColumnSearchProps('age'),
        },

        {
          title: "Unit",
          dataIndex: "unit",
          key: "id",
        },
        {
          title: "Costing",
          dataIndex: "costing",
          key: "id",
        },

        {
          title: ' ',
          key: 'id',
          fixed: 'right',
          width: 50,
          render: (record) =>   <BiEdit
          className="bi-edit"
          
          style={{ width: "100%", height: "20px" }}
          onClick={(e) => {
            e.stopPropagation();
            editfun(record);
          }}
        />,
    
    
        },
      ]);
    } else {
      setColumn([
        {
          title: "Sr.no",
          dataIndex: "id",
          key: "id",
          width: 100,
          render: (text, record, index) => {
            return <span>{item_page * 10 - 10 + index + 1}</span>;
          },
          //   ...getColumnSearchProps('name'),
        },
        {
          title: "Item Name",
          dataIndex: "item_name",
          key: "id",
          //   ...getColumnSearchProps('name'),
        },
        {
          title: "Room/Area",
          dataIndex: "item_category",
          key: "id",
          render: (text, record, index) => {
            return <>{category?.filter((item)=>parseInt(item.id)===parseInt(record.item_category))[0]?.category
            }</>;
          },
          //   ...getColumnSearchProps('age'),
        },

        {
          title: "Unit",
          dataIndex: "unit",
          key: "id",
        },
        {
          title: "Costing",
          dataIndex: "costing",
          key: "id",
        },

        {
          title: ' ',
          key: 'id',
          fixed: 'right',
          width: 50,
          render: (record) =>   <BiEdit
          className="bi-edit"

          style={{ width: "100%", height: "20px" }}
          onClick={(e) => {
            e.stopPropagation();
            editfun(record);
          }}
        />,
    
    
        },
        {
          title: " ",
          key: "id",
          fixed: "right",
          width: 50,
          render: ( record) =>
         
            <Popconfirm title="Sure to delete?" onConfirm={() => deletethis(record)}>
           <BiTrash
            className="bi-edit"

                onClick={(e) => {
                  e.stopPropagation();
                }}
                style={{ width: "100%", height: "20px", color: "red" }}
              />
            </Popconfirm>
      
          // render: (record) => <a onClick={() => deletethis(record)}>Delete</a>,
        },
      ]);
    }
  }, [user_id,item_page]);
  const shows = (data) => {
    setShow(data);
  };

  const ItemForms = () => {
    return (
      <>
        <div className="model-con">
          <div className="model-box" style={{ width: "80vw" }}>
            <div>
            {id?<h2 style={{textAlign:"center",marginBottom:"20px"}}>Update Item</h2>:<h2 style={{textAlign:"center",marginBottom:"20px"}}>Create Item</h2>}

              { id ? (
              <Itemform datas={formdata} id={id}  show={shows} category={category} loading={Catloading}/>
              ) : (
                <Itemform show={shows} category={category} loading={Catloading}/>
              )}
            </div>
          </div>
        </div>
      </>
    );
  };

  return (
    <div>
      {/* <Navbar/> */}
      <Slidebar/>

      <div className="for-etable">
        {/* <h2 className="e-table-h2">Item Table </h2> */}
        <button
          style={{
            padding: "10px 40px",
            marginBottom: "50px",
            borderRadius: "7px",
            border: "none",
            backgroundColor: "#323a3d",
            color: "white",
            fontSize: "15px",
            fontWeight: "bolder",
            cursor: "pointer",
          }}
          onClick={create_item}
        >
          Create New Item
        </button>

        <Input
          autoFocus
          type="text"
          placeholder="Enter Item Name"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{ marginBottom: "20px" }}
        />
        {loading ? (
          <Skeleton />
        ) : (
          <ETable
            data={data}
            columns={columns}
            loading={fetch}
            field={"item"}
            page={item_page}
            error={error}
          />
        )}
        {show ? <ItemForms /> : null}
      </div>
    </div>
  );
}
