import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import {
  SlidebarData,
  SlidebarDataAdmin,
  SlidebarDataExecutionarHead,
  SlidebarDataExecutionarHead2,
  SlidebarDataSalesAndMarketing,
  SlidebarDataSuper,
  SliderForDesignHead,
} from "./SlidebarData";
import Slidemenu from "./Slidemenu";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../store/mutation/userSlice";
import logo from "./../../assets/img/logo512.png";
import { useFetchExecutionModelQuery } from "./../../store/store";
import * as RiIcons from "react-icons/ri";
import * as MdIcons from "react-icons/md";
import PayOnline from "../button/PayOnline";

// import  FaIcons from "react-icons/fa";
// import  AiIcons from "react-icons/ai";
const Nav = styled.div`
  position: relative;
  background-color: var(--pr-color);
  height: 50px;
  display: flex;
  padding: 0px 20px;
  justify-content: space-between;
  align-items: center;
  .logo-span {
    // position: absolute;
    // right: 10%;
  }
  .main-nav-bar {
    display: flex;
    align-items: space-between;
  }
  a {
    color: black !important;
    font-size: 1.4rem;
  }
`;
const NavIcon = styled(Link)`
  margin-left: 2rem;
  margin-top: 0.5rem;
  font-size: 1.6rem;
  color: #fff;
  /* margin-top: 3rem; */
`;
const SlidebarNav = styled.nav`
  box-shadow: 0px 0px 7px #323a3d;

  background-color: var(--pr-text-color);
  width: 250px;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: ${({ sidebar }) => (sidebar ? "0" : "-100%")};
  transition: 350ms;
  z-index: 10;
`;
const SlidebarWrap = styled.nav`
  width: 100%;
`;
const IconStyle = styled.nav`
  margin-left: 8%;
  margin-top: -6%;
`;
const Divstyle = styled.ul`
  margin-bottom: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 1.6rem;
  gap: 1rem;
  // position: absolute;
  // right: 10px;
  li {
    list-style: none;
    // padding: 0 0.5rem;
  }
  li:hover {
    cursor: pointer;
    color: green;
  }
`;
function Slidebar() {
  const navigate = useNavigate();
  const { loading, error, user, userToken, isAuthenticated } = useSelector(
    (state) => state?.user
  );
  const SliderForCustomer = [
    {
      title: "PreSales",
      icon: <MdIcons.MdOutlineInventory2 />,
      iconclosed: <RiIcons.RiArrowDownFill />,
      iconopened: <RiIcons.RiArrowUpFill />,
      subnav: [
        {
          title: "Profile",
          path: `/home`,
          icon: <FaIcons.FaClipboardList />,
        },
        {
          title: "Requirement",
          path: `/create-enquiry/${user?.enquiry?.id}`,
          icon: <FaIcons.FaClipboardList />,
        },
        // {
        //   title: "Floor Plan",
        //   path: "/floor-plan",
        //   icon: <FaIcons.FaClipboardList />,
        // },
        // {
        //   title: "Unit Size",
        //   path: "/enquiry-table",
        //   icon: <FaIcons.FaClipboardList />,
        // },
        {
          title: "Estimate/Quotation",
          path: `/view/${user?.enquiry?.latest_quotation_id}`,
          icon: <FaIcons.FaClipboardList />,
        },
        // {
        //   title: "Furniture Plan",
        //   path: "/furniture-plan",
        //   icon: <FaIcons.FaClipboardList />,
        // },
        // {
        //   title: "Mood Board",
        //   path: "/mood-plan",
        //   icon: <FaIcons.FaClipboardList />,
        // },
      ],
    },
  ];
  const [sidebar, setSidebar] = useState(false);
  const [token, settoken] = useState(localStorage.getItem("usertoken"));
  const [user1, setuser] = useState();
  let authLinks;
  const dispatch = useDispatch();

  useEffect(() => {
    setuser(JSON.parse(localStorage.getItem("user")));
    // console.log(JSON.parse(localStorage.getItem("user")))
    settoken(localStorage.getItem("userToken"));
  }, [localStorage.getItem("usertoken"), localStorage.getItem("usera")]);

  const {
    data: project_data,
    isLoading: project_loading,
    isFetching: fetch,
    error: project_error,
  } = useFetchExecutionModelQuery(user?.id);
  const logout1 = () => {
    dispatch(logout());
    navigate("/login");
  };

  if (userToken) {
    authLinks = (
      <Divstyle>
   
        <li
          className="li-sidebar"
          style={{
            textAlign: "right",
            color: "#fff",

            fontSize: "1.3rem",
          }}
        >
          Logged In as: <b>{user?.username}</b>
        </li>
        <li
          className="li-sidebar"
          style={{ fontSize: "1.3rem" }}
          onClick={() => logout1()}
        >
          Logout
        </li>
        <li
          className="li-sidebar"
          style={{
            textAlign: "right",
            color: "#fff",

            fontSize: "1.3rem",
          }}
        >
                  <PayOnline title="Pay Now" />

        </li>
        <li className="li-sidebar">
          <Link
            to="/setting"
            style={{ fontSize: "20px", display: "flex", alignItems: "center" }}
          >
            <AiIcons.AiFillSetting color="white" />
          </Link>
        </li>

      </Divstyle>
    );
  } else {
    authLinks = (
      <div
        className="login-btn"
        style={{
          textAlign: "right",
          color: "#fff",
          padding: " 0 2rem ",
          fontSize: "1.6rem",
        }}
      >
        <Link to="/login">Login</Link>
      </div>
    );
  }

  //
  useEffect(() => {
    function handleOutsideClick(event) {
      if (
        event.target.closest("#slidebar") ||
        event.target.closest("#navbar")
      ) {
        return;
      } else {
        setSidebar(false);
      }
    }

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);
  const showSidebar = () => setSidebar(!sidebar);
  const Autoclose = () => setSidebar(false);
  return (
    <>
      <Style>
        <Nav id="navbar" className="main-nav-bar">
          <NavIcon style={{ fontSize: "20px" }}>
            <FaIcons.FaBars onClick={showSidebar} color="white" />
          </NavIcon>
          <span className="logo-span"></span>
          {authLinks}
        </Nav>

        <SlidebarNav id="slidebar" sidebar={sidebar}>
          <SlidebarWrap>
            <NavIcon>
              <IconStyle style={{ fontSize: "20px" }}>
                <AiIcons.AiOutlineClose onClick={showSidebar} color="black" />
              </IconStyle>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginBottom: "50px",
                }}
              >
                <img style={{ width: "200px" }} src={logo} alt="" />
              </div>
            </NavIcon>
            {user?.is_superuser === true ? (
              <>
                {SlidebarDataSuper.map((item, index) => {
                  return (
                    <Slidemenu item={item} key={index} onClick={Autoclose} />
                  );
                })}
              </>
            ) : null}
            {user?.is_admin === true ? (
              <>
                {SlidebarDataAdmin.map((item, index) => {
                  return (
                    <Slidemenu item={item} key={index} onClick={Autoclose} />
                  );
                })}
              </>
            ) : null}
            {user?.is_sales_and_marketing === true ? (
              <>
                {SlidebarDataSalesAndMarketing.map((item, index) => {
                  return (
                    <Slidemenu item={item} key={index} onClick={Autoclose} />
                  );
                })}
              </>
            ) : null}
            {user?.is_execution_head === true ? (
              <>
                {SlidebarDataExecutionarHead.map((item, index) => {
                  return (
                    <Slidemenu item={item} key={index} onClick={Autoclose} />
                  );
                })}
              </>
            ) : null}
            {user?.is_customer === true ? (
              <>
                {project_data && project_data.length > 0 ? (
                  <>
                    {SliderForCustomer.map((item, index) => {
                      return (
                        <Slidemenu
                          item={item}
                          key={index}
                          onClick={Autoclose}
                        />
                      );
                    })}
                  </>
                ) : (
                  <>
                    {SliderForCustomer.map((item, index) => {
                      return (
                        <Slidemenu
                          item={item}
                          key={index}
                          onClick={Autoclose}
                        />
                      );
                    })}
                  </>
                )}
              </>
            ) : null}
            {user?.is_design_head === true || user?.is_design_staff === true ? (
              <>
                {SliderForDesignHead.map((item, index) => {
                  return (
                    <Slidemenu item={item} key={index} onClick={Autoclose} />
                  );
                })}
              </>
            ) : null}
          </SlidebarWrap>
        </SlidebarNav>
      </Style>
    </> //
  );
}

export default Slidebar;

const Style = styled.div``;
