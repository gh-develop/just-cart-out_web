var express = require('express');
var router = express.Router();
// //db 불러옴
// const db = require("../../config/db");
// var router = express.Router();


//ctrl 받아오기
const ctrl = require("./home.ctrl");

router.get('/detail', ctrl.output.detail);
router.post('/detail', ctrl.process.detail);
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

