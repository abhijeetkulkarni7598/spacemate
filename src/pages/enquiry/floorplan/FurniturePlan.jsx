
import React from 'react'
import PdfViewer from '../../commonpage/PdfViewer';
import { useSelector } from 'react-redux';
import { url } from '../../../store/mutation/url';
import Slidebar from '../../../components/sidebar/Slidebar';
const FurniturePlan = () => {
    const { user, userToken, loading, checkAuthLoading ,isAuthenticated} = useSelector(
        (state) => state.user
      );
  return (<>
  <Slidebar/>
    <div className='body-width-vw'  style={{margin:"auto"}}>
    <h2 className="e-table-h2">Furniture Plan</h2>

       <PdfViewer data={`${url}${user?.enquiry?.proposed_furniture_plan}`} />
    </div>
  </>
  )
}


export default FurniturePlan
