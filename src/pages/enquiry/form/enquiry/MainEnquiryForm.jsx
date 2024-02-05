import React from 'react'
import CreateEnquiryForm from './CreateEnquiryForm'
import { useParams } from 'react-router-dom'
import { useGetEnquiryQuery } from '../../../../store/store';
import LoadingBox from '../../../dashboard/LoadingBox';

const MainEnquiryForm = () => {

  const {id}=useParams()
  const {
    data: enquiry,
    isLoading: enquiry_loading,
    isFetching: enquiry_fetch,
    error: enquiry_error,
  } = useGetEnquiryQuery(id);
  return (


    <div>
      {enquiry_fetch?
<LoadingBox/>
:
<CreateEnquiryForm enquiry={enquiry}/>
}
    </div>
  )
}

export default MainEnquiryForm
