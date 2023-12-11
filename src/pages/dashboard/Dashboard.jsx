import React, { useEffect, useState } from "react";
import Slidebar from "../../components/sidebar/Slidebar";
import ForMat from "./ForMat";
import "./dashboard.css";
import {
  useFetchItemCategoryCountQuery,
  useFetchStatusCountQuery,
  useFetchUserCountQuery,
} from "../../store/store";
import { useSelector } from "react-redux";
const Dashboard = () => {
  const data = [
    {
      type: "Presales123",
      value: 3,
    },
    {
      type: "Presales1232",
      value: 3,
    },
    {
      type: "Presales12323",
      value: 3,
    },
    {
      type: "Presal23es123",
      value: 3,
    },
    {
      type: "Presa23les123",
      value: 3,
    },
  ];
  const { user } = useSelector((state) => state.user);
  const [user_id, setUser_id] = useState("");

  useEffect(() => {
    if (user?.is_staff === true) {
    } else {
      setUser_id(user?.id);
    }
  }, [user]);

  const {
    data: status,
    isLoading: statusLoading,
    isFetching: statusFetching,
  } = useFetchStatusCountQuery({ id: user_id });
  const {
    data: userCount,
    isLoading: userCountLoading,
    isFetching: userCountFetching,
  } = useFetchUserCountQuery({ id: user_id });
  const {
    data: item,
    isLoading: itemLoading,
    isFetching: itemFetching,
  } = useFetchItemCategoryCountQuery();
  const [newStatus, setNewStatus] = useState();
  const [newItem, setNewItem] = useState();
  const [newUser, NewUser] = useState();
  useEffect(() => {
    if (status) {
      const newData = status.map((item) => ({
        type: item?.status,
        value: item?.count,
      }));
      setNewStatus(newData);
    }
  }, [status]);
  useEffect(() => {
    if (userCount) {
      const newData = userCount.map((item) => ({
        type: item?.user_client,
        value: item?.count,
      }));
      NewUser(newData);
    }
  }, [userCount]);
  useEffect(() => {
    if (item) {
      const newData = item.map((item) => ({
        type: item?.item_category,
        value: item?.count,
      }));
      setNewItem(newData);
    }
  }, [item]);
  return (
    <>
      <Slidebar />
      <div className="pie-char-custom">
        <div className="pie-char-inside" >
          <h2 className="h2-pie-char">Status</h2>
          {newStatus ? <ForMat data={newStatus} /> : null}
        </div>
        <div  className="pie-char-inside" >
        <h2 className="h2-pie-char">Item Categories</h2>


          {newItem ? <ForMat data={newItem} /> : null}
        </div>
      
        
      </div>
      <div className="pie-char-custom">
      <div  className="pie-char-inside" >
        <h2 className="h2-pie-char">User Quotations</h2>


          {newUser ? <ForMat data={newUser} /> : null}
        </div>
      </div>
    </>
  );
};

export default Dashboard;
