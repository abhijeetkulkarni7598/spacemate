// import { title } from "process"
// import images from "./src/API/images"
// import { get } from "http"

// Todays Task

// Create Client ===>
// Client Model:
// company_name
// gst_no
// email_id
// contact_no
// contact_person_name
// address
// created_at
// updated_at
// shipping_address

// ===>
// Create Job

// job model

// Job No.,
// Client Name(foreign key from client model),
// Project Name,
// PO Date,
// Status(Multiple status) (static drop down)
// Multiple PDF/Image uploads with title to each
// [{title, image/pdf}, {title, image/pdf}.....]

// laminated
// user/customer  =>key
// laminated => true or false

// laminated images

// title
// img
// laminated key

// while get

// title
// img
// laminated{
//     user=>key
//     laminated:true/false
// }


//customer user table

//get user info by its id http:localhost:8000/api/user/:id
//while GET get by user id
const user = [
  {
    id: id,
    model_name: "strutural_work",
    status: true / false,
    user: key,
  },
  {
    id: id,
    model_name: "laminated",
    status: true / false,
    user: key,
  },
];



const modelSTATIC = [
  "strutural_work",
  "laminated",
  "hardware_install",
  "furnishing_work",
  "hand_over_and_finalizing",
];
// one user = one project

const model = {
  id: id,
  model_name: "laminated",//modelSTATIC through 
  status: true / false,
  user: key,
};

//img and title model for
const img_title_strutural_work = {
  img: img,
  title: title,
  model: id,
};
//GET imgs of particular user of model_name laminated
// http://localhost:8000/api/imgsurl/?model_id=:id
const img_GET = [
  {
    img: img,
    title: title,
    model: {
      model_name: "laminated",
      status: true / false,
      user: key,
    },
  },
  {
    img: img,
    title: title,
    model: {
      model_name: "laminated",
      status: true / false,
      user: key,
    },
  },
  {
    img: img,
    title: title,
    model: {
      model_name: "laminated",
      status: true / false,
      user: key,
    },
  },
];




enquiry=[ {
  "id": 1,
  "status": "Client",
  "customer_status": null,
  "name": "prateek",
  "mobile": 1212121299,
  "email": "prateek@gmial.com",
  "address": "213qasdsad",
  "requirement": "adsasdasd",
  "floor_plain": "http://localhost:8000/image/floor_plans/car-interior-design_Nr2w5Em.jpg",
  "created_by": null,
  "customer_id": 3,
 
},
{
  "id": 4,
  "status": "Prospect",
  "customer_status": 1,
  "name": "prateek",
  "mobile": 1212121299,
  "email": "prateek@gmial.com",
  "address": "213qasdsad",
  "requirement": "adsasdasd",
  "floor_plain": "http://localhost:8000/image/http%3A/127.0.0.1%3A8000/image/http%253A/127.0.0.1%253A8000/image/http%25253A/127.0.0.1%25253A8000/image/floor_plans/car-interior-design_oB0Aoog.jpg",
  "created_by": null,
  "customer_id": 5,
  
},]











quotation=[



{
  "id": 2,
  "item": [],
  "quotation_number": "SM0001/24-25",
  "user_client": "new",
  "user_client_id": 1,
  "client_id": "4",
  "client_name": "prateek",
  "client_address": "adress1",
  "client_contact": "324324",
  "special_note": "234",
  "remark": "hello remark",
  "discount": 100,
  "total_with_discount": "0.00",
  "date": "22/02/24",
  "revision_no": "R01",
  "status": 2
},
{
  "id": 3,
  "item": [],
  "quotation_number": "SM0001/24-25",
  "user_client": "new",
  "user_client_id": 1,
  "client_id": null,
  "client_name": "prateek",
  "client_address": "adress1",
  "client_contact": "324324",
  "special_note": "234",
  "remark": "hello remark",
  "discount": 100,
  "total_with_discount": "0.00",
  "date": "01/02/24",
  "revision_no": "R02",
  "status": 2
},
{
  "id": 4,
  "item": [],
  "quotation_number": "SM0001/24-25",
  "user_client": "new",
  "user_client_id": 1,
  "client_id": null,
  "client_name": "prateek",
  "client_address": "adress1",
  "client_contact": "324324",
  "special_note": "234",
  "remark": "hello remark",
  "discount": 100,
  "total_with_discount": "0.00",
  "date": "01/02/24",
  "revision_no": "R03",
  "status": 2
}
]


enquiry=[ {
  "id": 1,
  "status": "Client",
  "customer_status": null,
  "name": "prateek",
  "mobile": 1212121299,
  "email": "prateek@gmial.com",
  "address": "213qasdsad",
  "requirement": "adsasdasd",
  "floor_plain": "http://localhost:8000/image/floor_plans/car-interior-design_Nr2w5Em.jpg",
  "created_by": null,
  "customer_id": 3,
  "quotation":[



    {
      "id": 2,
      "item": [],
      "quotation_number": "SM0001/24-25",
      "user_client": "new",
      "user_client_id": 1,
      "client_id": "4",
      "client_name": "prateek",
      "client_address": "adress1",
      "client_contact": "324324",
      "special_note": "234",
      "remark": "hello remark",
      "discount": 100,
      "total_with_discount": "0.00",
      "date": "22/02/24",
      "revision_no": "R01",
      "status": 2
    },
    {
      "id": 3,
      "item": [],
      "quotation_number": "SM0001/24-25",
      "user_client": "new",
      "user_client_id": 1,
      "client_id": null,
      "client_name": "prateek",
      "client_address": "adress1",
      "client_contact": "324324",
      "special_note": "234",
      "remark": "hello remark",
      "discount": 100,
      "total_with_discount": "0.00",
      "date": "01/02/24",
      "revision_no": "R02",
      "status": 2
    },
    {
      "id": 4,
      "item": [],
      "quotation_number": "SM0001/24-25",
      "user_client": "new",
      "user_client_id": 1,
      "client_id": null,
      "client_name": "prateek",
      "client_address": "adress1",
      "client_contact": "324324",
      "special_note": "234",
      "remark": "hello remark",
      "discount": 100,
      "total_with_discount": "0.00",
      "date": "01/02/24",
      "revision_no": "R03",
      "status": 2
    }
    ]
},
{
  "id": 4,
  "status": "Prospect",
  "customer_status": 1,
  "name": "prateek",
  "mobile": 1212121299,
  "email": "prateek@gmial.com",
  "address": "213qasdsad",
  "requirement": "adsasdasd",
  "floor_plain": "http://localhost:8000/image/http%3A/127.0.0.1%3A8000/image/http%253A/127.0.0.1%253A8000/image/http%25253A/127.0.0.1%25253A8000/image/floor_plans/car-interior-design_oB0Aoog.jpg",
  "created_by": null,
  "customer_id": 5,
  quotation:[]
},]