
const express = require("express");
const cors = require('cors');
const mainRouter = require("./routes/index");

const app = express();

app.use(cors());
app.use(express.json());
module.exports = router;

// the API calls will go through the main router 

app.use("/api/v1", mainRouter);

app.listen(3000);

