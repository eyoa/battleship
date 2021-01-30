const express = require('express');
const app = express();

const PORT = 3000;

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  const templateVars = {};
  res.render("index", templateVars);
});


app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});