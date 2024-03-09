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
import "./App.css";
import { useDispatch } from "react-redux";
import { checkAuth } from "./store/mutation/userSlice";
import Quotation from "./pages/Quotation";

import CreateQuotation from "./pages/CreateQuotation";
import View from "./pages/view/View";
import CreateClinet from "./pages/CreateClinet";
import Setting from "./pages/Setting";
import Item from "./pages/Item";
import CreateItem from "./pages/CreateItem";
import Location from "./pages/Location";
import Dashboard from "./pages/dashboard/Dashboard";
import Vendor from "./pages/Vendor";
import Employee from "./pages/Employee";
import Enquiry from "./pages/enquiry/Enquiry";
import EnquiryTable from "./pages/enquiry/form/EnquiryTable";
import DesignTable from "./pages/enquiry/form/DesignTable";
import MainDesignForm from "./pages/enquiry/form/design/MainDesignForm";
import ExecutionTable from "./pages/execution/ExecutionTable";
import MainExecution from "./pages/execution/MainExecution";
import CommonPage from "./pages/commonpage/CommonPage";
import ExeAuth from "./store/ExeAuth";
import OriginalClient from "./pages/originalClient/OriginalClient";
import MainEnquiryForm from "./pages/enquiry/form/enquiry/MainEnquiryForm";
import FloorPlan from "./pages/enquiry/floorplan/FloorPlan";
import { modifyUrl } from "./components/Functions/State";
import MoodPlan from "./pages/enquiry/floorplan/MoodPlan";
import FurniturePlan from "./pages/enquiry/floorplan/FurniturePlan";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(checkAuth());
  }, []);
  console.log(modifyUrl("http://127.0.0.1:8000/image/floor_plans/WhatsApp_Image_2023-10-07_at_10.16.47_AM_1_U6eqANy.jpeg"))
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/location" element={<Location />} />
          <Route path="/service" element={<Service />} />
          {/* <Route path="/service" element={<Service />} /> */}
          <Route path="/display" element={<DisplaySolutions />} />
          <Route path="/design" element={<DesignObuild />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/thankyou" element={<ThankYou />} />
          <Route path="/download" element={<Download />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/enquiry" element={<Enquiry />} />
          <Route
            path="/execution-table"
            element={
              <ExeAuth>
                <ExecutionTable />
              </ExeAuth>
            }
          />
          {/* <Route path="/execution-project" element={<MainExecution />} /> */}
          <Route path="/execution-project/:id" element={<MainExecution />} />
          <Route path="/create-enquiry" element={<MainEnquiryForm />} />
          <Route path="/create-enquiry/:id" element={<MainEnquiryForm />} />
          <Route
            path="/home"
            element={
              <Auth>
                <CommonPage />
              </Auth>
            }
          />
          <Route
            path="/enquiry-table"
            element={
              <Auth>
                <EnquiryTable />
              </Auth>
            }
          />
          <Route
            path="/floor-plan"
            element={
              <Auth>
                <FloorPlan />
              </Auth>
            }
          />
          <Route
            path="/mood-plan"
            element={
              <Auth>
                <MoodPlan />
              </Auth>
            }
          />
          <Route
            path="/furniture-plan"
            element={
              <Auth>
                <FurniturePlan />
              </Auth>
            }
          />
          <Route
            path="/floor-plan"
            element={
              <Auth>
                <FloorPlan />
              </Auth>
            }
          />
          <Route
            path="/design-table/:id"
            element={
              <Auth>
                <DesignTable />
              </Auth>
            }
          />
          <Route
            path="/design-form"
            element={
              <Auth>
                <MainDesignForm />
              </Auth>
            }
          />
          <Route
            path="/design-form/:id"
            element={
              <Auth>
                <MainDesignForm />
              </Auth>
            }
          />
          <Route path="/designobuild" element={<DesignLandingPage />} />
          <Route element={<Error />} />

          <Route path="/login" element={<Login />} />
          <Route
            path="/dashboard"
            element={
              <Auth>
                <Dashboard />
              </Auth>
            }
          />
          <Route
            path="/prospect"
            element={
              <Auth>
                <Client />
              </Auth>
            }
          />
          <Route
            path="/client"
            element={
              <Auth>
                <OriginalClient />
              </Auth>
            }
          />
          <Route
            path="/vendor"
            element={
              <Auth>
                <Vendor />
              </Auth>
            }
          />
          <Route
            path="/employee"
            element={
              <Auth>
                <Employee />
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
            path="/create/:client_id"
            element={
              <Auth>
                <CreateQuotation />
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

        {/* <PhoneCall/>
        <WhatsApp/> */}
      </BrowserRouter>
    </>
  );
};

export default App;

//create new prospect(done)
//create new quotation(done)
//title remove all titles(done)
//item details and client details space remove(done)
//quotation view button(done)
//status dropdown in quotation form(done)
//specific note (conditionally)(done)

//Made of 18mm Plywood and 1mm SF finish laminate, required other hardware.
//proper error everywhere(done)
//specification limit 500(done)
//emp-data client_name/date(done)

// 27/1/24
// equyiry show to person who careted
//reject revision

//sale and marketing
//dash borad client table prospect table quotation table enquire table no delete
