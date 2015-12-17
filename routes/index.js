var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var dbinst = req.app.get('db');
  var newPost;
  dbinst.each('SELECT rowid, * FROM blog ORDER BY rowid DESC LIMIT 1', function(err,row) {
    newPost = {id: row.rowid, title: row.title, pBody: row.pBody};
  }, function() {
    console.log(newPost);
    res.render('index', { post: newPost });
  });
});

module.exports = router;
