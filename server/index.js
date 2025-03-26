const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const multer = require('multer');
const path = require('path');

const connectDb = require('./db.js')
const UserModel = require('./models/Users')
const ProjectModel = require('./models/Projects')
const corsConfig={
  origin:"*",
  credential:true,
  methods:["GET","POST","PUT","DELETE"]
}

const app = express()
app.options("",cors(corsConfig))
app.use(cors(corsConfig))
app.use(express.json())
app.use('/uploads', express.static('uploads'));


connectDb();



app.post("/createUser",(req,res)=>{
    UserModel.create(req.body).then(users => res.json(users))
    .catch(error => res.json(error))
})

// Define the Schema

//   const ProjectSchema = new mongoose.Schema({
//     title: String,
//     desc: String,
//     img: String,
//     category: String,
//     type: String,
//     url: String,
// })

// const ProjectModel = mongoose.model('projects',ProjectSchema)

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/'); // define the upload folder
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + path.extname(file.originalname)); // unique filename
    },
  });

  const upload = multer({ storage: storage });
  module.exports = upload;

  // Handle Form Submission
  app.post('/createProject', upload.single('img'), async (req, res) => {
    const { title, desc, category, type, url } = req.body;
    const imgPath = req.file.path.replace(/\\/g, '/');

    const projects = new ProjectModel({
      title,
      desc,
      img: imgPath,
      category,
      type,
      url,
    });

    await projects.save();
    res.status(201).json(projects);
  });




// app.post("/createProject",(req,res)=>{
//     ProjectModel.create(req.body).then(projects => res.json(projects))
//     .catch(error => res.json(error))
// })

// app.get("/",(req,res)=>{
//     UserModel.find({})
//     .then(users => res.json(users))
//     .catch(error => res.json(error))
// })

app.get("/Users/",(req,res)=>{
    UserModel.find({})
    .then(users => res.json(users))
    .catch(err => res.json(err))
})

app.get("/Projects/",(req,res)=>{
    ProjectModel.find({})
    .then(projects => res.json(projects))
    .catch(err => res.json(err))
})

app.get("/getProjects/:id",(req,res)=>{
  const id = req.params.id
    ProjectModel.findById({_id:id})
    .then(projects => res.json(projects))
    .catch(err => res.json(err))
})

app.put("/updateProjects/:id", upload.single('img'), (req, res) => {
  const id = req.params.id;
  const { title, desc, category, type, url } = req.body;
  let imgPath = req.body.img;

  if (req.file) {
    imgPath = req.file.path.replace(/\\/g, '/');
  }

  ProjectModel.findByIdAndUpdate(
    { _id: id },
    {
      title,
      desc,
      img: imgPath,
      category,
      type,
      url,
    },
    { new: true }
  )
    .then((projects) => res.json(projects))
    .catch((err) => res.json(err));
});

app.delete("/deleteProjects/:id",(req,res)=>{
  const id = req.params.id
  ProjectModel.findByIdAndDelete({_id:id})
  .then(projects => res.json(projects))
  .catch(err => res.json(err))
})

app.listen(3001,()=>{console.log('Server is running!')})

