import React from 'react'
import { RiLoader2Fill } from 'react-icons/ri'

const LoadingBox = () => {
  return (
    <div style={{height:"300px",width:"300px",display:"flex",justifyContent:"center",alignItems:"center"}}>
      <RiLoader2Fill/>
    </div>
  )
}

export default LoadingBox
