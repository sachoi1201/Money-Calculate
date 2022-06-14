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

let userNumber = 0;
app.post("/user", (req, res) => {
  userNumber = req.body.number;
  console.log(userNumber);
});

app.get("/getUser", (req, res) => {
  res.json({ userNumber: userNumber });
});
