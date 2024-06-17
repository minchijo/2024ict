// router / customer.js

const express = require("express");
const router = express.Router();

router.get("/", function(req, res){
    res.send("고객정보 조회 / customer router")
});

router.post("/insert", function(req, res){
    res.send("고객정보 입력 / insert router")
});

router.put("/update", function(req, res){
    res.send("고객정보 수정 / update router")
});

router.delete("/delete", function(req, res){
    res.send("고객정보 삭제 / delete router")
});

module.exports = router;

