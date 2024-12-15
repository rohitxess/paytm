// creating the routes for the project 
// router will handle all the backend calls from the API 
// we can create multiple router to handle requests from different API 
// middlewares for authentication 

const express = require("express");
const userRouter = require("./user");

const router = express.Router();

router.use("/user", userRouter) // all the user requests will go to the user router 

module.exports = router;


