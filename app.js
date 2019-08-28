const express=require("express");
const userRouter=require("./routes/user.js");
//创建服务器
var app=express();
//设置监听端口
app.listen(8080);
//导入第三方中间件
const bodyParser=require('body-parser');

//托管静态文件到public
app.use(express.static('./public'));
//使用bodyParser将post请求过滤成对象
app.use(bodyParser.urlencoded({
extended:false
}));

app.use('/user',userRouter);