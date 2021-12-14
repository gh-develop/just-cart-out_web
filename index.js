/* 설치한 express 모듈 불러오기 */
const express = require("express");
// parsing가능
const bodyParser = require("body-parser");

// 환경변수 관리
// 환경 변수를 파일에 저장
const dotenv = require("dotenv");
dotenv.config();

/* express 객체 생성 */
const app = express();
const port = 3000;

// router설정
const goodsRouter = require("./src/routes/home/goods"); //goods.js 파일에 있는 라우터들을 가져옴
const userRouter = require("./src/routes/home/user"); //user.js 파일에 있는 라우터들을 가져옴
const eventRouter = require("./src/routes/home/events"); // ./src/routes/home/events.js = ./src/routes/home/events와 같다 -> .js생략 가능
const categoryRouter = require("./src/routes/home/category");
//POST나 PUT으로 받을 때 안에 body데이터 쓸 수 있게 하는 미들웨어
//app.use(express.urlencoded({extended: false}))
//app.use(express.json())
//app.use(express.static('public')); //사진, 동영상 등 정적파일 불러오기
/*
app.use((req, res, next) => { //middleware: 요청이 라우터에 들어오기 전에 req를 체크
  console.log(req);
  next();//미들웨어 종료
});
*/

//////템플릿 엔진 ejs 사용하기
// ejs: embeded java scripts 자바스크립트가 내장된 html
// ejs파일들의 경로를 /src/views로 지정
app.set("views", __dirname + "/src/views");
// 엔진을 ejs로 지정
app.set("view engine", "ejs");

// js 파일로 연결할 수 있게 해주는 미들웨어
app.use("/img", express.static(`${__dirname}/src/public/img`));
app.use(express.static(`${__dirname}/src/public`));

//bodyParser 미들웨어 등록
app.use(bodyParser.json());

//URL을 통해 전달되는 데이터에 한글, 공백 등과 같은 문자가 포함될 경우 제대로 인식되지 않는 문제 해결
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/goods", goodsRouter);
app.use("/user", userRouter);
app.use("/events", eventRouter); // events경로로 들어오면 이벤트라우터로 연결
app.use("/category", categoryRouter);

// main.ejs 렌더링
app.get("/", (req, res) => {
  res.render("main");
});

// 제일 마지막에 와야함 404에러 처리
app.use((req, res, next) => {
  res.status(404).send("404 ERROR");
});

//////router: 각각의 주소가 들어왔을 때 어떤 것을 응답해줄지를 설정
/*
app.get('/hi', (req, res) => { //GET: 일반 브라우저에서 요청하는 행위
    res.send('Hi. This is express router')
  })

app.get('/', (req, res) => {
  res.send('Hello World! <a href="/hi">Say Hi!</a>') //Say Hi! 링크 누르면 /hi 로 이동
})
*/

app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`);
});

// app.use("/img", express.static("./static/img"));

// const indexRouter = require("./routes"); // ./routes/index.js = ./routes와 같다 -> 생략이 가능
// const eventRouter = require("./src/routes/home/events"); // ./routes/event.js = ./routes/event와 같다 -> .js생략 가능

// app.use("/", indexRouter); // main(경로 /)으로 들어오면 인덱스라우터로 연결
// app.use("/events", eventRouter); // events경로로 들어오면 이벤트라우터로 연결

// app.use((req, res, next) => {
//   res.status(404).send("404 ERROR");
// });
// app.listen(8080, () => console.log("listening on port 8080"));
