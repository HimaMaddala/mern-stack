const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const UserModel = require('./models/Users');

const app = express ()
app.use(cors())
app.use(express.json())

mongoose.connect('mongodb://127.0.0.1:27017/your_databse');//place your database

app.get('/getUsers', (req, res) => {
  UserModel.find()
    .then(users => {
      console.log("Fetched users:", users); // Log the fetched users
      res.json(users);
    })
    .catch(err => {
      console.error("Error fetching users:", err);
      res.status(500).json({ error: "Internal Server Error" });
    });
});



app.listen(3001, () => {
    console.log("Server is up and running");
  });