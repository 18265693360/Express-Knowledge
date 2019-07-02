// 我们采用全局安装生成器： npm install -g express-generator
// 2，创建应用
// express 项目的名称
// cd 项目名
// npm install 安装相应的插件
// npm start 启动项目
// 访问 localhost:3000

// 三，路由
// 1，基本路由
// 什么是路由？
// 官方解释：路由是指如何定义应用的端点（URIs）以及如何响应客户端的请求。
// 民间解释：给一个请求，这个请求交给谁来处理，交给的过程就是路由。


// 在express中，有两种实现路由的方式：
// 1，针对应用级别的，就是在app对象上设置
// 2，针对Router实例对象的

/*
* 应用级别路由
* */
const express = require('express');
const app = express();

app.get('/', function (req,res) {
    res.send("<h1>这是页面</h1>>")
});

app.get('/login', function (req,res) {
    res.send("<h1>我是登录页面</h1>>")
});

app.get('/list', function (req,res) {
    res.send("<h1>我是列表</h1>>")
});

app.listen(3000);


/*
* router 实例路由
* */
const express = require("express");
const router = express.Router();

router.get('/', function (req,res,next) {
    res.render('index', {title:'Express'})
});

//导出实例路由
module.exports = router;
// 2，创建一个针对应用级别的路由，是分步骤：
// a, 通过express()创建一个app实例
// b, METHOD是一个HTTP的请求方法，如get请求或post请求， app.get(), app.post()
// c, path是服务器上的路径，是url中的路径部分，如 “/”  “/user”
// d,callback当路pp.post()
// // c, path是服由匹配成功是要执行一个函数，在这个函数中有两个非常重要的参数，req，res,  req是指incommingMessage, res是指serverResponse

//get
const express =  requie("express");
const app = express();

app.get("/login", function (req,res) {
    res.send('Hello');
});

app.listen(3000);

//post
const express = require('express');
const app = express();

app.get('/login',function (req, res) {
   // res.send('Hello');
    res.sendFile(__dirname + "/03.post.html")
});
app.post("/user", function (req,res) {
    res.send('你提交了')
});


// 3，路由句柄
// 路由句柄就是一个回调函数。如下：
// 对于这个路由句柄，它必须要有两个参数，req, res.


// 当我们设置了两个回调函数时，第二个回调函数没有起作用：
const express = require("express");
const app = express();

app.get("/login", function (req,res) {
   res.send("第一个回调函数");
}, function (req,res) {
    res.send("第二个回调函数")
});

app.listen(3000);


// 想让第二个回调函数起作用，那么就要用到第三个参数，叫next, 需要在第一个回调函数中，调用next()，就会执行下一个回调函数：
const express = require('express');
const app = express();

app.get("/login",function (req,res,next) {
    console.log("第一个回调函数");
    next();
},function (req,res) {
    console.log("第二个回调函数");
});

app.listen(3000);

// 我们还可以在第二个回调函数中，指定next， 这样的话，可以让第三个回调函数起作用。

const express = require("express");
const app = express();

app.get('/login',function (req,res,res) {
    console.log("第一个回调函数");
    next();
},function (req,res,next) {
    console.log("第二个函数");
    next();
},function (req,res,next) {
    console.log("第三个函数");
    next();
});


























