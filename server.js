const fs = require("fs");
const https = require("https");
const exec = require("child_process").exec;
const express = require("express");

require("dotenv").config();

const app = express();
const port = process.env.PORT;

if (process.env.NODE_ENV === "production") {
  const key = fs.readFileSync(process.env.PATH_TO_SSL_PRIVATE_KEY);
  const cert = fs.readFileSync(process.env.PATH_TO_SSL_CERTIFICATE);

  https.createServer({ key, cert }, app).listen(port, () => {
    console.log(`Production app listening at https://localhost:${port}`);
  });
} else {
  // TODO: Fix CORS problems for localhost
  app.listen(port, () => {
    console.log(`Development app listening at http://localhost:${port}`);
  });
}

// Routes
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
