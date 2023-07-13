require("dotenv").config();
const express = require("express"),
  PORT = process.env.PORT,
  app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Socket IO prereq
const http = require("http");
const cors = require("cors");
const server = http.createServer(app);
app.use(cors());

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

//Socket IO

const io = require("socket.io")(mainServer, { cors: { origin: "*" } });

io.on("connection", (socket) => {
  console.log(socket.id + " sucessfully logged in.");

  socket.on("join_room", (data) => {
    socket.join(data);
    console.log(`user ${socket.id} join the room ${data}.`);
  });

  socket.on("send_message", (data) => {
    socket.to(data.room).emit("receive_message", data);
  });

  socket.on("connect_error", (err) => {
    console.log(`connect_error due to ${err.message}`);
  });

  socket.on("disconnect", () => console.log(`${socket.id} has disconnected.`));
});
