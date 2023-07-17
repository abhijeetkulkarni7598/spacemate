import { message } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

function Authforadmin({ children }) {
  const { user, userToken, loading, checkAuthLoading ,isAuthenticated} = useSelector(
    (state) => state.user
  );
  // console.log(checkAuthLoading)
  // console.log(loading)
  // console.log(userToken)
  // console.log(user)



 const is_staff=localStorage.getItem('alpha')

 



  // console.log(isAuthenticated)

 

  if (checkAuthLoading)
    return (
      <h1 style={{ margin: "2rem", textAlign: "center" }}>
        Loading1
      </h1>
    );
    if (loading) return <p>loafding</p>;

  if ( !userToken||isAuthenticated===false||!userToken) {
    return <Navigate to={"/login"} />;
  }
  if(is_staff!=='beta'){
    message.error('You Are Not Authorised')
    return <Navigate to={"/"} />;
    // return <></>;

  }
  
  return <>{children}</>;
}

export default Authforadmin;
