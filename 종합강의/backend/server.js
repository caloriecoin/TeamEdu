const express = require("express");
const app = express();
const cors = require("cors");
app.use(express.json());

app.use(
  cors({
    origin: "*",
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
  })
);

app.get("/yeonji", function (req, res) {
  res.json({
    name: "김연지",
    age: 21,
    years: 2002,
  });
});

app.get("/ceo", function (req, res) {
  res.send({
    name: "백광일",
    age: 32,
    years: 1991,
  });
});

app.listen(
  5000,
  console.log(`http://192.168.0.31:5000 에서 내컴퓨터 서버 실행중~~~~`)
);
