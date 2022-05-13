const express = require("express");
const app = express();
app.use(express.json());

const public = app.use(express.static(__dirname + "/public"));
let userArr = [];
let users;

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", (req, res) => {
  userArr.push(req.body[0]);
  console.log(userArr);
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running on port:${port}`);
});
