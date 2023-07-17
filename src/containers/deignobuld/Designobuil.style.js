import styled from "styled-components";

export const ServicesSectionStyle = styled.div`
  .container {
    padding: 2rem 0;
  }
  .row-flex {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
  }
  .title {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 2rem 0;
    .service-title-main {
      text-transform: uppercase;
      font-size: 3rem;
    }
  }
  .service-item {
    margin: 0.2em 0.8em;
  }
  .content-103 {
    background: #f3f3f3;
    padding-bottom: 50px;
  }

  .content-103 .sercies-title {
    text-align: center;
    padding: 50px 0;
  }
  .title-border {
    background: var(--primary-color) none repeat scroll 0 0;
    border-radius: 2px;
    display: inline-block;
    height: 3px;
    /* position: relative; */
    width: 50px;
  }

  .service-post {
    background: #fff;
    padding: 30px;
    text-align: center;
    cursor: pointer;
    /* position: relative; */
    z-index: 12;
    height: 300px;
    margin-bottom: 30px;
    box-shadow: 0 5px 4px -4px rgba(0, 0, 0, 0.08);
  }
  .content-103 .service-content {
    /* position: relative; */
    z-index: 13;
  }
  .content-103 .service-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px 0 20px 0;
    width: 50px;
    height: 50px;
    border-radius: 25px;
    text-align: center;
    border: 2px solid var(--primary-color);
    margin-left: auto;
    margin-right: auto;
    line-height: 50px;
    transition: color, 250ms;
  }
  .service-icon-content {
    font-size: 2rem;
    color: var(--primary-color);
  }
  .service-icon-content:hover {
    font-size: 2rem;
    /* color: #fff; */
  }
  .content-103 .service-post:hover .service-icon {
    border-color: #fff;
  }
  .content-103 .service-post:hover .service-icon-content {
    border-color: #fff;
  }
  .content-103 .service-icon i {
    font-size: 18px;
    color: var(--primary-color);
  }
  .content-103 .service-post:hover .service-icon i {
    color: #fff;
  }
  .content-103 .service-title {
    font-size: 2em;
    font-weight: normal;
    margin-bottom: 2em;
    -moz-transition: color, 250ms;
    -o-transition: color, 250ms;
    -webkit-transition: color, 250ms;
    transition: color, 250ms;
  }
  .content-103 .service-post:hover .service-title {
    color: var(--primary-color);
  }
  .content-103 .service-description {
    font-size: 1.3em;
    width: 400px;
    transition: color, 250ms;
    padding: 0 3rem;
  }
  .content-103 .service-post:hover .service-description {
    /* color: #fff; */
  }

  .content-103 .service-hover {
    /* position: absolute; */
    top: 0;
    left: 0;
    z-index: 11;
    width: 100%;
    height: 0px;
    background: var(--primary-color);
    -moz-transition: width, 250ms;
    -o-transition: width, 250ms;
    -webkit-transition: width, 250ms;
    transition: width, 250ms;
  }
  /*hover-background-color effect*/
  .content-103 .service-post:hover .service-hover {
    height: 100%;
  }
  @media screen and (max-width: 500px) {
    .title {
      text-align: center;
      h2 {
        font-weight: 400;
      }
    }
  }
`;

