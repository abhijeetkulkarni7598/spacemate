import React from "react";
import CreateEnquiryForm from "./CreateEnquiryForm";
import { useParams } from "react-router-dom";
import { useGetEnquiryQuery } from "../../../../store/store";
import LoadingBox from "../../../dashboard/LoadingBox";
import Slidebar from "../../../../components/sidebar/Slidebar";

const MainEnquiryForm = ({page}) => {
  const { id } = useParams();
  const {
    data: enquiry,
    isLoading: enquiry_loading,
    isFetching: enquiry_fetch,
    error: enquiry_error,
  } = useGetEnquiryQuery(id);
  return (
    <>

      <Slidebar/>

      {enquiry_fetch ? <LoadingBox /> : <CreateEnquiryForm enquiry={enquiry} page={page}/>}
    </>
  );
};

export default MainEnquiryForm;
