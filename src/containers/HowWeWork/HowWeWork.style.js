import styled from "styled-components";

export const HowweworkSTyle = styled.div`

h1,
h2,
h3,
h4,
h5,
h6 {}
a,
a:hover,
a:focus,
a:active {
    text-decoration: none;
    outline: none;
}

a,
a:active,
a:focus {
    color: #333;
    text-decoration: none;
    transition-timing-function: ease-in-out;
    -ms-transition-timing-function: ease-in-out;
    -moz-transition-timing-function: ease-in-out;
    -webkit-transition-timing-function: ease-in-out;
    -o-transition-timing-function: ease-in-out;
    transition-duration: .2s;
    -ms-transition-duration: .2s;
    -moz-transition-duration: .2s;
    -webkit-transition-duration: .2s;
    -o-transition-duration: .2s;
}


.work-container {
    width: 95vw;
    padding: 8rem 5rem 5rem 5rem;
    /* box-shadow: 0 0.4rem 1.2rem rgba(0, 0, 0, 0.4); */
    margin-top: -5rem;
    background: #fff;
    border-radius: 0.5rem;
    
}
img {
max-width: 100%;
height: auto;
}
span, a, a:hover {
display: inline-block;
text-decoration: none;
color: inherit;
padding: 0.5rem 0;
font-size: 1.8rem;
}
.section-head {
margin-bottom: 60px;
}
.section-head h4 {
position: relative;
padding:0;
color:var(--primary-color);
line-height: 1;
letter-spacing:0.3px;
font-size: 2.8rem;
font-weight: 500;  
text-align:center;
text-transform:none;
margin-bottom:30px;
}
.section-head h4:before {
content: '';
width: 60px;
height: 3px;
background: var(--primary-color);
position: absolute;
left: 0px;
bottom: -10px;
right:0;  
margin:0 auto;
}
.section-head h4 span {
font-weight: 700;
padding-bottom: 5px;
color:#2f2f2f;
letter-spacing:0.3px;
font-size: 2.8rem;
font-weight: 500;  
}
p.service_text{
color:#cccccc !important;
font-size:16px;
line-height:28px;
text-align:center;    
}
.section-head p, p.awesome_line{
color:#818181;
font-size:16px;
line-height:28px;
text-align:center;  
}


.item {
background: #fff;
text-align: center;
padding: 30px 25px;
-webkit-box-shadow:0 0px 25px rgba(0, 0, 0, 0.07);
box-shadow:0 0px 25px rgba(0, 0, 0, 0.07);
border-radius: 20px;
border:5px solid rgba(0, 0, 0, 0.07);
margin-bottom: 30px;
-webkit-transition: all .5s ease 0;
transition: all .5s ease 0;
transition: all 0.5s ease 0s;
height: 350px;
}
.item:hover{
background:var(--secondary-color);
box-shadow:0 8px 20px 0px rgba(0, 0, 0, 0.2);
-webkit-transition: all .5s ease 0;
transition: all .5s ease 0;
transition: all 0.5s ease 0s;
}
.item:hover .item, .item:hover span.icon{
background:#fff;
border-radius:10px;
-webkit-transition: all .5s ease 0;
transition: all .5s ease 0;
transition: all 0.5s ease 0s;
}
.item:hover h6, .item:hover h2, .item:hover p{
color:rgb(0, 0, 0);
-webkit-transition: all .5s ease 0;
transition: all .5s ease 0;
transition: all 0.5s ease 0s;
}
.item .icon {
font-size: 40px;
margin-bottom:25px;
color: var(--primary-color);   
width: 90px;
height: 90px;
line-height: 96px;
border-radius: 50px;
}
.item .feature_box_col_one{
background:rgba(247, 198, 5, 0.20);
color:var(--primary-color)
}
.item .feature_box_col_two{
background:var(--bgcolor);
color:var(--primary-color)
}
.item .feature_box_col_three{
background:rgba(0, 147, 38, 0.15);
color:var(--primary-color)
}
.item .feature_box_col_four{
background:rgba(0, 108, 255, 0.15);
color:var(--primary-color)
}
.item .feature_box_col_five{
background:rgba(146, 39, 255, 0.15);
color:var(--primary-color)
}
.item .feature_box_col_six{
background:rgba(23, 39, 246, 0.15);
color:var(--primary-color)
}
.item p{
font-size:15px;
line-height:26px;
}
.item h6 {
margin-bottom:20px;
color:#2f2f2f;
}



@media screen and (max-width: 550px) {
   

   .main-hero-para-feature {
        font-weight: lighter;
        text-align: justify;
        margin-top: 2rem;
        padding: 1rem;
   }
   .item {
        padding: 20px 5px;
    }
    .item p {
        padding: 0.5rem 1rem;
    }
    .work-container{
        padding: 1rem 1rem;
    }
   /* color: var(--main-text-color); */
}

@media (max-width: 750px) {
    .item {
        padding: 20px 0px;
    }
}

@media screen and (max-width: 820px) {
    

    .main-hero-para-feature {
        font-weight: lighter;
        margin-top: 2rem;
    }
    
    

}

`;