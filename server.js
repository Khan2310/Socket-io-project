const express = require("express");
const socket = require("socket.io");

//making server
const app = express();

//show welcome message
app.get("/", (req, res) => {
  res.send("welcome server!");
});

//static file
//app.use(express.static("public"));

//server open on port
const server = app.listen(4000, () => {
  console.log("server started on port no: 4000");
});

//socket setup
const io = socket(server);
io.on("connection", socket => {
  socket.on("switch-image", data =>{
    io.sockets.emit("switch-image", data);
  })
  console.log("socket connected");
});
