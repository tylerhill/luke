var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
  var dbinst = req.app.get('db');
  console.log(dbinst);
  var posts = [];
  dbinst.each('SELECT rowid, * FROM blog ORDER BY rowid DESC LIMIT 5', function(err,row) {
    posts.push({id: row.rowid, title: row.title, pBody: row.pBody});
  },function() {
    res.render('blog', {posts: posts});
  });
});

router.get('/:id', function(req,res,next) {
  var current = req.params.id;
  var dbinst = req.app.get('db');
  console.log(dbinst);
  var posts = [];
  dbinst.each('SELECT rowid, * FROM blog ORDER BY rowid DESC LIMIT 5', function(err,row) {
    posts.push({id: row.rowid, title: row.title, pBody: row.pBody});
  },function() {
    res.render('blog', {posts: posts, current: current});
  });

});


router.route('/admin')
  .get(function(req,res) {
    res.render('admin');
  })
  .post(function(req,res) {
    var dbinst = req.app.get('db');
    console.log(dbinst);
    var pBody = req.body.pBody;
    var title = req.body.title;
    dbinst.serialize(function() {
      dbinst.run('insert into blog values ((?),(?))',title,pBody);
    });
    res.render('admin');
  });



module.exports = router;
