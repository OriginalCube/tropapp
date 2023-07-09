require("dotenv").config();
const express = require("express"),
  PORT = process.env.PORT,
  app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Check connection.
const api_url = "/api/v1";

//Connect to MongoDB
const connectDb = require("./configs/Mongo");
connectDb();

app.use(api_url + "/user", require("./routes/User"));

app.use(api_url + "/post", require("./routes/Post"));

app.use(api_url + "/follow", require("./routes/Follow"));

const mainServer = app.listen(PORT, () =>
  console.log(`listening on port : ${PORT}`)
);

// mainServer();
