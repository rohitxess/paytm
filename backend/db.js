const mongoose = require ("mongoose");

// to connect to the database 

mongoose.connect("mongodb+srv://xessro:cGttcY25UwsIiODG@cluster0.p0het.mongodb.net/")

// define the schema 
// we can also add constraint to the libraries 

const UserSchema = mongoose.Schema({
    username: 
    {   type: String,
        required: true, 
        unique: true, 
        trim: true, 
        lowercase: true, 
        minLength: 3, 
        maxLength: 30  
    },
    password:
    {   type: String,
        required: true, 
        minLength: 6, 
  
    },
    firstName:
    {   type: String,
        required: true, 
        trim: true, 
        maxLength: 30  
    },
    lastName:
    {   type: String,
        required: true, 
    },
})

const User = mongoose.model("User", UserSchema);

module.exports = {
    User 
}