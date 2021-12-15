var express = require('express');
var router = express.Router();
//db 불러옴
const db = require("../../config/db");
var router = express.Router();


//ctrl 받아오기
const ctrl = require("./home.ctrl");

router.get('/detail', ctrl.output.detail);
//router.post('/detail', ctrl.process.detail);

// router.post('/email_post', function(req, res) {
//     res.render('email.ejs', {'email' : req.body.email})
// })

router.post('/search_post', function(req, res) {
    const keyword = req.body.keyword;
    const sql = "SELECT  Name, Price, SHOPBASKET.Desc, Location, Image FROM SHOPBASKET where Name = ?;"
    db.query(sql, [keyword], (err, result, fields) => {
        if (err) throw err;
        //res.send(result);
        //console.log(result);

        res.render('search.ejs', {'Name' : result[0].Name, 'Price' : result[0].Price, 'Desc' : result[0].Desc, 'Location' : result[0].Location, 'Image' : result[0].Image})//검색어 받아옴
    });
})


//router.get('/test', ctrl.output.test);

// router.get("/search", (req, res) => {
//     //var query = sanitize(url.parse(request.url, true).query.query);
//     const sql = "SELECT  Name, Price, SHOPBASKET.Desc, Location, Image FROM SHOPBASKET where Name = '카레'";
//     db.query(sql,(err, result, fields) => {
//       if (err) throw err;
//       res.send(result);
//     });
// });

module.exports = router;

