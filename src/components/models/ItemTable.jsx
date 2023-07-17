import React, { useEffect, useState } from "react";
import './model.css'
import { Form, Input, Table, message } from "antd";
import { useFetchItemsQuery } from "../../store/store";
// import cross from "./../../assets/img/cross.jpg"
import { ReactComponent as Cross } from "./../../assets/img/close.svg";

export default function ItemTable({data1,total_bam}) {
    const [show, setShow] = useState(false);
const [page, setPage] = useState(1);
const [search, setSearch] = useState("");
    const { data: data, isLoading: loading,isFetching:fetch ,error:error} = useFetchItemsQuery({
        val:page,search:search
      });

      const [dataArray, setDataArray] = useState([]);
      const [disabledRecords, setDisabledRecords] = useState([]);
      const unisRecordDisabled = (record) => {
        return !isRecordDisabled(record);
      };
    //   const remove = (record) => {
    //     setDataArray((prevData) => prevData.filter((item) => item.id !== record.id));
    //     setDisabledRecords([...disabledRecords, data.id]);
    //   };
    //   const add = (data) => {
    //     message.success(`Add sucess full ${data.item_name}`)
    //     setDataArray([...dataArray, data]);
    //     setDisabledRecords([...disabledRecords, data.id]);
    //   };
      const remove = (record) => {
        if (isRecordDisabled(record)) {
          setDisabledRecords((item) =>
            item.filter((id) => id !== record.id)
          );
          message.error(`Removed ${record.item_name}`)
          setDataArray((prevData) => prevData.filter((item) => item.id !== record.id));
        } else {
          setDisabledRecords([...disabledRecords, record.id]);
        }
      };
      
      const add = (data) => {
        if (isRecordDisabled(data)) {
          setDisabledRecords((item) =>
            item.filter((id) => id !== data.id)
          );
        } else {
          message.success(`Add successful ${data.item_name}`);
          setDataArray([...dataArray, data]);
          setDisabledRecords([...disabledRecords, data.id]);
        }
      };
      const isRecordDisabled = (record) => {
        return disabledRecords.includes(record.id);
      };
      
const sendData=()=>{
    data1(dataArray)
setShow(false)
}
useEffect(() => {
  if(total_bam){
    
    setDataArray(total_bam)
    const disabledIds = total_bam.map((item) => item.id);
    setDisabledRecords(disabledIds);
  }
}, [total_bam]);




useEffect(() => {
 console.log("hello",dataArray)
}, [dataArray]);
    const columns = [
        {
            title: 'Sr.no',
            dataIndex: 'id',
            key: 'id',
          //   ...getColumnSearchProps('name'),
          },
        {
          title: 'Item Name',
          dataIndex: 'item_name',
          key: 'id',
        //   ...getColumnSearchProps('name'),
        },
        {
          title: 'Item Category',
          dataIndex: 'item_category',
          key: 'id',
        //   ...getColumnSearchProps('age'),
        },
     
        {
          title: 'Unit',
          dataIndex: 'unit',
          key: 'id',
     
        },
        {
          title: 'Costing',
          dataIndex: 'costing',
          key: 'id',
     
        },
       
        {
          title: 'Action',
          key: 'id',
          fixed:'right',
          width: 100,
          render: (record) => (
            <>
              {!isRecordDisabled(record) ? (
                <a onClick={() => add(record)} disabled={isRecordDisabled(record)}>
                  ADD
                </a>
              ):<a onClick={() => remove(record)} disabled={unisRecordDisabled(record)} >
              REMOVE
            </a>}
            </>
          ),
          

        },
      ];
      
  
  const MyModel = () => {
    return (<>
   
     <Form.Item >
    
            </Form.Item>
<div>

       <Table
         columns={columns}
         loading={loading}
         dataSource={data.results}
         scroll={{
           y: 240,
          x:800,
        }}
         pagination={{
           total:data.count,
           pageSize:10,
           current:page,
           onChange:(page)=>{
               
               setPage(page)
            }
        }}
       
       ></Table>
</div>
        <div >

        <span className="model-btn" onClick={sendData}>accpet it</span>
        </div>
    </>
    );
  };

  const MyIn=()=>{
    return(

<>
<div className="model-con">
        <div className="model-box">
    <Cross  className="model-cross" onClick={()=>setShow(false)}/>

        <Input    autoFocus
        type="text" placeholder="Hello" value={search} onChange={(e)=>setSearch(e.target.value)}    />
        <MyModel/>
        </div>
        </div>
        </>
        )
  }

  return (
    <div>

      <span className="model-btn" onClick={()=>setShow(true)}>Add Items +</span>
      {show?
<> 
<MyIn/>
</>
:null
      }
    </div>
  );
}
