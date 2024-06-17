// schemas  /emp.js

const mongoose = require("mongoose");
const { type } = require("os");

const {Schema} = mongoose;

const empSchema = new Schema({
    empno : {
        type : Number,
        required : true,
        unique : true //Pk 개념이 없다
    },
    ename : {
        type : String,
        required : true
    },
    job : { type : String},
    sal : { type : Number}
});

/*
스키마 타입
Number / String / Data / Boolean
ObjectId : 객체아이디
Buffer : 파일을 담을 수 있는 버퍼
Array : 여러 개 ex) 팔로워 아이디 담기
*/

const Emp = mongoose.model("Emp", empSchema);

module.exports = Emp;
//[과제]module.exports = {Emp}와의 차이는?
