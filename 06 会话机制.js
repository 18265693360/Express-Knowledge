// 会话机制是Web， 不是express的。
// http是一种无状态，无连接的通信协议，没有办法记录状态，这时候，会话机制就出来了。通常有两种形式：
// cookie
// session

// 场景
// http协议本身                           ->  普通用户
// cookie机制 所有的信息都保存在用户这一方    ->  会员卡
// session机制 所有的信息都保存在服务器这一方 ->  超级会员（刷脸）


// 2，Cookie
// cookie的英文意思：饼干; 小甜点
// cookie机制是由W3C提出，目前Cookie已经成为标准，所有浏览器都支持。