import React, { useState, useEffect } from "react";
import { interiordesign } from "../imports";
import { HiOfficeBuilding } from "react-icons/hi";
import { MdEmail } from "react-icons/md";
import {BsFillTelephoneFill} from 'react-icons/bs'
import { Contactstyle } from "./Contact.style.js";

const Contact = () => {
  const initialValues = {
    name: "",
    phone: "",
    email: "",
    address: "",
    message: "",
  };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [isTermsCheck, setIsTermsCheck] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isTermsCheck) return;
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
    if (!values.email) {
      errors.email = "Email is required";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid Email format";
    }
    if (!values.address) {
      errors.address = "Address is required";
    }
    if (!values.name) {
      errors.name = "First Name is required";
    }
    if (Object.keys(errors).length === 0) setFormValues(initialValues);

    return errors;
  };

  return (
    <>
      <Contactstyle>
        <section className="contactus-section">
          <div className="container">
            <div className="row">
              <div className="col-12 col-lg-10 mx-auto">
                <div className="row contact-us-section-al">
                  <div className="contact-leftside col-12 col-lg-5">
                    <h1 className="main-heading">
                      <span>Connect with</span> Us
                    </h1>

                    <div className="ct-sect-add">
                      <div className="address-container">
                        <HiOfficeBuilding className="address-icon" style={{flex:"1"}}/>
                        <p style={{flex:"10"}}>
                        Office No 01, GROUND FLOOR, VARSHA COMPLEX, NANDED PHATA, SINHGAD ROAD, PUNE 41104
                        </p>
                      </div>
                      <div className="address-container">
                        <MdEmail className="email-icon" style={{flex:"1"}} />
                        <p style={{flex:"10"}}>info@spacemate.in</p>
                      </div>
                      <div className="address-container">
                        <BsFillTelephoneFill className="email-icon" style={{flex:"1"}}/>
                        <p style={{flex:"10"}}>9975149820</p>
                      </div>
                    </div>
                  </div>
                  <div className="contact-rightside col-12 col-lg-7">
                    {Object.keys(formErrors).length === 0 && isSubmit && (
                      <div className='"ui message success'>
                        Form submitted successfully
                      </div>
                    )}

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

                        <div className="col-12  col-lg-6 contact-input-field">
                          <input
                            type="text"
                            name="email"
                            id=""
                            className="form-control"
                            placeholder="Your Email"
                            value={formValues.email}
                            onChange={handleChange}
                          />
                          <p>{formErrors.email}</p>
                        </div>
                        <div className="col-12 col-lg-6 contact-input-field">
                          <input
                            type="text"
                            name="address"
                            id=""
                            className="form-control"
                            placeholder="Add Address"
                            value={formValues.address}
                            onChange={handleChange}
                          />
                          <p>{formErrors.address}</p>
                        </div>
                      </div>
                      <div className="row">
                        
                      </div>
                      <div className="row">
                        <div className="col-12 contact-input-field">
                          <textarea
                            type="text-area"
                            name="message"
                            id=""
                            className="form-control"
                            placeholder="Enter your message"
                            value={formValues.message}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                      <div className="form-check pb-5">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value={isTermsCheck}
                          onChange={() => setIsTermsCheck(!isTermsCheck)}
                          id="flexCheckChecked"
                        />
                        <label className="form-check-label  main-hero-para-form m-2">
                          I agree that the Spacemate may contact me at the email
                          address or phone number above
                        </label>
                      </div>
                      <button
                        type="submit"
                        className="input-group-button__serv w-100">
                        Submit
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Contactstyle>
    </>
  );
};

export default Contact;
