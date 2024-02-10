const {createServer} = require("http");
const app = require("./app");
const {Server} = require("socket.io");
require("dotenv").config();

//app = 데이터베이스 연결 부분
const httpServer = createServer(app);
const io = new Server(httpServer, {
  //허락하는 사용자.
  cors:{
    origin:"http://localhost:3000",
  },
});

require('./utils/io')(io);
httpServer.listen(process.env.PORT, ()=>{
  console.log("server listening on port", process.env.PROT)
})