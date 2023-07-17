import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const DownloadConContent = () => {
  const navigate = useNavigate();

  const initialValues = { name: "", phone: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    const numregex = /^\d{10}$/;
    if (!values.name) {
      errors.name = "First Name is required";
    }
    if (!values.phone) {
      errors.phone = "Phone Number is required";
    } else if (values.phone.length < 10) {
      errors.phone = "Phone number must be 10 digit";
    } else if (values.phone.length > 10) {
      errors.phone = "Phone number can not exceed more than 10 digit";
    } else if (!numregex.test(values.phone)) {
      errors.phone = "Only numbers are allowed";
    }
    if (Object.keys(errors).length === 0) {
      setFormValues(initialValues);
      const link = document.createElement("a");
      link.href = `${process.env.PUBLIC_URL}/images/spacemateInteriorSolutions.pdf`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      // page should redirect to new thank u page
      navigate("/thankyou");
    }
    return errors;
  };

  return (
    <>
    <Style>
      <section className="contactus-section">
        <div className="container">
          {Object.keys(formErrors).length === 0 && isSubmit && (
            <div className='"ui message success'>
              Form submitted successfully
            </div>
          )}
          <div className="row d-flex">
            <div className="col-12 col-lg-10 mx-auto my-5 py-5">
              <div className="row contact-us-section-al mx-5">
              <h2>Enter The Details</h2>
                <div className="contact-rightside col-12 col-lg-12 mx-5">
                  <form onSubmit={handleSubmit} method="POST">
                    <div className="row">
                      <div className="col-12  col-lg-6 contact-input-field">
                        <input
                          type="text"
                          name="name"
                          id=""
                          className="form-control"
                          placeholder="Name"
                          value={formValues.name}
                          onChange={handleChange}
                        />
                        <p>{formErrors.name}</p>
                      </div>

                      <div className="col-12  col-lg-6 contact-input-field">
                        <input
                          type="tel"
                          name="phone"
                          id=""
                          className="form-control"
                          placeholder="Phone Number"
                          value={formValues.phone}
                          onChange={handleChange}
                        />
                        <p>{formErrors.phone}</p>
                      </div>
                    </div>
                    <button
                      type="submit"
                      className="input-group-button__serv w-100 py-2">
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      </Style>
    </>
  );

  //    {/*
  // const [userData, setUserData] = useState({
  //         name: "",
  //         phone: ""
  //     });

  //     let name, value;
  //     const postUserData = (event) => {
  //         name = event.target.name;
  //         value = event.target.value;

  //         setUserData({ ...userData, [name]: value });
  //     };
  //     //connect with firebase
  //     const submitData = async (event) => {
  //         event.preventDefault();
  //         const { name, phone } = userData;

  //         if(name && phone) {

  //             const res = fetch(
  //                 "firebaseurl",
  //             {
  //                 method: "POST",
  //                 headers: {
  //                     "Content-Type": "application/json",
  //                 },
  //                 body: JSON.stringify({
  //                     name,
  //                     phone
  //                 }),
  //             }
  //             );
  //             if (res) {
  //                 setUserData({
  //                     name: "",
  //                     phone: "",
  //                 })
  //                 const link = document.createElement('a');
  //                 link.href = `${process.env.PUBLIC_URL}/images/spacemateInteriorSolutions.pdf`;
  //                 document.body.appendChild(link);
  //                 link.click();
  //                 document.body.removeChild(link);
  //                 // page should redirect to new thank u page
  //                 navigate("/thankyou")
  //             } else {
  //             alert("Please fill the data")
  //             }
  //         } else {
  //             alert("Please fill the data")
  //             }
  //     };
  //     return (
  //         <>
  //         <section className="contactus-section">
  //         <div className="container">
  //             <div className="row m-5">
  //                 <div className="col-12 col-lg-10 mx-auto">
  //                     <div className="row contact-us-section-al">

  //                         <div className="contact-rightside col-12 col-lg-12">
  //                             <form method="POST">
  //                                     <div className="row">
  //                                         <div className="col-12  col-lg-6 contact-input-field">
  //                                             <input type="text" name="name" id="" className="form-control" placeholder="Name"
  //                                             value={userData.name}
  //                                             onChange={postUserData} />
  //                                         </div>

  //                                         <div className="col-12  col-lg-6 contact-input-field">
  //                                             <input type="text" name="phone" id="" className="form-control" placeholder="Phone Number"
  //                                             value={userData.phone}
  //                                             onChange={postUserData} />
  //                                         </div>
  //                                         </div>

  //                                     <button type="submit" className="input-group-button__serv w-100" onClick={submitData}>Download</button>

  //                             </form>
  //                         </div>
  //                     </div>
  //                 </div>
  //             </div>
  //         </div>
  //     </section>
  //         </>
  //     ) */}
};

export default DownloadConContent;


const Style = styled.div`
.contactus-section{
    height: 70vh;
}
h2{
    text-align: center;
    padding-bottom:3rem;
}
.input-group-button__serv {
    font-size:1.4rem;
}
.contact-input-field input{
    padding: .5rem 0;
    font-size:1.4rem;
}
`