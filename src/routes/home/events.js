/* 설치한 express 모듈 불러오기 */
const express = require("express");

/* Node.js 기본 내장 모듈 불러오기 */
const fs = require("fs");

/* express 객체 생성 */
const router = express.Router();

// //ctrl 받아오기
// const ctrl = require("./home.ctrl");

// router.get("/1", ctrl.output.event1);

// router.get("/1", (req, res) => {
//   res.render("main");
// });

router.get("/1", function (request, response) {
  fs.readFile("./static/event1.html", function (err, data) {
    if (err) {
      response.send("에러");
    } else {
      response.writeHead(200, { "Content-Type": "text/html" });
      response.write(data);
      response.end();
    }
  });
});

router.get("/2", function (request, response) {
  fs.readFile("./static/event2.html", function (err, data) {
    if (err) {
      response.send("에러");
    } else {
      response.writeHead(200, { "Content-Type": "text/html" });
      response.write(data);
      response.end();
    }
  });
});

router.get("/3", function (request, response) {
  fs.readFile("./static/event3.html", function (err, data) {
    if (err) {
      response.send("에러");
    } else {
      response.writeHead(200, { "Content-Type": "text/html" });
      response.write(data);
      response.end();
    }
  });
});

module.exports = router;
