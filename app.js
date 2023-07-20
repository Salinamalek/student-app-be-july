const express = require("express");

const app = express();

const studentController = require("./controllers/StudentController.js");

// handle a get request at '/test' that responds with an object like this
// {
//     test: 'success',
//     time: '1pm'
// }

// app.get("/test", (req, res) => {
//   res.json({ test: "success", time: "1pm" });
// });

app.use("/students", studentController);

app.get("/", (req, res) => {
  res.send("Hello world!");
});

// app.get("/students", (req, res) => {
//   res.json({});
// });

module.exports = app;
