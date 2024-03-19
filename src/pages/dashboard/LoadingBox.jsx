import React from 'react'
import { RiLoader2Fill } from 'react-icons/ri'
import ClipLoader from "react-spinners/ClipLoader";
const LoadingBox = () => {
  return (
    <div style={{height:"300px",display:"flex",justifyContent:"center",alignItems:"center"}}>
      <ClipLoader
        // color={color}
        // loading={loading}
        // cssOverride={override}
        // size={150}
        // aria-label="Loading Spinner"
        // data-testid="loader"
      />
    </div>
  )
}

export default LoadingBox
