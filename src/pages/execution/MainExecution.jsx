import React from 'react'
import CreateExecution from './CreateExecution'
import { useFetchExecutionModelQuery } from '../../store/store';
import Slidebar from '../../components/sidebar/Slidebar';
import { ClipLoader } from 'react-spinners';
import { useParams } from 'react-router-dom';

const MainExecution = () => {
  const {id}=useParams()
    const {
        data: data,
        isLoading: loading,
        isFetching: fetch,
        error: error,
      } = useFetchExecutionModelQuery(id);
      console.log(data)
   
  return (
    <div>
        <Slidebar/>
        {!data?
<ClipLoader color="#36d7b7" />:

      <CreateExecution data={data}/>
        }
    </div>
  )
}

export default MainExecution
