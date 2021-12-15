var express = require('express');
var router = express.Router();
//db 불러옴
const db = require("../../config/db");
var router = express.Router();


//ctrl 받아오기
const ctrl = require("./home.ctrl");

//detail.ejs 출력
router.get('/detail', ctrl.output.detail);

//검색 시 search.ejs 출력
router.post('/search_post', function(req, res) {
    const keyword = req.body.keyword;
    const sql = "SELECT  Name, Price, SHOPBASKET.Desc, Location, Image FROM SHOPBASKET where Name = ?;"
    db.query(sql, [keyword], (err, result, fields) => {
        if (err) throw err;
        //res.send(result);
        //coonsole.log(result);
        if(JSON.stringify(result) === '[]'){
            res.render('search_no.ejs');//검색어 받아옴
            
        }
        else res.render('search.ejs', {'Name' : result[0].Name, 'Price' : result[0].Price, 'Desc' : result[0].Desc, 'Location' : result[0].Location, 'Image' : result[0].Image})//검색어 받아옴
    });
})

//check.ejs출력
router.get("/checklist", (req, res) => {
    const sql = "SELECT DISTINCT productName FROM CHECKLIST WHERE userID='yesong'";
    db.query(sql, (err, result, fields) => {
      if (err) throw err;
      //res.send(result);
      res.render('check.ejs',{'Name1' : result[0].productName, 'Name2' : result[1].productName, 'Name3' : result[2].productName, 'Name4' : result[3].productName})//검색어 받아옴
    });
});

module.exports = router;

