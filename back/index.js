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

function Calculate() {
  console.log(1);
  for (let i = 0; i < userNumber; i++) {
    user.push(userInfoName[i]);
  }
  let sum = 0;
  for (let i = 0; i < userNumber; i++) {
    sum += Number(userInfoPrice[i]);
  }
  const average = Math.floor(sum / userNumber);
  let haveToGive = [];
  for (let i = 0; i < userNumber; i++) {
    let differ = Number(userInfoPrice[i]) - average;
    haveToGive.push(differ);
  }
  for (let i = 0; i < userNumber - 1; i++) {
    if (haveToGive[i] === 0) {
      continue;
    }
    let give;
    if (haveToGive[i] < 0) {
      give = 0; // user i가 받아야 한다
    } else {
      give = 1; // user i가 줘야 한다
    }
    for (let j = i + 1; j < userNumber; j++) {
      if (haveToGive[i] === 0) {
        break;
      }
      if (give === 0) {
        // 받아야 할 때
        if (haveToGive[j] > 0) {
          //i가 받고 j가 줄때
          if (haveToGive[j] >= Math.abs(haveToGive[i])) {
            //j가 줘야하는 값이 i가 받아야 하는 값보다 크거나 같을 때
            haveToGive[j] = haveToGive[j] + haveToGive[i];
            userToUser[i][j] = Math.abs(haveToGive[i]);
            haveToGive[i] = 0;
            break;
          } else {
            //j가 줘야하는 값이 i가 받아야 하는 값보다 작을 때
            haveToGive[i] = haveToGive[i] + haveToGive[j];
            userToUser[i][j] = haveToGive[j];
            haveToGive[j] = 0;
          }
        }
      } else {
        // 줘야 할 때
        if (haveToGive[j] < 0) {
          //i가 주고 j가 받을때
          if (Math.abs(haveToGive[j]) <= haveToGive[i]) {
            //i가 줘야하는 값이 j가 받아야 하는 값보다 크거나 같을 때
            haveToGive[i] = haveToGive[i] + haveToGive[j];
            userToUser[j][i] = Math.abs(haveToGive[j]);
            haveToGive[j] = 0;
          } else {
            //i가 줘야하는 값이 j가 받아야 하는 값보다 작을 때
            haveToGive[j] = haveToGive[j] + haveToGive[i];
            userToUser[j][i] = haveToGive[i];
            haveToGive[i] = 0;
            break;
          }
        }
      }
    }
  }
  console.log(userToUser);
}
let userNumber = 0;
let userInfoName;
let userInfoPrice;
let userToUser = [
  ["", "", "", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", "", "", ""],
];
let user = [];
let userPrice = [];
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
  Calculate();
});

app.get("/getResult", (req, res) => {
  res.json({
    user: user,
    userPrice: userPrice,
    userNumber: userNumber,
    userToUser: userToUser,
  });
});
