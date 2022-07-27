const express = require("express");

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});
const hello = "12312";
app.listen(port, () => {
  console.log(`Example app listenisng on1 p21ort ${port}`);
});
