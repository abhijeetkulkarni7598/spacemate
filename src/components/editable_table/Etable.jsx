import { Button, Input, Pagination, Space, Table, message } from "antd";
import { useEffect } from "react";
import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { client_page, item_page, quotation_page } from "../../store/mutation/userSlice";

const ETable = (props) => {
  const data = props.data?.results;
  const columns = props.columns;

  const [count, setCount] = useState(props?.data?.count);
useEffect(() => {
setCount(props?.data?.count)
}, [props?.data?.count]);

  const [currentPage, setCurrentPage] = useState(props.page);
  const dispatch = useDispatch();

  useEffect(() => {
 if(props.error?.status===404){
  setCurrentPage(currentPage-1)
  setCount(count-1)

  if(props?.field=="quotation"){
    dispatch(quotation_page(currentPage-1));

  }else if(props?.field==="item"){
    dispatch(item_page(currentPage-1));

  }else{

    dispatch(client_page(currentPage-1));
  }
  message.error("Page does not exist")

 }
  }, [props.error]);
  return (
    <>
 
      <Table
      style={{cursor:"pointer"}}
      className="custom-table-ant"
      columns={columns}
      loading={props.loading}
      dataSource={data}
      scroll={{
        x: 1500,
        // y:500
      }}
      pagination={{
        total:count,
        pageSize:10,
        current:currentPage,
        onChange:(page)=>{
          if(props?.field==="quotation"){
            dispatch(quotation_page(page));

          }else if(props?.field==="item"){
            dispatch(item_page(page));

          }
          
          else{

            dispatch(client_page(page));
          }

          setCurrentPage(page)
        }
      }}
      onRow={(record, rowIndex) => {
        return {
          onClick: (event) => {
            // navigate(`/detail/${record.id}`);
            props.navi(record)
          },
        };
      }}
      ></Table>
    
   
    </>
  );
};
export default ETable;
