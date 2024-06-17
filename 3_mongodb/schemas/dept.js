// schemas  /dept.js

const mongoose = require("mongoose");
const { type } = require("os");
const {Schema} = mongoose;

const deptSchema = new Schema({
    deptno : {
        type : Number,
        required : true,
        unique : true
    },
    dname : {
        type : String,
        required : true
    },
    location : {
        type : String,
        required : true
    }
});

const Dept = mongoose.model("Dept", deptSchema);

module.exports = Dept;