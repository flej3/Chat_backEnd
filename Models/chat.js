const mongoose = require("mongoose");

const chatSchema = new mongoose.Schema({
  chat: String,
  user: {
    id: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
    },
    name: String,
  },
},
//스키마 옵션을 정의한다. 
//해당 옵션이 true이면, mongoose가 createdAt과 updatedAt을 관리하도록 설정한다.
//두 필드는 문서가 생성되거나 업데이트 될때 자동으로 업데이트 된다.
{timestamp: true}
);

module.exports = mongoose.model("Chat", chatSchema);