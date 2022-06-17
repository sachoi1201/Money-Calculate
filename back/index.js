const express = require("express");
const app = express();
const cors = require("cors");
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(express.json());

app.listen(8080, function () {
  console.log("listening on 8080");
});

function Calculate() {}
let userNumber = 0;
let userInfoName;
let userInfoPrice;
let result;
app.post("/user", (req, res) => {
  userNumber = req.body.number;
  console.log(userNumber);
});

app.get("/getUser", (req, res) => {
  res.json({ userNumber: userNumber });
});

app.post("/getInfo", (req, res) => {
  userInfoName = req.body.name;
  userInfoPrice = req.body.price;
  console.log(userInfoName);
  console.log(userInfoPrice);
  Calculate();
});

app.get("/getResult", (req, res) => {
  res.json({ result: result });
});
