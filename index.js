const express = require("express");
const app = express();
const port = 3000;

// static files
app.use(express.static("static"));

// pug setup
app.set("view engine", "pug");

// express localhost port
app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});


