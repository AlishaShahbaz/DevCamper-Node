const express = require("express");
const dotenv = require("dotenv");
const logger = require("./Middleware/logger");
// import Routes file in server.js
const bootcamps = require("./Routes/Bootcamps");
const connectDB = require("./config/db");
const colors = require("colors");

const app = express();

app.use(express.json());

// load env var
dotenv.config({ path: "./config/config.env" });

app.use(logger);

app.use("/api/v1/bootcamps", bootcamps);

// Connect MonogoDB

connectDB();

// define PORT
const PORT = process.env.PORT || 6000;

const server = app.listen(PORT, () => {
  console.log(
    `server running in ${process.env.NODE_ENV}mode on port ${PORT}`.yellow.bold
  );
});

// handle unhandle promise rejection
process.on("unhandledRejection", (err, promise) => {
  console.log(`Error:${err.message}`.red);

  // close server & exit process
  server.close(() => process.exit(1));
});
