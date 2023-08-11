import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

function Auth({ children }) {
  const { user, userToken, loading, checkAuthLoading ,isAuthenticated} = useSelector(
    (state) => state.user
  );
  // console.log(checkAuthLoading)
  // console.log(loading)
  // console.log(userToken)
  // console.log(user)




 



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
  
  
  return <>{children}</>;
}

export default Auth;
