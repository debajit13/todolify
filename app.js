const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");
const app = express();

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/public"));

const list = [];
const workList = [];

// If request get from root route
app.get("/", function (req, res) {
  const today = date.getDate();
  res.render("list", { listTitle: today, newList: list });
});

// If request get from the work route
app.get("/work", function (req, res) {
  res.render("list", { listTitle: "Work", newList: workList });
});

//redirect to root or work route based on the request
app.post("/", function (req, res) {
  const newItem = req.body.newItem;
  if (req.body.list === "Work") {
    workList.push(newItem);
    res.redirect("/work");
  } else {
    list.push(newItem);
    res.redirect("/");
  }
});

app.listen(3000, function () {
  console.log("Server running at port 3000");
});
