
// 1，什么是中间件
// Express 是一个自身功能极简，完全是由路由和中间件构成一个的 web 开发框架：从本质上来说，一个 Express 应用就是在调用各种中间件。

// 中 间件（Middleware） 是一个函数，
// 它可以访问请求对象（request object (req)）,
// 响应对象（response object (res)）, 和 web
// 应用中处于请求-响应循环流程中的中间件，一般被命名为 next 的变量。

// 民间：所谓的中间件，就是指一个回调函数，在这个回调函数中，有三个参数，req, res, next。它和上午所说的路由句柄差不多。


//路由句柄
// 如果想更透彻一点地认识句柄，我可以告诉大家，句柄是一种指向指针的指针。我们知道，所谓指针是一种内存地址。应用程序启动后，组成这个程序的各对象是住留在内存的。如果简单地理解，似乎我们只要获知这个内存的首地址，那么就可以随时用这个地址访问对象。但是，如果您真的这样认为，那么您就大错特错了。我们知道，Windows是一个以虚拟内存为基础的操作系统。在这种系统环境下，Windows内存管理器经常在内存中来回移动对象，依此来满足各种应用程序的内存需要。对象被移动意味着它的地址变化了。如果地址总是如此变化，我们该到哪里去找该对象呢?
// 为了解决这个问题，Windows操作系统为各应用程序腾出一些内存储地址
// ，用来专门登记各应用对象在内存中的地址变化，而这个地址(存储单元
// 的位置)本身是不变的。Windows内存管理器在移动对象在内存中的位置
// 后，把对象新的地址告知这个句柄地址来保存。这样我们只需记住这个句
// 柄地址就可以间接地知道对象具体在内存中的哪个位置。这个地址是在对
// 象装载(Load)时由系统分配给的，当系统卸载时(Unload)又释放给系统。

// 一个 Express 应用就是在调用各种中间件。路由也属于中间件。
// 2，应用级中间件
// 所谓的应用级别的，就是指通过app对象来调用。

// 如何使用应用级别中间件？
// app.use([path])
// app.METHOD(); METHOD是指 get post

//对于app.use()方式的中间件 如果说没有写path
// 就说明所有的请求都会使用这个中间件
// 对于app.METHOD,实际上就是路由，从这个方面来说，路由也是中间件的一种。

const express = require(express);
const app = express();

app.use(function (req,res,next) {
    console.log("use方式使用的中间件");
    next();
    //此处的next() 是将控制权交给后继的中间件来处理
});

app.get('/',function (req,res) {
    res.send('<h1>中间件</h1>>.')
})

// express 基于node.js的一个框架
// Node 是一个将JS运行在服务端的一个平台


// 3，什么是路由？
// 给一个请求，交给谁来处理，那么这个交给的过程就是路由。


// 4，路由方式？
// get, post

// 5，路由句柄？
// 就是一个回调函数，一般要有两个参数，req, res。
// req是指IncomingMessage,一些请求相关的信息，这些信息，我们只能获取，不能修改。
// res是指ServerResponse，表示响应对应。

// 6，req对象和res对象？
// req是指incomingMessage 一些请求相关的信息 req.query
// res是serverResponse 表示响应对象 res.send() res.sendFile()
// res.json() res.render() res.download() res.redirect()

// 7，什么是中间件？
// 也是一个回调函数，这个回调函数比较特殊，有三个参数，req, res, next。

// 8，应用级中间件？
//引入 express
const express = require('express');
//调用express 创建一个应用
const app = express();

//中间件 没有path 表示所有的请求都要使用这个中间件
app.use(function (req,res,next) {
    console.log('应用级别的中间件');
    next();
});

//第三步 创建一个http server 服务
app.get("/",function (req,res) {
    res.send("<h1>中间件</h1>>")
});


//路由级别中间件
// 路由级别的是中间件 是指由 express.Router对象来调用
// 需要一个Router实例
const express = require('express');
const app = express();
//得到一个router对象
const router = express.Router();
//在app中添加router中间件  在app应用上添加一个router中间件

router.get('/',function (req,res) {
   res.send("<h1>路由级别中间件</h1>>")
   //通过router对象实现路由的处理
});

// ，内置中间件
// 从 4.x 版本开始，, Express 已经不再依赖 Connect 了。除了 express.static, Express 以前内置的中间件现在已经全部单独作为模块安装使用了。
/*
* express.static负责托管静态资源的。 说直观一点，它就是用来载入静态资源的。
* */

// 静态资源代码
// 写代码载入上面的静态文件：
const express = require('express');
const path = require('path');

const app = express();

app.get('/',function (req,res) {
    res.sendFile(path.join(__dirname, 'index.html'))
});

app.listen(3000);
// 我们发现，css，img, js没有起作用。怎么办？
// 使用express.static解决：

const express = require('express');
const path = require("path");

const app = express();

//使用内置中间件express.static托管静态资源
app.use(express.static(path.join(__dirname,"public")));

app.get('/',function (req,res) {
    res.sendFile(path.join(__dirname, "index.html"))
})

app.listen(3000);
// 还是不行，为什么，对于图片,css，js它们的路径要相对于public:
// <img src="./public/imgs/1.jpg" alt> 这样不行

//应该是这样
//相对路径
// <img src="imgs/1.jpg" alt="">


// 6，第三方中间件
// 真正开发的时候，使用第三方中间件是最多的。
// 是别人已经开发好的，被证明是好用的。如body-parser，cookie-parse，express-session。
//
// 使用步骤：
// 1，安装
// 2，引入
// 3，app.use
// 4，调用相关方法

// （1）	原生的node获取表单提交的内容
// 在服务器端获取用户名和密码：
const express = require('express');
const path = require('path');
const querystring = require('querystring');

const app = express();

app.get("/login",function (req,res) {
    res.sendFile(path.join(__dirname, "16,表单.html"))
});

app.post("/login",function (req,res) {
    var str = "";
    req.on("data",function (chunk) {
        str += chunk;
    });
    req.on("end",function () {
        var obj = querystring.parse(str);
        console.log(obj);
    })
});

app.listen(3000);

// （2）	Express获取表单提交的内容
// 第三方中间件：body-parser介绍
// bodyParser中间件用来解析http请求体，解析客户端请求的body中的内容。是express默认使用的中间件之一。
// bodyParser.urlencoded则是用来解析我们通常的form表单提交的数据。
// 使用步骤：
// 1，安装
// 2，引入
// 3，app.use
// 4，调用相关方法

var express = require('express');
var app = express();
var path = require('path');
var router = express.Router();
var bodyParser = require('body-parser');

router.use(express.urlencode({extend:false}));
router.method('地址', 路由处理函数);

router.get('/index.html', function (req,res,next) {
    res.sendFile(path.resolve(__dirname, './03发送一个post请求.html'))
});

router.post('getUserInfo',function (req,res) {
    console.log(req.body);
    console.log(req.body);
});

router.post('/getMsg', function (req,res) {
    console.log(req.body);
    res.send(req.body);
});

app.use(router);
app.listen(3000);





//中间件的用法
/*
* 1.直接重写一遍
*  router.get('/地址',中间件处理函数)
*  router.get('/地址',路由处理函数)
*
* 2.router.get('/地址', '中间件处理函数', '路由处理函数')
*
* 3.直接router.use(['可以接地址，也可以不接']，中间件处理函数)
*  router.method('地址'，路由函数)
* */












































