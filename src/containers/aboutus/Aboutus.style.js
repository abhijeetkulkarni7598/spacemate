import styled from "styled-components";

export const AboutusStyle = styled.div`
  .about-us {
    padding: 0rem 5rem;
    width: 100vw;
    overflow-y: hidden;
    overflow-x: hidden;
  }

  .mini-title {
    font-size: 1.5rem;
    color: #818181;
    line-height: 28px;
  }
  .main-heading {
    font-weight: 700;
    padding-bottom: 5px;
    color: #2f2f2f;
    letter-spacing: 0.3px;
    font-size: 2.8rem;
    font-weight: 500;
  }
  .main-heading span {
    font-weight: 700;
    padding-bottom: 5px;
    color: #2f2f2f;
    letter-spacing: 0.3px;
    font-size: 2.8rem;
    font-weight: 500;
  }
  /* .about-container::-webkit-scrollbar {
    display: none;
    -ms-overflow-style: none;
    scrollbar-width: none;
} */

  .main-heading {
    position: relative;
    padding: 0;
    color: var(--primary-color);
    line-height: 1;
    letter-spacing: 0.3px;
    font-size: 2.8rem;
    font-weight: 500;
    text-transform: none;
    margin-bottom: 30px;
  }

  .main-heading::before {
    position: absolute;
    content: "";
    width: 60px;
    height: 3px;
    background: var(--primary-color);
    left: 0px;
    bottom: -10px;
    margin: 0 auto;
  }

  .about-us-info {
    margin-top: 4rem;
    padding-right: 5rem;
  }
  /* .about-us-row {
   display: flex;
   flex-direction: row;
   flex-wrap: wrap;
   align-items: center;
   justify-content: center;
   

} */
  .about-us-info p {
    font-size: 1.6rem;
    color: #818181;
    line-height: 28px;
    text-align: justify;
  }

  .about-us .about-us-number {
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    background: transparent;
    border: 0.1rem solid var(--primary-color);
    font-size: 1.4rem;
    color: var(--primary-color);
    display: grid;
    place-items: center;
  }

  .about-us-number i {
    font-size: 3rem;
    color: var(--primary-color);
  }

  .about-us-data {
    padding-left: 2rem;
  }

  .about-us .about-us-data p {
    margin: 1rem;
  }

  @media screen and (max-width: 900px) {
    .about-us-list {
      padding-top: 4rem;
    }
  }
  @media screen and (max-width: 550px) {
    .mx-5{
      margin: 0.5em!important;
    }
   
    .px-5 {
      padding: 0.5em !important;
    }

    .about-us-list {
      padding: 1rem;
      margin-top: 2rem;
    }

    .mini-title {
      text-align: center;
    }

    .main-heading {
      position: relative;
      text-align: center;
    }

    .main-heading::before {
      position: absolute;
      left: 135px;
      bottom: -10px;
      margin: 0 auto;
      text-align: center;
    }
    .about-us-info {
      margin-top: 4rem;
      padding-right: 0;
    }
    .about-us-data {
      padding: 1rem 0rem;
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .about-us__data-in {
      padding: 0rem 0rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-top: 1rem;
    }

    .about-us__data {
      display: grid;
      grid-template-columns: repeat(1 1fr);
      grid-column-gap: 1rem;
    }

    .brochure-aboutpage-button {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`;
