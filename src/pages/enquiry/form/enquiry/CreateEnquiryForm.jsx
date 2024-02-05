import React from 'react'
import EnquiryForm from '../../EnquiryForm'
import Slidebar from '../../../../components/sidebar/Slidebar'
import { useSelector } from 'react-redux';

const CreateEnquiryForm = ({enquiry}) => {
  const { user} = useSelector(
    (state) => state.user
  );
  return (
    <div>
      <Slidebar/>
      <EnquiryForm enquiry={enquiry?enquiry:null} user={user} />
    </div>
  )
}

export default CreateEnquiryForm
