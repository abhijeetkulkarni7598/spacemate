import React from "react";
import Slidebar from "../../components/sidebar/Slidebar";
import { useSelector } from "react-redux";
import CustomerPage from "./CustomerPage";

const CommonPage = () => {
  const {
    user,
    userToken,
    loading,
    checkAuthLoading,
    isAuthenticated,
  } = useSelector((state) => state.user);
  return (
    <>
      <Slidebar />
      <h1 style={{ textAlign: "center" }}>Welcome to Space Mate</h1>
      {user?.is_customer ? <CustomerPage user={user}/> : null}
    </>
  );
};

export default CommonPage;
