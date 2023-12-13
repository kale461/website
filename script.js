const express = require('express');
const bodyParser = require('body-parser');
const fs=require('fs');

const home=fs.readFileSync('./home.html');
const users=fs.readFileSync('./users.html');
const about=fs.readFileSync('./about.html');
const service=fs.readFileSync('./services.html');
const contact=fs.readFileSync('./contact.html');
const login=fs.readFileSync('./login.html');
const admin=fs.readFileSync('./admin.html');
const student=fs.readFileSync('./student.html');
const teachers=fs.readFileSync('./teachers.html');
const physics=fs.readFileSync('./11thphysics.pdf');
const chemistry=fs.readFileSync('./11thchemistry.pdf');
const physics12th=fs.readFileSync('./12thphysics.pdf');
const chemistry12th=fs.readFileSync('./12thchemistry.pdf');
const BCA1st=fs.readFileSync('./BCA.pdf');
const BCA2nd=fs.readFileSync('./BCA2nd.pdf');
const index=fs.readFileSync('./index.html');





const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.json());

// Routes
app.get('/',(req,res)=>{
  res.end(home);
});
app.get('/about',(req,res)=>{
  res.end(about);
});
app.get('/contact',(req,res)=>{
  res.end(contact);
});
app.get('/services',(req,res)=>{
  res.end(service);
});
app.get('/users',(req,res)=>{
  res.end(users);
});
app.get('/login',(req,res)=>{
  res.end(login)
});
app.get('/admin',(req,res)=>{
  res.end(admin);
});
app.get('/student',(req,res)=>{
  res.end(student);
});
app.get('/teachers',(req,res)=>{
  res.end(teachers);
});
app.get('/index',(req,res)=>{
     res.end(index);
});


app.get('/11thphysics',(req,res)=>{
  res.end(physics);
});
app.get('/11thchemistry',(req,res)=>{
  res.end(chemistry)
});
app.get('/12thphysics',(req,res)=>{
  res.end(physics12th);
});
app.get('/12thchemistry',(req,res)=>{
  res.end(chemistry12th)
});
app.get('/BCA',(req,res)=>{
  res.end(BCA1st);
});
app.get('/BCA2nd',(req,res)=>{
  res.end(BCA2nd)
});













// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
