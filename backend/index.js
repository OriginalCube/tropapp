require("dotenv").config();
const express = require("express"),
  PORT = process.env.PORT,
  app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Check connection.
app.use("/api/v1", (req, res) => {
  console.log("Worked");
  res.send("Connection Succesfull");
});

const mainServer = app.listen(PORT, () =>
  console.log(`listening on port : ${PORT}`)
);

// mainServer();
