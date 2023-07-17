import styled from "styled-components";

export const Contactstyle = styled.div`
.contactus-section {
    margin: 10rem 0;
}

.ui {
  font-size: 2rem;
  color: red;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 5rem;
}

.contact-leftside {
  p{
    font-size: 1.6rem;
    margin-bottom: 0 !important;
  }
  .address-container{
    display: flex;
    align-items: center;
    justify-content: flex-start;
    .address-icon, .email-icon{
      font-size: 1.8rem;
      margin: 1rem;
      color: var(--primary-color);
    }
  }
  img {
    min-width: 80%;
    max-height: 30rem;
    height: auto;
}
}
.contact-input-field {
    margin-bottom: 4rem;
}

.form-control {
    height: 50px;
}
.ct-sect-add{
  margin: 2rem 0;
}
.main-heading {
  color: var(--primary-color);
  span{
    color: var(--main-text-color);
    font-size: 2.5rem;
  }
}

.contact-rightside form .form-control {
    border: 1px solid #ced4da;
    -webkit-appearance: none;
    height: 5rem;
    border-radius: 0.5rem;
    font-size: 1.6rem;
    padding-left: 1rem;
    font-weight: lighter;
  }
  
  .contact-rightside form .form-check-input {
    width: 2rem;
    height: 2rem;
  }
  
  .form-checkbox-style {
    margin: 4rem 0;
  }
  
  .contact-rightside form .main-hero-para {
    font-size: 1.5rem;
    color: var(--text-color);
    margin: 0;
    font-weight: lighter;
    width: 75%;
    padding: 0 2rem;
  }
.contact-rightside .success {
  color: green;
  font-size: 1.6rem;
  margin: 1rem 0;
}
.contact {}

.contact-input-field p {
  color: red;
  font-size: 1.4rem;
}
.input-group-button__serv{
  background-color:var( --primary-color);
  padding: 1rem 0;
  color: var(--bgcolor);
  font-size: 1.5rem;
}

@media screen and (max-width: 550px) {
  .contactus-section {
    margin: 5rem 2rem 5rem 2rem;
  }

  .contact-rightside {
    padding-top: 3rem;
  }

  .main-hero-para-form {
    font-size: 1.4rem;
    margin-left: 2rem;
    margin-top: -15px;
    text-align: justify;
  }
  .contactus-section .contact-us-section-al {
    display: block;
  }
}

@media screen and (max-width: 820px) {
  .contact-us-section-al {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 2rem;
  }

 
  .contact-input-field {
    margin-bottom: 2rem;
  }

  .contact-rightside {
    margin-top: 5rem;
  }
}
`;