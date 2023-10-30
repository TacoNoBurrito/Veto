const start = new Date().getTime();
const express = require("express");
const app = express();
const server = require("http").createServer(app);
const { Server } = require("socket.io");
const MapManager = require("./maps/mapManager");
const io = new Server(server);
const port = process.env.PORT || 4000;

const mapManager = new MapManager();

io.on("connection", (socket) => {

    socket.on("disconnect", () => {

    });
});

app.use(express.static("client"));
server.listen(4000);

// Server tick 20 times a second.
setInterval(() => {

}, (1000 / 50));

console.log(`Ready. (${new Date().getTime() - start}ms) http://localhost:${port}`);