import React from 'react'
import EnquiryForm from '../../EnquiryForm'
import Slidebar from '../../../../components/sidebar/Slidebar'
import { useSelector } from 'react-redux';

const CreateEnquiryForm = ({enquiry,page}) => {
  const { user} = useSelector(
    (state) => state.user
  );
  return (
    <div>
      <EnquiryForm enquiry={enquiry?enquiry:null} page={page} user={user} />
    </div>
  )
}

export default CreateEnquiryForm
