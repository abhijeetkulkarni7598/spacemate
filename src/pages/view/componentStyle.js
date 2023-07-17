import styled from "styled-components";

export const MovieDetailStyle = styled.div`
  text-transform: uppercase;
  margin-top: 2rem;
  section {
    border: 1px solid black;
    /* background-color: rgba(255, 255, 255, 0.355); */
    width: 1170px;
    margin: 0 auto;
    font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
    font-size: 22px;
    /* margin: 2rem auto; */
    padding: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .styleinfo-box {
    height: 260px;
  }

  h1 {
    padding-left: 55px;
    font-family: Poppins;
  }
  .main-content-conatiner .created{
    position: absolute;
    right: 180px;
    top: 110px;
    span{
      font-weight: 500;
    }
  }
  .style_info {
    font-weight: 600;
    padding-left: 35px;
    /* width: 100%; */
  }
  
  .firstcontent {
    display: flex;
    align-items:center;
    justify-content: center;
    padding: 10px 0px;
  }
  .fixedheading {
    /* width: 150px; */
    font-weight: 600;
    padding-right: 5px;
  }
  .eyelet-heading {
    margin-bottom: 80px;
    font-weight: 800;
  }
  .eyelet-data {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    padding-left: 5px;
  }
  .eyelet-data ul li {
    list-style: none;
  }
  .content {
    /* border: 1px solid black; */
    width: 300px;
    border-bottom: 1px solid black !important;
  }
  .firstcontentfirst {
    display: flex;
    align-items: baseline;
    justify-content: center;
    padding: 0 50px;
  }
  .swateband {
    margin-left: 60px;
  }
  .backcloser {
    margin-left: 50px;
  }
  .fixedheading {
    margin: 0px;
  }
  .fixedheading span {
    border-bottom: 1px solid black;
    width: 100%;
    font-weight: 300;
    margin-left: 10px;
  }
  .secondcontent {
    display: flex;
    padding: 20px 60px;
    .special-instruction {
      font-size: 24px;
    }
    .special-instruction-p {
      font-size: 24px;
      /* background: var(--color-primary); */
      color: red;
      padding-left: 10px;\
    }
  }
  .thirdsection {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 10px;
    align-items:flex-start;
    justify-content: center;
    width: 93%;
  }
  .thirdsection ul li {
    list-style: none;
    padding: 2px 0;
    display: flex;
    span{
      margin-left:5px;
    }
  }
  .thirdsection ul .elylet_data {
    display: flex;
    ul li{
      border-bottom: 1px solid black;
    }
  }
  .thirdsection ul li span {
    border-bottom: 1px solid black;
  }
  .main-content-conatiner{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
  }
  .main_content {
    list-style: none;
    display: grid;
    grid-gap: 20px;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    justify-content: center;
    width: 100%;
    /* justify-content: space-around;*/
    padding:0 50px; 
  }
  .first_section {
    /* padding-left:7rem; */
    padding-top: 1rem;
    width: 500px;
  }
  .first_section ul{ 
    width: auto;
    li {
    list-style: none;
    display: flex;
    padding: 5px;
    display: flex;
    span {
      border-bottom: 1px solid black;
      border-width: thin;
      padding-left: 5px;
      display: inline-block;
      flex-grow: 4;
    }
  }
}
  .fixedheading span {
    display: inline-block;
    width: 270px;
    border-bottom: 1px solid black;
  }
  .secondcontent .party {
    font-weight: 600;
  }
  .partycontent {
    margin-left: 20px;
    border-bottom: 4px solid black;
    width: 700px;
    position: relative;
  }
  .special-instruction-p {
    margin-left: 20px;
    top: 5px;
    position: relative;
    background: none;
    border-bottom: 4px solid black;
    width: 700px;
    margin: 20px 0;
  }
  .special-instruction {
    padding: 20px 0;
  }

  .styleinfo {
    /* display: flex; */
    padding: 10px 40px;
    display: grid;
    grid-template-columns: 2fr 1fr 1fr;
    .styleinfoone {
      padding: 0;
    }
    .styleinfoone.one {
    width: 100%;
  }
  }
  .styleinfoone {
    /* border: 1px solid black; */
    padding: 10px;
    /* border-bottom: 1px solid black; */
  }
  .second_content {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px 0;
  }
  .styleinfoone.one {
    width: 500px;
  }
  .firstcontentfirst_one {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 30px;
  }

  .style {
    border: 1px solid black;
  }
  .styleinfoone p {
    padding-left: 10px;
    font-weight: 500;
  }
  .styleinfoone h3 {
    padding-left: 10px;
    font-weight: 600;
  }
  .emb {
    /* display: flex; */
    display: grid;
    grid-template-columns: 1fr 1fr;
    /* justify-content: space-around; */
    grid-gap: 10px;
    align-items: center;
    justify-content:center;
    width: 95%;
    margin: 0 auto;
  }
  .emb .emblabe span {
    border-bottom: 1px solid black;
    display: inline-block;
    margin-left: 5px;
  }
  .emb .emblabe {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
  }
  .embcon {
    border-bottom: 1px solid black;
    width: 100px;
    text-align: center;
  }
`;

