//Express 라이브러리 가져옴
const express = require("express");
//Mongoose 라이브러리 가져옴.
const mongoose = require("mongoose");
//dotenv라이브러리를 가져와 환경 변수를 로드한다. 
//dotenv는 .env에 저장된 환경 변수를 process.env에 할당 해준다.
require('dotenv').config();
//CORS 미들웨어인 cors 라이브러리를 가져온다. 
//이 미들웨어는 다른 도메인에서의 요청을 허용한다.
const cors = require("cors");
//Express 앱 인스턴스를 생성한다. 
const app = express();

//Express 앱에 cors 미들웨어를 등록한다. 이로써 다른 도메인에서의 요청을 허용한다.
app.use(cors());

//Mongoose를 사용하여 MongoDB 데이터베이스에 연결한다. 연결하려는 데이터 베이스의 주소는 
//환경 변수 DB에서 가져온다.
mongoose.connect(process.env.DB).then(()=>console.log("connected to database"));

//Express앱을 내보낸다. 이를 통해 다른 파일에서 이 앱을 사용할 수 있다.
module.exports = app;