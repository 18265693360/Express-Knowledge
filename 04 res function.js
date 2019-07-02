//作为回调函数的第二个参数

//1 直接发送 响应的内容 可以是普通的字符串 也可以是html标签 不需要其他的头信息
const express = require(express);
const app = express();

qpp.get('/',function (req,res) {
   res.send("<h1>我是324535</h1>>")
});

app.listen(3000);

//(2) sendFile
//用来发送文件 我们可以用来发送一个html文件
const express = require('express');
const app = express();

app.get('/',function (req,res) {
   res.sendFile(__dirname, "/04.index.html")
});

app.listen(3000);
//res.sendFile方法可以让服务器直接给浏览器发送文件
// 有时候这个/ 可以忘记写 可以通过path.ison方法来解决
const express = require('express');
const path = require(path);
const app = express();

app.get('/',function (req,res) {
    res.sendFile(path.join(__dirname, "01.index.html"));
})

app.listen(3000);

//(3)json
//可以用来发送一个json格式的字符串
const express = require('express');
const path = require('path');
const qpp = express();

app.get('/',function (req,res) {
    res.json({name:"xixi",age:3});
});

app.listen(3000);
//json格式
// {"name":"xixi","age":3}


// (4)render
const express = require('express');
const path = require('path');
const app = express();

app.set('views',path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.get('/', function (req,res) {
    res.render('test');
});

app.listen(3000);

// (5)download
// 可提供以下的方法
// 下载页面 04 download files.html

//使用download下载
const express = require('express');
const path = require('path');
const app = express();

app.get('/',function (req,res) {
    res.sendFile(path.join(__dirname,"08,list.html"));
})

app.get('/down', function (req,res) {
    console.log();
    var file = req.query.filename;
    res.download(file);
});

app.listen(3000);

// (6) redirect
//重定向
// 2.重定向（Redirect）:
// 当客户端（浏览器）向服务器发送一个URL请求后，但是资源并不在当前请求的服务器上，此时服务器会告诉浏览器，资源在另外一个URL地址上，此时浏览器会重新发送请求到新的资源地址。例如：
//
// ->在浏览器中看到这URL（http://www.cnblogs.com/zivxiaowei/），
//     ->服务器A响应浏览器重定向
//     ->浏览器重新定位新的URL地址到服务器B
//     ->服务器B响应内容到浏览器，此时浏览器上面的URL已经换位了新的资源请求地址
const express = require('express');
const path = require('path');
const app = express();

app.get('/user',function (req,res) {
    res.redirect('/login');
});

app.get('/login',function (req,res) {
    res.sendFile(path.join(__dirname,"03,post.html"))
});

app.listen(3000);
































