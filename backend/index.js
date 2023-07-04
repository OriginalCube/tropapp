require("dotenv").config();
const express = require("express"),
  PORT = process.env.PORT,
  app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Check connection.
const api_url = "/api/v1";

app.use(api_url + "/user", require("./routes/User"));

const mainServer = app.listen(PORT, () =>
  console.log(`listening on port : ${PORT}`)
);

// mainServer();
