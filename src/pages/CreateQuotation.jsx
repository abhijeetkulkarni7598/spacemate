import React, { useState,useEffect } from 'react';
import { useParams } from "react-router-dom";
import { useGetInvoiceQuery, useGetQuotationQuery } from '../store/store';
import QuotationForm from '../components/quotationfrom/QuotationForm';
import Slidebar from '../components/sidebar/Slidebar';


const CreateInvoice = () => {
const { id } = useParams();
const {data: formdata, isLoading: loading,isSuccess:here} = useGetQuotationQuery(id);


    return (
        <>
        <Slidebar/>

            {id?<h1 className='h1-create-cus' >Update Quotation</h1>:<h1 className='h1-create-cus' >Create Quotation</h1>}


<QuotationForm id={id} data={formdata} isSuccess={here} loading={loading}/>
           
        </>
    );
}

export default CreateInvoice;
