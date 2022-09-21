const express = require("express");
const https = require("https");
const app = express();
app.get("/", function (req, res) {
    res.send("hello world");
});
https.createServer(app);
const PORT = 3000;
const port = process.env.PORT || PORT;
app.listen(port);
console.log(`Running on ${PORT}`);