export const GalleryDesignobuilStyle = styled.div`
  padding: 4rem 0;
  /* background-color: #4f5b66; */
  .title-card {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 2rem 0;
  }
  .image-title {
    font-size: 2em;
    font-weight: normal;
    margin-bottom: 0.2em;
    transition: color, 250ms;
    font-size: 3rem;
    text-transform: uppercase;
    font-weight: 500;
  }
  .imag-width-mobile {
    border-radius: 30px;
  }
  .image-gallery-slides {
    line-height: 0;
    overflow: hidden;
    position: relative;
    white-space: nowrap;
    text-align: center;
    border-radius: 20px;
  }
  .image-sub-title {
    font-size: 1.2rem;
    text-align: center;
    font-weight: normal;
    margin-bottom: 0.2em;
    transition: color, 250ms;
    font-size: 3rem;
    text-transform: capitalize;
    font-weight: 400;
  }
  .image-title-border {
    background: var(--primary-color) none repeat scroll 0 0;
    border-radius: 2px;
    display: inline-block;
    height: 3px;
    width: 50px;
  }

  input {
    border: 0;
  }

  .submitButton {
    border: 0;
    margin-bottom: 17px;
  }
  .container-gallery {
    display: flex !important;
    flex-wrap: wrap !important;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    align-content: center;
    margin: 3rem 10rem;
    padding: 3rem 8rem;
    border-radius: 30px;
  }

  .singleImage {
    padding: 0 20px 20px;
    height: 140px !important;
    border-radius: 34;
    z-index: 90;
  }

  .singleImage:hover {
    padding: 5px;
    /* opacity: .5; */
    transition: 0.9s;
    transform: scale(
      1.24
    ); /* (150% zoom - Note: if the zoom is too large, it will go outside of the viewport) */
  }

  .popupParent {
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    background-color: rgba(0, 0, 0, 0.5);
  }

  .popupImage {
    position: absolute;
    left: 25%;
    right: 25%;
    top: 15%;
    bottom: 25%;
    margin: auto;
  }
  .popup-close-icon {
    font-size: 2rem;
  }
  .imageClosingButton {
    position: relative;
  }
  @media screen and (max-width: 500px) {
    .galler-design-contaier {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 80%;
      margin: 0 4rem;
    }
    .imag-width-mobile {
      width: 75%;
    }
    .imag-width-mobile-second {
      width: 70%;
    }
    .imag-width-mobile-thumbnail {
      width: 75%;
    }
    .image-gallery-content {
      position: relative;
      line-height: 0;
      top: 0;
      position: relative;
      display: flex !important;
      flex-direction: column;
      align-items: center !important;
      justify-content: center !important;
    }
    .image-gallery-thumbnails-wrapper.thumbnails-swipe-horizontal {
      touch-action: pan-y;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
    }
    .image-gallery-slide-wrapper {
      margin: 0 auto;
      border-radius: 30px;
      /* padding: 0 6rem; */
      /* width: 370px !important; */
    }
    /* .container-gallery {
      width: 350px !important;
      margin: 0 4rem;
    } */
    .image-gallery-content .image-gallery-slide .image-gallery-image {
      max-height: calc(100vh - 80px) !important;
      border-radius: 10px !important;
      width: 340px !important;
    }
  }
`;

export const PricinfDesignobuildStyle = styled.div`
  .title-card {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 2rem 0;
  }
  .image-title {
    font-size: 2em;
    font-weight: normal;
    margin-bottom: 0.2em;
    transition: color, 250ms;
    font-size: 3rem;
    text-transform: uppercase;
    font-weight: 500;
  }
  .image-sub-title {
    font-size: 1.2rem;
    text-align: center;
    font-weight: normal;
    margin-bottom: 0.2em;
    transition: color, 250ms;
    font-size: 3rem;
    text-transform: capitalize;
    font-weight: 400;
  }
  .image-title-border {
    background: var(--primary-color) none repeat scroll 0 0;
    border-radius: 2px;
    display: inline-block;
    height: 2px;
    width: 50px;
  }

  .pricing-section {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    margin: 5rem 1rem 2rem 1rem;
    /* margin-top: 5rem;
margin-right: 1rem;
margin-bottom: 5rem;
margin-left: 1rem; */
  }
  .pricing-card {
    position: relative;
    padding: 1rem 2rem;
    border: 1px solid black;
    align-items: center;
    border: 2px solid var(--primary-color);
    display: -ms-flexbox;
    display: flex;
    -ms-flex-direction: column;
    flex-direction: column;
    height: 600px;
    max-width: 283px;
    padding: 40px 24px;
    /* position: relative; */
    width: 95vw;
  }
  .book-now-section {
    position: absolute;
    display: grid;
    place-items: center;
    margin: 2rem;
    padding: 2rem;
    bottom: 1px;
  }
  .pricing-head {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    h3 {
      font-size: 2rem;
      font-weight: 300;
      text-align: center;
    }
  }
  .price-block {
    h2 {
      font-size: 2.8rem;
      font-weight: 400;
      text-align: center;
      color: var(--primary-color);
      span {
        color: black;
      }
    }
  }
  .price-content-text {
    border-top: 1px solid var(--primary-color);
    font-size: 14px;
    line-height: 18px;
    margin-top: 24px;
    list-style: none;
    padding-left: 0 !important;
    margin: 0 auto;
    li {
      display: flex;
      align-items: flex-start;
      justify-content: flex-start;
      margin: 15px 0;
    }
    .check-icon {
      color: var(--primary-color);
      font-size: 2rem;
    }
    span {
      font-size: 1.4rem;
      color: #545454;
      margin-left: 1rem;
    }
  }
  @media (max-width: 520px) {
    .pricing-card {
      height: auto;
    }
    .book-now-section {
      margin: 0;
      padding: 0;
      bottom: 1px;
    }
  }
`;
