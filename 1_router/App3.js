const express = require("express");
const app = express();
const port = 3000;

app.listen(port, ()=>{
    console.log("server running")
})

const customerRoute = require("./router/customer") //.js 생략!
const productRoute= require("./router/product")

app.use("/customer", customerRoute);//요청url에 product
app.use("/product", productRoute); //요청url에 product