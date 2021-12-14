const { response } = require("express");
var express = require("express");
//db 불러옴
const db = require("../../config/db");
var router = express.Router();

router.get("/fruit", (req, res) => {
  const sql = "SELECT * FROM SHOPBASKET WHERE Category='fruit'";
  db.query(sql, (err, result, fields) => {
    if (err) throw err;
    res.send(result);
  });
});

router.get("/vegetable", (req, res) => {
  const sql = "SELECT * FROM SHOPBASKET WHERE Category='vegetable'";
  db.query(sql, (err, result, fields) => {
    if (err) throw err;
    res.send(result);
  });
});

router.get("/meat", (req, res) => {
  const sql = "SELECT * FROM SHOPBASKET WHERE Category='meat'";
  db.query(sql, (err, result, fields) => {
    if (err) throw err;
    res.send(result);
  });
});

router.get("/fish", (req, res) => {
  const sql = "SELECT * FROM SHOPBASKET WHERE Category='fish'";
  db.query(sql, (err, result, fields) => {
    if (err) throw err;
    res.send(result);
  });
});

router.get("/drink", (req, res) => {
  const sql = "SELECT * FROM SHOPBASKET WHERE Category='drink'";
  db.query(sql, (err, result, fields) => {
    if (err) throw err;
    res.send(result);
  });
});

router.get("/snack", (req, res) => {
  const sql = "SELECT * FROM SHOPBASKET WHERE Category='snack'";
  db.query(sql, (err, result, fields) => {
    if (err) throw err;
    res.send(result);
  });
});

router.get("/frozen", (req, res) => {
  const sql = "SELECT * FROM SHOPBASKET WHERE Category='frozen'";
  db.query(sql, (err, result, fields) => {
    if (err) throw err;
    res.send(result);
  });
});

router.get("/instant", (req, res) => {
  const sql = "SELECT * FROM SHOPBASKET WHERE Category='instant'";
  db.query(sql, (err, result, fields) => {
    if (err) throw err;
    res.send(result);
  });
});

module.exports = router;
