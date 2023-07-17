import React, { useEffect } from "react";
import Home from "./Home";
import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import About from "./pages/About";
import Service from "./pages/Service";
import Contact from "./pages/Contact";
import Error from "./pages/Error";
import Gallery from "./pages/Gallery";
import Download from "./pages/Download";
import ThankYou from "./pages/ThankYou";
import DisplaySolutions from "./pages/DisplaySolutions";
import Blog from "./pages/Blog";
import WhatsApp from "./components/common/WhatsApp";
import PhoneCall from "./components/common/PhoneCall";
import DesignObuild from "./pages/DesignObuild";
import Privacy from "./pages/Privacy";
import DesignLandingPage from "./pages/DesignLandingPage";
import Slidebar from "./components/sidebar/Slidebar";
import Login from "./pages/Login";
import Auth from "./store/Auth";
import Client from "./pages/Client";
import './App.css'
import { useDispatch } from "react-redux";
import { checkAuth } from "./store/mutation/userSlice";
import Quotation from "./pages/Quotation";

import CreateQuotation from "./pages/CreateQuotation";
import View from "./pages/view/View";
import CreateClinet from "./pages/CreateClinet";
import Setting from "./pages/Setting";
import Item from "./pages/Item";
import CreateItem from "./pages/CreateItem";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(checkAuth());
  }, []);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Service />} />
          <Route path="/service" element={<Service />} />
          <Route path="/display" element={<DisplaySolutions />} />
          <Route path="/design" element={<DesignObuild />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/thankyou" element={<ThankYou />} />
          <Route path="/download" element={<Download />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/designobuild" element={<DesignLandingPage />} />
          <Route element={<Error />} />


        <Route path="/login" element={<Login />} />
        <Route
          path="/client"
          element={
            <Auth>
              <Client />
             </Auth>
          }
        />











<Route
          path="/quotation"
          element={
            <Auth>
              <Quotation />
            </Auth>
          }
        />
      
        <Route
          exact
          path="/quotation/:id"
          element={
            <Auth>
              <CreateQuotation />
            </Auth>
          }
        />
       
        <Route
          exact
          path="/create_client/:id"
          element={
            <Auth>
              <CreateClinet />
            </Auth>
          }
        />
        <Route
          exact
          path="/create_client"
          element={
            <Auth>
              <CreateClinet />
            </Auth>
          }
        />
        <Route
          exact
          path="/create"
          element={
            <Auth>
              <CreateQuotation />
            </Auth>
          }
        />
      
        <Route
          exact
          path="/setting"
          element={
            <Auth>
              <Setting />
            </Auth>
          }
        />
        <Route
          exact
          path="/item"
          element={
            <Auth>
              <Item />
            </Auth>
          }
        />
        <Route
          exact
          path="/item-create"
          element={
            <Auth>
              <CreateItem />
            </Auth>
          }
        />
        <Route
          exact
          path="/item-create/:id"
          element={
            <Auth>
              <CreateItem />
            </Auth>
          }
        />
        <Route exact path="/view/:id" element={<View />} />









        </Routes>













       
        <PhoneCall/>
        <WhatsApp/>
      </BrowserRouter>
    </>
  );
};

export default App;
