let express = require('express');
let router = express.Router();
// let spider = require('./spider')
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
// router.get('/spider', spider);
router.get('/product', function(req, res, next) {
  // console.log(req.query.id)
  var data={
    code:0,
    data:{name:'aaa',pwd:'123'},
    isSuccess:true,
    msg:"请求成功"
  }
  res.json(data);
});
module.exports = router;
