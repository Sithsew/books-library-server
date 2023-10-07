const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
dotenv.config();

const apiRoutes = require("./routes/apiRoutes");

const PORT = process.env.PORT || 3001;
const DB_HOST = process.env.DB_HOST || "localhost";
const DB_NAME = process.env.DB_NAME;

app.use(bodyParser.json());
app.use(cors());

// Use API routes
app.use("/api", apiRoutes);

// Connect to MongoDB
mongoose
  .connect(`${DB_HOST}/${DB_NAME}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected!");
    app.listen(PORT, () => {
      console.log(`App started on port: ${PORT}`);
    });
  })
  .catch((error) => {
    console.log("An Error Occurred: ", error);
  });
