const express = require("express");
const app = express();
const { v4: uuidv4 } = require("uuid");
const session = require("express-session");
const MongoStore = require("connect-mongo");
const connectDB = require('./config/database')

const User = require('./model/User');

// Allows us to use process.end.<variable name> to abstract URI strings and API keys
require('dotenv').config({path: './config/.env'})

// Connect to DB
connectDB()

// Use session
app.use(
  session({
    genid: (req) => {
      console.log("1. in genid req.sessionID: ", req.sessionID);
      return uuidv4();
    },
    store: MongoStore.create({ mongoUrl: process.env.DB_STRING }),
  
    secret: "a private key",
    resave: false,
    saveUninitialized: true,
  })
);


app.get("/", (req, res) => {
  // console.log("req.sessionID: ", req.sessionID);
  // res.send("get index route. /");
  req.session.user = req.sessionID;
  console.log(req.session.user)


});




// Use the User model to add cities to a user's cities array and save it to the database
// app.post("/add-city", (req, res) => {
//   const { city } = req.body;
//   User.findOne({ _id: req.session.user }, (err, user) => {
//     if (err) {
//       res.status(500).send(err);
//     } else {
//       user.cities.push(city);
//       user.save();
//       res.send("City added!");
//     }
//   });
// });

// Server response on port var
app.listen(process.env.PORT, ()=>{
    console.log(`Server is running fast on port ${process.env.PORT}, you better catch it!`)
}) 
