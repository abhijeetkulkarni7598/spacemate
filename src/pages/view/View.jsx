import React, { useEffect, useRef, useState } from "react";
import "./movieDetails.css";
import { MovieDetailStyle, MovieDetailSecondPgStyle } from "./componentStyle";
import logo from "./../../assets/img/logo512.png";
import { ReactComponent as Logo1 } from "./../../assets/img/space.svg";

import { ToWords } from "to-words";

import { useReactToPrint } from "react-to-print";
import "./view.css";
import { useParams } from "react-router-dom";
import { useGetInvoiceQuery, useGetQuotationQuery } from "../../store/store";
import Footer from "../../components/footer/Footer";
import Slidebar from "../../components/sidebar/Slidebar";
import { Button } from "antd";
import { roundUpTenPercent } from "../../components/Functions/State";
import PayNow from "./PayNow";
import { useSelector } from "react-redux";
import { useQuery } from "react-query";
// import logo2 from "./../../assets/img/logo2new.png";
// import logo1 from "./../../assets/img/logo1new.png";

const View = () => {
  const componentRef = useRef();
  const toWords = new ToWords();
  const statements = [
    "We have considered Iso & Is mark MR grade alternate ply",
    "Antique Handles for furniture is excluded from our scope",
    "Prices for electric, Pop, paint is budgetory, will be charged as per area at actual design.",
    "Bed Back cushion / Upholestry Will be Charged Extra.",
    "Granite required will be charged at actual",
    "Hardwares used in furniture have 1 year warranty",
    "Channels used for drawer/ trollies have 3 years warranty",
    "Marino / Advance Lam / TechLam laminates will be used for exterior application (1800 Rs per Laminate Considered)",
    "Prices for sofa, Tv unit will be charged as per design",
    "Official Work On Sunday will remain closed.",
    "Transportation charges for furniture work are included in our scope.",
    "If veneer is used, the difference will be charged.",
    "Electric: 700 per light point, Socket Point: 750/-, Power Point (15 Amp): 1550/- Panel, Fan installation Charges extra at actual Rs.150/- each",
    "Electric: Internal Polycab Wires, PVC pipes, Legrand Miling Range Switch & Socket",
    "Paint: Luster - 28/-, Plastic paint- 22/-, Oil Paint - 20 (Rs / Sq. Feet)",
    "Polishing rate will be decided on area application.",
    "Furniture other than mentioned in the list will be charged on a per SQ FT basis",
    "Wall Panelling: 450 Rs/ Sq. Feet",
  ];
  const { id } = useParams();
  // console.log(id)
  const { user, userToken, checkAuthLoading ,isAuthenticated} = useSelector(
    (state) => state.user
  );
  const {
    data: formdata,
    isLoading: loading,
    isSuccess: here,
  } = useGetQuotationQuery(id);
  // const { formdata, isLoading } = useQuery('interiorGallery', useGetQuotationQuery, {
  //   refetchInterval: 5000, // Fetch data every 5 seconds
  //   refetchIntervalInBackground: true, // Refetch data even when the tab is in background
  // });
  const uniqueCategories = [
    ...new Set(formdata?.item.map((item) => item.item_category)),
  ];
  console.log(formdata);
  const handlePrint = useReactToPrint({
    copyStyles: true,
    content: () => componentRef.current,
    documentTitle: `${
      formdata?.client_name
    }_ESTIMATE_SPACEMATE_${new Date().toLocaleDateString("en-GB")}`,
    onAfterPrint: () => alert(`Printed`),
  });

  const [total, setTotal] = useState(0);
  const counter = (() => {
    let a = 0;
    return () => {
      a = a + 1;
      return a;
    };
  })();
  useEffect(() => {
    if (formdata) {
      const totalSum = formdata?.item.reduce((accumulator, currentItem) => {
        const totalValue = parseFloat(currentItem.total);
        return accumulator + totalValue;
      }, 0);

      if (formdata?.discount) {
        const lastSum = (totalSum * formdata?.discount) / 100;

        setTotal(totalSum - lastSum);
      } else {
        setTotal(totalSum);
      }
    }
  }, [formdata]);








  return (
    <>
      <Slidebar />
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div className="view-print">
          <button className="print-btn" onClick={handlePrint}>
            Print Out
          </button>
        </div>
        <div
          className="view-body print-body"
          ref={componentRef}
          style={{
            // height: window.innerHeight,
            margin: "auto",
            background: "white",
            height: "100%",
            fontSize: "14px",
          }}

          // style={{ width: "100%", height: "1690px", fontSize: "14px" }}
        >
          <div style={{ padding: "0rem" }}>
            <div className="view-main">
              <div className="one">
                <table className="one-left-table">
                  <tr>
                    <td
                      style={{
                        background: "#6bc9d6",
                        color: "black",
                        borderTop: "2px solid black",
                        borderLeft: "2px solid black",
                      }}
                      colSpan={2}
                    >
                      <b>ESTIMATE FOR INTERIOR WORK</b>
                    </td>
                    <td
                      style={{ border: "2px solid black" }}
                      colSpan={2}
                      rowSpan={4}
                    >
                      <Logo1 style={{ maxWidth: "400px" }} />
                    </td>
                  </tr>

                  <tr>
                    <td
                      style={{ border: "2px solid black", textAlign: "left" }}
                      colSpan={2}
                    >
                      <b>CLIENTS NAME :</b>
                      {formdata?.client_name}
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={2} style={{ textAlign: "left" }}>
                      <b>CLIENT ADDRESS :</b>
                      {formdata?.client_address}
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={2} style={{ textAlign: "left" }}>
                      <b>Date :</b> {formdata?.date}
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={2} style={{ textAlign: "left" }}>
                      <b>Contact :</b>
                      {formdata?.client_contact}
                    </td>
                    <td colSpan={2} style={{ textAlign: "left" }}>
                      SPACEMATE INTERIOR SOLUTIONS, PUNE - 9975149820
                    </td>
                  </tr>

                  <tr style={{ background: "#6bc9d6", color: "black" }}>
                    <th style={{ width: "10%", textAlign: "center" }}>SR NO</th>
                    <th style={{ width: "40%", textAlign: "center" }}>
                      PARTICULAR
                    </th>
                    <th style={{ width: "30%", textAlign: "center" }}>
                      SIZE ( L x H ){" "}
                    </th>
                    <th style={{ width: "30%", textAlign: "center" }}>PRICE</th>
                  </tr>
                  <tr>
                    <td style={{ background: "#eafcfc" }} colSpan={4}>
                      FURNITURE
                    </td>
                  </tr>

                  {uniqueCategories.map((item) => (
                    <>
                      <tr>
                        <td
                          colSpan={4}
                          style={{ background: "#6bc9d6", color: "black" }}
                        >
                          {item}
                        </td>
                      </tr>
                      {formdata?.item
                        .filter((it) => it.item_category === item)
                        .map((op, index) => (
                          <tr>
                            <td>{counter()}</td>
                            <td>
                              {op.item_name} x ({op.quantity})
                              {/* <span style={{color:"red"}}> */}
                              &nbsp;&nbsp;
                              {op.specifications ? op.specifications : null}
                              {/* </span> */}
                            </td>
                            {/* <td>
                              {/* {op.length ? <>{op.length}'L x</> : null}
                              {op.height ? <>{op.height}' H x</> : null}
                              {op.depth ? <>{op.depth}' D x</> : null}
                              {op.width ? <>{op.width}' W</> : null} 
                              
                            </td> */}
                            <td>
                              {op.length ? (
                                <>
                                  {parseFloat(op.length).toString()}'L
                                  {op.height ||
                                  op.depth ||
                                  op.width ||
                                  op.numbers ||
                                  op.sqft ||
                                  op.running_foot
                                    ? " x "
                                    : ""}
                                </>
                              ) : null}
                              {op.height ? (
                                <>
                                  {parseFloat(op.height).toString()}'H
                                  {op.depth ||
                                  op.width ||
                                  op.numbers ||
                                  op.sqft ||
                                  op.running_foot
                                    ? " x "
                                    : ""}
                                </>
                              ) : null}

                              {op.depth ? (
                                <>
                                  {parseFloat(op.depth).toString()}'D
                                  {op.width ||
                                  op.numbers ||
                                  op.sqft ||
                                  op.running_foot
                                    ? " x "
                                    : ""}
                                </>
                              ) : null}
                              {op.width ? (
                                <>
                                  {parseFloat(op.width).toString()}'W
                                  {op.numbers || op.sqft || op.running_foot
                                    ? " x "
                                    : ""}
                                </>
                              ) : null}
                              {op.numbers ? (
                                <>
                                  {parseFloat(op.numbers).toString()}'No's
                                  {op.sqft || op.running_foot ? " x " : ""}
                                </>
                              ) : null}
                              {op.sqft ? (
                                <>
                                  {parseFloat(op.sqft).toString()}'sqft
                                  {op.running_foot ? " x " : ""}
                                </>
                              ) : null}
                              {op.running_foot ? (
                                <>
                                  {parseFloat(op.running_foot).toString()}'feet
                                </>
                              ) : null}
                            </td>
                            <td>{op.total}</td>
                          </tr>
                        ))}
                    </>
                  ))}
                  {formdata?.discount ? (
                    <tr>
                      <td style={{ border: "1px solid lightgrey" }}></td>
                      <td style={{ border: "1px solid lightgrey" }}></td>
                      <td>
                        <b>Discount</b>
                      </td>
                      <td>{formdata?.discount}% </td>
                    </tr>
                  ) : null}
                  <tr>
                    <td style={{ border: "1px solid lightgrey" }}></td>
                    <td style={{ border: "1px solid lightgrey" }}></td>
                    <td>
                      <b>TOTAL GST EXTRA</b>
                    </td>

                    <td>{total}</td>
                  </tr>
                  {formdata?.special_note ? (
                    <tr>
                      <td style={{ background: "#f4cccc" }} colSpan={4}>
                        {formdata?.special_note}
                      </td>
                    </tr>
                  ) : null}
                  <tr>
                    <td style={{ border: "1px solid lightgrey" }} colSpan={4}>
                      <b>TERMS AND CONDITIONS</b>
                    </td>
                  </tr>
                  {statements?.map((item, index) => (
                    <tr>
                      <td
                        style={{
                          border: "1px solid lightgrey",
                          textAlign: "center",
                        }}
                      >
                        {index + 1}
                      </td>
                      <td
                        style={{
                          border: "1px solid lightgrey",
                          textAlign: "left",
                        }}
                        colSpan={3}
                      >
                        {item}
                      </td>
                    </tr>
                  ))}
                  <tr>
                    <td
                      style={{
                        border: "1px solid lightgrey",
                        textAlign: "left",
                        color: "white",
                      }}
                    >
                      w
                    </td>
                    <td
                      style={{
                        border: "1px solid lightgrey",
                        textAlign: "left",
                      }}
                    ></td>
                    <td
                      style={{
                        border: "1px solid lightgrey",
                        textAlign: "left",
                      }}
                    ></td>
                    <td
                      style={{
                        border: "1px solid lightgrey",
                        textAlign: "left",
                      }}
                    ></td>
                  </tr>
                  <tr>
                    <td
                      style={{
                        border: "1px solid lightgrey",
                        textAlign: "left",
                      }}
                    ></td>
                    <td
                      style={{
                        border: "1px solid lightgrey",
                        textAlign: "left",
                      }}
                    >
                      <b>
                        Project Completion Period :- 2.0 months from the date of
                        advance for on-site work commencement recieved.
                      </b>
                    </td>
                    <td
                      style={{
                        border: "1px solid lightgrey",
                        textAlign: "left",
                      }}
                    ></td>
                    <td
                      style={{
                        border: "1px solid lightgrey",
                        textAlign: "left",
                      }}
                    ></td>
                  </tr>
                  <tr>
                    <td
                      style={{
                        border: "1px solid lightgrey",
                        textAlign: "left",
                        color: "white",
                      }}
                    >
                      w
                    </td>
                    <td
                      style={{
                        border: "1px solid lightgrey",
                        textAlign: "left",
                      }}
                    ></td>
                    <td
                      style={{
                        border: "1px solid lightgrey",
                        textAlign: "left",
                      }}
                    ></td>
                    <td
                      style={{
                        border: "1px solid lightgrey",
                        textAlign: "left",
                      }}
                    ></td>
                  </tr>
                  <tr>
                    <td
                      style={{
                        border: "1px solid lightgrey",
                        textAlign: "left",
                      }}
                    ></td>
                    <td
                      colSpan={3}
                      style={{
                        border: "1px solid lightgrey",
                        textAlign: "left",
                      }}
                    >
                      <b>SPACEMATE INTERIOR SOLUTIONS, PUNE - 9975149820</b>
                    </td>
                  </tr>
                  <tr>
                    <td
                      style={{
                        border: "1px solid lightgrey",
                        textAlign: "left",
                        color: "white",
                      }}
                    >
                      w
                    </td>
                    <td
                      style={{
                        border: "1px solid lightgrey",
                        textAlign: "left",
                      }}
                    ></td>
                    <td
                      style={{
                        border: "1px solid lightgrey",
                        textAlign: "left",
                      }}
                    ></td>
                    <td
                      style={{
                        border: "1px solid lightgrey",
                        textAlign: "left",
                      }}
                    ></td>
                  </tr>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      {user?.is_customer===true&&isAuthenticated?

<PayNow total={total}/>
:null}
      <Footer />
    </>
  );
};

export default View;
