import http from "http";
import app from "./app.js";

const server = http.createServer(app);

const port = process.env.PORT || 4000;

server.listen(port,function(){
    console.log("server is running at", port);
})