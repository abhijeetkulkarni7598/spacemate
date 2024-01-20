import React from "react";
import CreateDesignForm from "./CreateDesignForm";
import { useParams } from "react-router-dom";
import { getQueryParamsObject } from "../../../../components/Functions/State";
import Slidebar from "../../../../components/sidebar/Slidebar";
import { useGetDesignsQuery } from "../../../../store/store";
import { BiLoader } from "react-icons/bi";

const MainDesignForm = () => {
  const { id } = useParams();
  console.log(getQueryParamsObject(id));
  const query = getQueryParamsObject(id);
  const {
    data: data,
    isLoading: loading,
    isFetching: fetch,
    error: error,
  } = useGetDesignsQuery({ id: query?.design });
  return (
    <>
      <Slidebar />
      {fetch ? (
        <BiLoader />
      ) : (
        <>
          {query?.design ? (
            <CreateDesignForm query={query} datas={data} />
          ) : (
            <CreateDesignForm query={query} />
          )}
        </>
      )}
    </>
  );
};

export default MainDesignForm;
