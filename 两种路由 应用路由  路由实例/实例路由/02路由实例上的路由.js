var express = require('express');
var app = express();
var path = require('path');
var router = express.Router();

router.get('/index.html', function (req,res) {
    //resolve 可以识别 ../
    res.sendFile(path.resolve(__dirname, './02index.html'))
})

//提交信息 查询字符串呈现在地址栏
router.get('/getUserInfo', function (req,res) {
    res.send(req.query)
})


//中间件
app.use(router);

app.listen(3000);