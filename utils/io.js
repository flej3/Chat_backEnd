const chatController = require("../Controllers/chat.controller");
const userController = require("../Controllers/user.controller")

//io관련된, 통신관련된 함수를 넣는다.
module.exports=function (io){
  io.on("connection", async(socket)=>{
    console.log("client is connected", socket.id);
    
    socket.on("login", async(userName, cb)=>{
      // console.log("backend", userName);
      //유저정보를 저장. 통신이랑은 관련 없으니 다른 파일로 설정.
      try{
        const user = await userController.saveUser(userName,socket.id);
        cb({ok:true, data:user});
      }
      catch(error){
        cb({ok:false, error: error.massage});
      }
    })

    socket.on("sendMessage", async(message, cb)=>{
      try{
        //유저 찾기 socket.id로
      const user = await userController.checkUser(socket.id);
      //메세지 저장(유저)
      const newMessage = await chatController.saveChat(message, user);
      io.emit("message", newMessage)
      cb({ok:true})
      }
      catch(error){
        cb({ok:false, error: error.massage});
      }
    })

    socket.on("disconnect", ()=>{
      console.log("user is disconnected");
    });
  });
};