const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();
app.use(cors());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "signup",
});

app.get("/api/users", (req, res) => {
  db.query("SELECT * FROM LoginScreen", (err, results) => {
    if (err) {
      console.log(err);
      res.status(500).send(err);
    } else {
      res.status(200).send(results);
    }
  });
});

app.listen(3306, () => {
  console.log("running server");
});