export const MovieDetailSecondPgStyle = styled.div`
  text-transform: uppercase;
  /* padding-top: 15rem; */
  width: 1170px;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  font-size: 18px;
  margin: auto;
  @page {
    size: A4;
  }
  @media print {
    width: 900px;
    height: 1200px;
  }
  .ctnter {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    left: 10px;
    right: 10px;
    margin: 5rem 0;
  }
  .whole {
    /* background-color: beige; */
  }
  .first {
    border: 1px solid black;
    /* display: flex; */
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    justify-content: space-around;
  }
  .single {
    display: flex;
    padding: 10px 20px;
    align-items: center;
    justify-content: flex-start;
  }

  .fixed {
    /* padding: 20px 20px; */
    font-weight: 600;
    background-color: black;
    padding: 5px;
    color: white;
    /* width: 100px;
    height: 20px; */
    text-align: center;
    /* margin-right: 10px; */
  }
  .content {
    padding: 0 5px;
    border-bottom: 1px solid black;
    /* width: 30px; */
    text-align: center;
  }
  .second {
    border: 1px solid black;
    /* width: 100%; */
    /* margin: 30px 0; */
    /* justify-content: space-around; */
  }
  .secondmain {
    /* margin: 50px 0; */
  }
  .img {
    display: flex;
    justify-content: space-around;
    /* width: 1200px; */
    /* width: 100%; */
    margin: 0 auto;
    object-fit: cover;
  }
  .image {
    /* border: 1px solid black; */
    /* width: 100%; */
    object-fit: cover;
  }
  .image img {
    /* width: 300px; */
    /* margin: 30px 0; */
    /* width: 100%; */
    width: 1170px;
    object-fit: cover;
  }
  .third {
    border: 1px solid black;
    /* margin: 30px 0; */
    object-fit: cover;
    p {
      font-size: 1.2rem;
      font-weight: 500;
    }
  }
  .thirdmain {
    /* margin: 20px 0; */
    object-fit: cover;
  }
  .timg {
    display: flex;
    justify-content: space-around;
    width: 1200px;
    margin: 30px auto;
    object-fit: cover;
  }
  .timage img {
    width: 300px;
    /* height: 300px; */
    /* margin: 30px 0; */
    object-fit: cover;
  }
  .timage {
    border: 1px solid black;
    width: 320px;
    height: 300px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
  .timage p {
    text-align: center;
  }
  #images {
    gap: 400px;
  }
`;

export const CardStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  .priority-0 {
    border-left: 4px solid grey;
    :hover {
      td {
        background: grey !important;
      }
    }
  }

  .priority-1 {
    border-left: 4px solid #00ff2a;
    :hover {
      td {
        background: #00ff2a !important;
      }
    }
  }

  .priority-2 {
    border-left: 4px solid #00ccff;
    :hover {
      td {
        background: #00ccff !important;
      }
    }
  }

  .priority-3 {
    border-left: 4px solid #f5864f;
    :hover {
      td {
        background: #f5864f !important;
      }
    }
  }

  .priority-4 {
    border-left: 4px solid #ff3c01;
    :hover {
      td {
        background: #ff3c01 !important;
      }
    }
  }

  .ant-table table {
    border-collapse: collapse;
  }

  .title {
    font-size: 1.8rem;
    font-weight: 00;
    text-align: center;
    width: 100%;
    border-bottom: 1px solid grey;
    padding-bottom: 10px;
    font-weight: bold;
  }

  margin: 1rem 2rem;
  box-sizing: border-box;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  border-radius: 5px;

  .table-row {
    cursor: pointer;
  }
  padding: 1rem;
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
`;

export const MovieCardStyle = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border: 1px solid tomato;
  min-width: 300px;
`;

export const StyledCardStyle = styled.div`
  * {
    font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
      sans-serif;
  }
  .aligned label {
    display: block;
    padding: 8px 10px 0 0;
    float: left;
    width: 200px;
    word-wrap: break-word;
    line-height: 1;
    font-weight: 300;
    font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
      "Lucida Sans", Arial, sans-serif;
  }
  select {
    height: 28px;
    background-color: beige;
    border: 1px solid;
    border-color: #00000042;
    font-size: 15px;
    padding: 0px 10px;
    color: rgba(0, 0, 0, 0.815);
  }
  .form-row {
    overflow: hidden;
    padding: 14px;
    font-size: 17px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.137);
  }
  .form {
    border: 1px solid rgba(0, 0, 0, 0.384);
    padding: 23px;
    background-color: beige;
  }
  .aligned input {
    background-color: beige;
    border: 1px solid;
    border-color: #00000042;
    height: 24px;
    width: 230px;
    color: black;
  }
  #placement {
    height: 130px;
  }
  .aligned a {
    font-size: 15px;
    color: black;
    margin: 6px 12px;
    font-weight: 200;
  }
  .fa-plus:before {
    padding-top: 3px;
  }
  .form button {
    margin-top: 30px;
    background-color: black;
    color: white;
    border: 1px solid black;
    border-radius: 3px;
    padding: 5px 10px;
    font-size: 16px;
    font-size: 16px;
    cursor: pointer;
  }
  .heading {
    font-weight: 300;
    font-family: "Courier New", Courier, monospace;
    text-align: left;
    margin-left: 16px;
  }
  .toaligned {
    display: flex;
  }
  .align {
    display: flex;
    justify-content: space-between;
    gap: 380px;
    text-align: left;
  }
`;
