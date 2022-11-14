const express = require("express");
const app = express();
const path = require("path");
const redditData = require("./data.json");

app.set(`view engine`, `ejs `);
app.set(`views`, path.join(__dirname, `/views`));

// We use res.render from (Expressjs.com) to bind the ejs file to index.js
//↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓

app.get(`/`, (req, res) => {
  res.render("home.ejs");
});
// FOR WRITING JS CODE IN .ejs FILE; WE USE  <%= %>

// FOR WRITING JS CODE IN .ejs FILE; WE USE  <% %> and in this
// case IT'S NOT GOING TO BE ADDED INTO ACTUAL TEMPLATE ITSELF

// We Should write ".ejs" after the file we rendered it.

// We should write second parameters of res.render() in {} to work.

app.get("/r/:subreddit", (req, res) => {
  const { subreddit } = req.params;
  const data = redditData[subreddit];
  if (data) {
    res.render("subreddit.ejs", { ...data });
  } else {
    res.render("notFound.ejs", { subreddit });
  }
});

app.get("/cats", (req, res) => {
  const cats = ["Babby", "Amy", `Jacy`, `Jordy`, `Stephanie`, `Caliburn`];
  res.render("cats.ejs", { cats });
});

app.get("/rand", (req, res) => {
  var num = Math.floor(Math.random() * 10) + 1;
  var page = Math.floor(Math.random() * 100) + 1;
  res.render("random.ejs", { rand: num, page });
});

app.listen(8080, () => {
  console.log("LISTENING ON PORT 8080");
});
