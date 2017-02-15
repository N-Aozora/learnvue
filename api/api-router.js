var express = require('express')

//加载模拟数据
var mockdata = require('../api/mock.js')

var apiRoutes = express.Router()

Object.keys(mockdata).forEach(function (url, index) {
  apiRoutes.all(url, function(req, res){
    console.log(url)
    res.send(mockdata[url])
  })
})

module.exports = apiRoutes
