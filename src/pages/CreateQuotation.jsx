import React, { useState,useEffect } from 'react';
import { useParams } from "react-router-dom";
import { useGetInvoiceQuery, useGetQuotationQuery } from '../store/store';
import QuotationForm from '../components/quotationfrom/QuotationForm';
import Slidebar from '../components/sidebar/Slidebar';
import { getRevisionNo } from '../components/Functions/State';


const CreateInvoice = () => {
const { id } = useParams();
const { client_id } = useParams();
const {data: formdata, isLoading: loading,isSuccess:here} = useGetQuotationQuery(id);

    return (
        <>
        <Slidebar/>

            {id?<h1 style={{textAlign:"center",marginTop:"50px"}} className='h1-create-cus' >Update Quotation</h1>:<h1 style={{textAlign:"center",marginTop:"50px"}} className='h1-create-cus' >Create Quotation</h1>}
{formdata?.revision_no||id?
<div style={{display:'flex',justifyContent:"center",alignItems:"center",flexDirection:"column"}}>

<h3>{formdata?.quotation_number}</h3>
<h2>{getRevisionNo(formdata?.revision_no)}</h2>
</div>
:null
}
<QuotationForm client_id={client_id} id={id} data={formdata} isSuccess={here} loading={loading}/>
           
        </>
    );
}

export default CreateInvoice;
