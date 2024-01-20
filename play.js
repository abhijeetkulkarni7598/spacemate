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

