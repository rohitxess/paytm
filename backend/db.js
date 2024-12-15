const mongoose = require ("mongoose");

// to connect to the database 

mongoose.connect("mongodb+srv://xessro:cGttcY25UwsIiODG@cluster0.p0het.mongodb.net/")

// define the schema 

const UserSchema = mongoose.Schema({
    username: String, 
    password: String, 
    firstName: String, 
    lastName: String,
})

const User = mongoose.model("User", UserSchema);

module.exports = {
    User 
}