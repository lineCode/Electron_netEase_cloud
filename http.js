var express = require('express');
var path = require('path')
var app = express();

// 静态资源中间件
app.use(express.static(path.join(__dirname, './')))

// 设置渲染模板
app.set('views', path.join(__dirname, './'))

// 设置模板引擎
app.set('view engine', 'html')

app.get('/?',function (req,res) {
    res.render('index')
    // res.end("nihao")
})


var server = app.listen(5000,function(){
    console.log('server start at localhost:5000')
    
})