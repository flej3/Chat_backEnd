const mongoose = require("mongoose");


//데이터의 설계도를 작성. 
//내가 받을 데이터들이 어떻게 생겨야하는지 정의해둠.
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "User must type name"],
    unique: true,
  },

  token: {
    type: String,
  },

  online: {
    type: Boolean,
    default: false,
  },
});

//mongoose.model("User", userSchema):
//User이라는 모델을 생성하고 User는 userSchema에 정의된 스키마를 따른다.


//module.exports
//Node.js에서 module.exports는 모듈이 내보내는 값을 설정한다.
// 이 값을 통해 다른 파일에서 require 함수를 사용하여 이 모듈을 가져올 수 있다.

//즉, User이라는 모델을 생서하고 이를 내보내서 다른 파일에서 이모델을 사용할 수 있게 한다.
module.exports = mongoose.model("User", userSchema);