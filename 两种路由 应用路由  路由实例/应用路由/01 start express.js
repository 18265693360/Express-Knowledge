// npm install express -S == npm express --save
//所有模块都在 node_modules 中
//package-lock.json 记录所有的安装包  转项目只需要上传git npm install 就可以了
//如果不是 npm install xxx -S 就不会记录在package-lock.json

var express = require('express');
var path = require('path');
var app = express();//因为有app所以是应用实例上的路由


//要建立路由 第一步app.get() 然后接要监听的路由
// path is not defined  加绝对路径
app.get('/index.html', function (req,res) {
    //绝对路径
    res.sendFile(path.join(__dirname, '01我的html.html'));
});

//post
app.post('/getUserInfo', function (req, res) {
    var str = '';
    req.on('data', function (chunk) {
        str+=chunk;
    });
    req.on('end', function () {
        console.log(str);
    });
    //  错误的  req.send('收到用户的数据')
    res.send('收到用户的数据')
});

app.get('/getUserInfo',function (req,res) {
    console.log(req.query);
    res.send(req.query);
});


//结束事件
    // req.end('end',function () {
    //     res.send(' ')
    // });


app.listen(3000);