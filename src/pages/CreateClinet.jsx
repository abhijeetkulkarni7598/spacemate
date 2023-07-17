import React from 'react';
import Clientform from '../components/quotationfrom/Clientform';
import { useNavigate, useParams } from 'react-router-dom';
import { useGetClientQuery } from '../store/store';
import Slidebar from '../components/sidebar/Slidebar';

const CreateClinet = () => {
const { id } = useParams();

  const {data: formdata, isLoading: loading,isSuccess:here} = useGetClientQuery(id);

    return (
        <>
        <Slidebar/>

              {id?<h1 className='h1-create-cus' >Update Client</h1>:<h1 className='h1-create-cus' >Create Client</h1>}
              {loading&&id?<p>loading</p>:
            <Clientform datas={formdata} id={id}/>
              }
        </>
    );
}

export default CreateClinet;
