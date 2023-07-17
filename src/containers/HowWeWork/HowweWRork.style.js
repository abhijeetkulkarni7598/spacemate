import styled from "styled-components";

export const UspSectionStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  .col-md-8 {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
  .row-flex {
    display: flex;
    margin-right: -15px;
    margin-left: -15px;
    align-items: center;
    justify-content: center;
  }
  .y-us-section {
    padding: 82px 0 82px;
  }
  .y-us-head {
    text-align: center;
    margin: 0 0 91px;
  }
  .y-us-title h2 {
    color: #000;
    font-size: 30px;
    letter-spacing: 0;
    line-height: 32px;
    text-transform: uppercase;
    margin-bottom: 6px;
  }
  .y-us-title p {
    color: #777777;
    font-size: 1.4em;
    font-weight: 300;
    line-height: 24px;
    padding-bottom: 0.2rem;
  }

  h4 {
    font-size: 18px;
  }
  .clearfix {
    display: flex;
    align-items: flex-start;
  }
  .clearfix:before {
    display: table;
    content: " ";
  }
  .clearfix:after {
    clear: both;
    display: table;
    content: " ";
  }

  .y-us-title > p {
    color: #777777;
    line-height: 22px;
  }
  .icon {
    color: var(--primary-color);
    padding: 1rem;
    font-size: 5rem;
    border: 1px solid var(--primary-color);
    border-radius: 100px;
    color: var(--primary-color);
    line-height: 70px;
    text-align: center;
  }
  .y-us-title-border {
    background: var(--primary-color) none repeat scroll 0 0;
    border-radius: 2px;
    display: inline-block;
    height: 3px;
    position: relative;
    width: 50px;
  }
  .service-3 {
    margin-bottom: 18px;
  }
  .service-box {
    margin-bottom: 18px;
  }
  .service-3 .service-box .iconset {
    float: left;
    text-align: center;
    width: 25%;
  }
  .service-3 .service-box .iconset i {
    color: #000;
    font-size: 44px;
  }

  service-3 .service-box .y-us-content h4 {
    color: #3a3a3a;
    font-size: 18px;
    letter-spacing: 0;
    line-height: 22px;
    margin: 14px 0 12px;
    text-transform: uppercase;
  }
  .service-3 .service-box .y-us-content p {
    color: #777777;
    font-size: 13px;
    font-weight: 300;
    line-height: 24px;
    padding-bottom: 1rem;
  }

  @media (min-width: 992px) {
    .col-md-4 {
      width: 33.33333333%;
      float: left;
    }
  }

  @media (min-width: 1200px) {
    .container {
      width: 1170px;
      display: flex;
      align-content: center;
      align-items: center;
      justify-items: center;
      justify-content: center;
      flex-wrap: wrap;
    }
  }
    @media (max-width: 768px) {
    .col-sm-6 {
      width: 50%;
    }
    .row-flex {
  display: flex;
  flex-direction: column;
  margin-right: 10px;
  margin-left: 10px;
  align-items: center;
  justify-content: center;
}
    .service-3 {
      display: flex;
      flex-direction: column;
    }
  }
  .iconset{
    padding-right: .5rem;
  }
`;
