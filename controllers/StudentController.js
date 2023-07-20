const express = require("express");
const controller = express.Router();
const data = require("../data/studentData.json");

// get all students
controller.get("/", (req, res) => {
  // send all students as JSON
  res.json({ data });
});

// get student by id

controller.get("/:id", (req, res) => {
  const { id } = req.params;

  const individualStudent = data.students.filter(
    (student) => Number(student.id) === Number(id)
  );
  res.json({ individualStudent });
});

// TODO:
// if id is not a number, send a response with status 500 telling the user the id must be a number
// if it is a number but there is no student with that id, tell the user and set status to 500

module.exports = controller;
