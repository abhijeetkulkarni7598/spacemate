import React from 'react'
import PdfViewer from '../../commonpage/PdfViewer';
import { useSelector } from 'react-redux';
import { url } from '../../../store/mutation/url';
import Slidebar from '../../../components/sidebar/Slidebar';
const MoodPlan = () => {
    const { user, userToken, loading, checkAuthLoading ,isAuthenticated} = useSelector(
        (state) => state.user
      );
  return (<>
  <Slidebar/>
    <div className='body-width-vw'  style={{margin:"auto"}}>
    <h2 className="e-table-h2">Mood Board</h2>

       <PdfViewer data={`${url}${user?.enquiry?.moon_board}`} />
    </div>
  </>
  )
}


export default MoodPlan
