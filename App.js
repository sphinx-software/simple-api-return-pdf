// Load necessary packages
const express = require("express");
const cors = require('cors')

// create an express app
const app = express();
app.use(cors())

// define PORT number to listen to the requests
const PORT = process.env.PORT || 3100;

// to serve files from uploads directory
app.use("/uploads", express.static("uploads"));

// express routes
app.use("/", require("./routes"));

// listen to requests
app.listen(PORT, () => console.log(`Server started running on PORT 
${PORT}`));

