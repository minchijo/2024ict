// router / product.js

const express = require("express");

const router = express.Router();

router.get("/", function(req, res){
    res.send("상품 정보 조회 / product router")
});

router.post("/insert", function(req, res){
    res.send("상품 정보 입력 / insert router")
});

router.put("/update", function(req, res){
    res.send("상품 정보 수정 / update router")
});

router.delete("/delete", function(req, res){
    res.send("상품 정보 삭제 / delete router")
});

module.exports = router;
