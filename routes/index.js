/* 설치한 express 모듈 불러오기 */
const express = require("express");

/* Node.js 기본 내장 모듈 불러오기 */
const fs = require("fs");

/* express 객체 생성 */
const router = express.Router();

router.get("/", function (request, response) {
  fs.readFile("./static/main.html", function (err, data) {
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
