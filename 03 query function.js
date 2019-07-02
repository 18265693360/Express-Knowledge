//将查询字符串变成对象
const express = require('express');
const app = express();

app.get("/login",function (req,res) {
    // console.log(req);
    console.log(req.query);
    res.send('req对象')
});

app.listen(3000);


//得到路径名 path
app.get("/user/haha",function (req,res) {
    console.log(req.path);
    res.send("req对象");
});

app.listen(3000);
