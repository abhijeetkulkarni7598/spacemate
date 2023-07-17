import React from 'react'
import { useGetItemsQuery } from '../store/store';
import Itemform from '../components/quotationfrom/Itemform';
import { useParams } from 'react-router-dom';
import Slidebar from '../components/sidebar/Slidebar';

export default function CreateItem() {
    const { id } = useParams();

  const {data: formdata, isLoading: loading,isSuccess:here} = useGetItemsQuery(id);
    return (<>
    <Slidebar/>
        <div>
        {id?<h1 className='h1-create-cus'>Update Item</h1>:<h1 className='h1-create-cus'>Create Item</h1>}
        {loading&&id?<p>loading</p>:
      <Itemform datas={formdata} id={id}/>
    }
  </div>
    </>
    );
}
