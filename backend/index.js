
const express = require("express");
const mainRouter = require("./routes/index")

const app = express();

// the API calls will go through the main router 

app.use("/api/v1", mainRouter);


function main (){
    fetch("https//sum-server.100xdevs.com/todos")
    .then (async (response) => {
        const json = await response.json();
        console.log(json);
    })
}

async function main (){
    const response = await fetch("https//sum-server.100xdevs.com/todos");
    const json = await response.json();
    console.log(json);
}