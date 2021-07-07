const exec = require("child_process").exec;
const express = require("express");
const cors = require("cors");

const app = express();
const port = 3000;

app.use(cors());

app.get("/generate-json", (req, res) => {
  try {
    exec("python3 bin/prepare-json.py", (error, stdout, stderr) => {
      const file = require("./public/cv.json");
      res.set("Access-Control-Allow-Origin", "*");
      res.json(file);
    });
  } catch (error) {
    console.error(error);
  }
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
