import React, { useEffect, useState } from "react";
import Slidebar from "../../components/sidebar/Slidebar";
import ForMat from "./ForMat";
import "./dashboard.css";
import {
  useFetchDealWonQuery,
  useFetchItemCategoryCountQuery,
  useFetchMonthlyRevinueQuery,
  useFetchMonthlyRevinuer01Query,
  useFetchStatusCountQuery,
  useFetchUserCountQuery,
} from "../../store/store";
import { useSelector } from "react-redux";
import ForBar from "./ForBar";
import ForColumn from "./ForColumn";
import { ArrangeIT, getTypeMonth } from "../../components/Functions/State";
import LoadingBox from "./LoadingBox";
import { Select } from "antd";
import { Option } from "antd/es/mentions";
import FormItem from "antd/es/form/FormItem";
const Dashboard = () => {
  const [year, setYear] = useState(23);
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
  const {
    data: monthlyRev,
    isLoading: monthlyRevLoading,
    isFetching: monthlyRevFetching,
  } =   useFetchMonthlyRevinueQuery({year:year});
  const {
    data: monthlyRevR01,
    isLoading: monthlyRevR01Loading,
    isFetching: monthlyRevR01Fetching,
  } =   useFetchMonthlyRevinuer01Query({year:year});
  const {
    data: dealwon,
    isLoading: dealwonLoading,
    isFetching: dealwonFetching,
  } =   useFetchDealWonQuery({year:year});
  const [newStatus, setNewStatus] = useState();
  const [statusDonut, setStatusDonut] = useState();
  const [stausXcount, setStausXcount] = useState();
  const [quotationCountPerMonth, setQuotationCountPerMonth] = useState();
  const [newMonthlyRev, setNewMonthlyRev] = useState();
  const [newMonthlyRevR01, setNewMonthlyRevR01] = useState();
  const [dealwonState, setDealwonState] = useState();
  const [newItem, setNewItem] = useState();
  const [newUser, NewUser] = useState();
  useEffect(() => {
    if (status) {
      const fornewData = status.map((item) => ({
        type: item?.status,
        sales: item?.total,
      })).filter((item)=>item.type!=="BLANK");
      const fornewDataDonut = status.map((item) => ({
        type: item?.status,
        value: item?.count,
      }));
      const forstatusXcount = status.map((item) => ({
        type: item?.status,
        sales: item?.count,
      })).filter((item)=>item.type!=="BLANK");
      setStausXcount(forstatusXcount)
      setNewStatus(fornewData);
      setStatusDonut(fornewDataDonut);
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
  useEffect(() => {
    if (monthlyRev) {
      const newData = monthlyRev.map((item) => ({
        type: item?.month,
        sales: item?.total_cost,
      }));
      const newDataForCount = monthlyRev.map((item) => ({
        type: item?.month,
        sales: item?.quotations,
      }));
      const sort =ArrangeIT(newData)
      const sort2 =ArrangeIT(newDataForCount)
      const dataWithMonths = sort.map(item => {
        return {
            ...item,
            type: getTypeMonth(parseInt(item.type))
        };
    });
    
      const dataWithMonthsForQuotation = sort2.map(item => {
        return {
            ...item,
            type: getTypeMonth(parseInt(item.type))
        };
    });
    setQuotationCountPerMonth(dataWithMonthsForQuotation)
      setNewMonthlyRev(dataWithMonths);
    }
  }, [monthlyRev]);
  useEffect(() => {
    if (monthlyRevR01) {
      const newData = monthlyRevR01.map((item) => ({
        type: item?.month,
        sales: item?.total_cost,
      }));
    
      const sort =ArrangeIT(newData)
      const dataWithMonths = sort.map(item => {
        return {
            ...item,
            type: getTypeMonth(parseInt(item.type))
        };
    });
   
    setNewMonthlyRevR01(dataWithMonths);
    }
  }, [monthlyRevR01]);
  useEffect(() => {
    if (dealwon) {
      const newData = dealwon.map((item) => ({
        type: item?.month,
        sales: item?.total_cost,
      }));
    
      const sort =ArrangeIT(newData)
      const dataWithMonths = sort.map(item => {
        return {
            ...item,
            type: getTypeMonth(parseInt(item.type))
        };
    });
   
    setDealwonState(dataWithMonths);
    }
  }, [dealwon]);
  return (
    <>
      <Slidebar />
     
      <div className="pie-char-custom">
        <div className="pie-char-inside" >
          <h2 className="h2-pie-char">Status Revinue</h2>
          {newStatus ? <ForColumn data={newStatus} /> : <LoadingBox/>}
        </div>
        <div className="pie-char-inside" >
          <h2 className="h2-pie-char">Status Per Quotation</h2>
          {newStatus ? <ForColumn data={stausXcount} /> : <LoadingBox/>}
        </div>
        {/* <div  className="pie-char-inside" >
        <h2 className="h2-pie-char">Item Categories</h2>


          {newItem ? <ForMat data={newItem} /> : <LoadingBox/>}
        </div> */}
      
        
      </div>
      <div style={{marginLeft:"30px",marginTop:"30px"}}>
<FormItem label={"Select The Year"}>

      <Select onSelect={(data)=>setYear(data)} defaultValue={23} style={{width:"300px"}}>
        <Option value={21}>
          2021
        </Option>
        <Option value={22}>
          2022
        </Option>
        <Option value={23}>
          2023
        </Option>
        <Option value={24}>
          2024
        </Option>
      </Select>
</FormItem>
      </div>
      <div className="pie-char-custom">
        <div className="pie-char-inside" >
          <h2 className="h2-pie-char">Monthly Estimate Value</h2>
          {newMonthlyRev ? <ForColumn data={newMonthlyRev} /> : <LoadingBox/>}
        </div>
        <div className="pie-char-inside" >
          <h2 className="h2-pie-char">Per Month Quotation Count</h2>
          {quotationCountPerMonth ? <ForColumn data={quotationCountPerMonth} /> : <LoadingBox/>}
        </div>
        {/* <div  className="pie-char-inside" >
        <h2 className="h2-pie-char">Item Categories</h2>


          {newItem ? <ForMat data={newItem} /> : <LoadingBox/>}
        </div> */}
      
        
      </div>
      <div className="pie-char-custom">
        {/* <div className="pie-char-inside" >
          <h2 className="h2-pie-char">Status Revinue</h2>
          {newStatus ? <ForBar data={newStatus} /> : <LoadingBox/>}
        </div> */}
        <div className="pie-char-inside" >
          <h2 className="h2-pie-char">Status Per Quotation</h2>
          {statusDonut ? <ForMat data={statusDonut} /> : <LoadingBox/>}
        </div>
        <div  className="pie-char-inside" >
        <h2 className="h2-pie-char">R01 Estimate Value</h2>


        {newMonthlyRevR01 ? <ForColumn data={newMonthlyRevR01} /> : <LoadingBox/>}

        </div>
      
        
      </div>
      <div className="pie-char-custom">
     
      </div>
      <div className="pie-char-custom">
      <div  className="pie-char-inside" >
        <h2 className="h2-pie-char">User Quotations</h2>


          {newUser ? <ForMat data={newUser} /> : <LoadingBox/>}
        </div>
        <div className="pie-char-inside" >
          <h2 className="h2-pie-char">Deal Won</h2>
          {dealwonState ? <ForColumn data={dealwonState} /> : <LoadingBox/>}
        </div>
      </div>
    </>
  );
};

export default Dashboard;
