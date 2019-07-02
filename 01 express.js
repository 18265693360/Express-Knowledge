/*
* Express 基于 Node.js 平台，快速、开放、极简的 web 开发框架。
*2，安装Express
  我们可以把express理解成一个包，如何去安装一个包？
  通过npm install express

* */
// 3，创建第一个Express应用
//第一步 载入express
const express = require('rexpress');
//第二步 利用express创建一个应用
const app = express();

//第三步 提供一个http服务
app.get("/", function (req,res) {
    res.send("hello,this is express")
});

//第四步 监听端口
app.listen(3000);

const express = express;
const app = express();

app.get("/", function (req,res) {
    res.send("hello this is express")
});

app.listen(3000);
