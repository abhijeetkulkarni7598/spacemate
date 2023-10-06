import React from "react";
import styled from "styled-components";
import aboutimg from '../../assets/bedroom2-design.png';

const AboutDesignobuld = () => {
  return (
    <>
      <Style>
        <main>
          <div className="about-design-section">
            <img
              src={aboutimg}
              alt=""
            />
          </div>
          <div className="col">
            <label className="otl-label">Designs that change your space</label>
            <h2>Design O Build</h2>
            <p>
              DesignOBuild is your creative Interior design partner. We provide
              innovative trendy yet elegant design service to the client. We
              believe design can change the perspective of end user about look
              and aesthetic. We help our clients to visualize the job in very
              realistic manner.
            </p>
          </div>
        </main>
      </Style>
    </> //
  );
};

export default AboutDesignobuld;

const Style = styled.div`
  background: #000;
  /* height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem; */
  main {
    max-width: 1920px;
    height: 650px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    /* flex-wrap: wrap; */
    /* flex-direction: row; */
    justify-content: center;
    align-items: flex-start;
    /* background-size: contain; */
  }
  .about-design-section {
    img {
      padding: 1rem 0;
    }
  }
  main .col {
    /* width: 50%; */
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    justify-content: flex-start;
    align-items: flex-start;
    padding: 2rem;
    margin: 4rem 1rem;
    h2 {
      color: #fff;
      font-size: 2.6em;
    }
    p {
      color: #fff;
      font-size: 1.4rem;
    }
  }

  .otl-label {
    border: 1px solid #fff;
    padding: 0.25rem 0.75rem;
    border-radius: 2rem;
    font-size: 12px;
    color: #fff;
    width: fit-content;
  }
  small {
    color: #999;
  }
  @media screen and (max-width: 500px) {
    main {
      margin: 0 auto;
      display: grid;
      grid-template-columns: 1fr;
      justify-content: center;
      align-items: flex-start;
      height: auto;
    }
    main .col {
      /* width: 50%; */
      display: block;
      flex-direction: column;
      gap: 0.5rem;
      padding: 2rem;
      margin: 2rem 1rem;
      h2 {
        color: #fff;
        padding: 0.5rem 0;
        margin-top: 1rem;
      }
      p {
        color: #fff;
        font-size: 1.4rem;
      }
    }
  }
`;
