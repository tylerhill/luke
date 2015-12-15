var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
  var posts = req.app.locals.posts;
  console.log(posts);
  res.render('blog', {posts: posts});
});


router.route('/admin')
  .get(function(req,res) {
    res.render('admin');
  })
  .post(function(req,res) {
    var dbinst = req.app.get('db');
    console.log(dbinst);
    var pBody = req.body.pBody;
    dbinst.serialize(function() {
      dbinst.run('insert into blog values (?)',pBody);
    });
    res.render('admin');
  });



module.exports = router;
