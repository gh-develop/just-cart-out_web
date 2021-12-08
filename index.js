/* 설치한 express 모듈 불러오기 */

const express = require("express");

/* express 객체 생성 */
const app = express();

app.use("/img", express.static("./static/img"));

const indexRouter = require("./routes"); // ./routes/inex.js = ./routes와 같다 -> 생략이 가능
const userRouter = require("./routes/user"); // ./routes/user.js = ./routes/user와 같다 -> .js생략 가능

app.use("/", indexRouter); // main(경로 /)으로 들어오면 인덱스라우터로 연결
app.use("/users", userRouter); // users경로로 들어오면 유저라우터로 연결

app.use((req, res, next) => {
  res.status(404).send("404 ERROR");
});
app.listen(8080, () => console.log("listening on port 8080"));
