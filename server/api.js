'use strict'
const api = require('express').Router()
const db = require('../db')
const { Student, Campus } = require('../db/models');

// If you aren't getting to this object, but rather the index.html (something with a joke) your path is wrong.
	// I know this because we automatically send index.html for all requests that don't make sense in our backend.
	// Ideally you would have something to handle this, so if you have time try that out!
api.get('/hello', (req, res) => res.send({hello: 'world'}))

// GET routes: /api/param

// Get all campuses
api.get('/campus', function(req, res, next) {
	Campus.findAll()
	.then(campuses => res.json(campuses))
	.catch(next);
});

// Get a particular campus
api.get('/campus/:campusId', function(req, res, next) {
  Campus.findById(req.params.campusId)
	.then(campus => res.json(campus))
	.catch(next);
});

// Get all students
api.get('/student', function(req, res, next) {
	Student.findAll()
	.then(students => res.json(students))
	.catch(next);
});

// Get a particular student
api.get('/student/:studentId', function(req, res, next) {
  Student.findById(req.params.studentId)
	.then(student => res.json(student))
	.catch(next);
});

// POST routes: /api/param

// Create new campus
api.post('/campus', function (req, res, next) {
	Campus.create(req.body)
	.then(campus => res.json(campus))
	.catch(next);

});

// Create new student
api.post('/student', function (req, res, next) {
	Student.create(req.body)
	.then(student => res.json(student))
	.catch(next);

});

// PUT routes: /api/param

// Update info for one campus
api.put('/campus/:campusId', function (req, res, next) {
  const campusId = req.params.campusId;

  Campus.findById(campusId)
		.then(campus => campus.update(req.body))
		.then(res.sendStatus(204))
    .catch(next);
});

// Update info for one student
api.put('/student/:studentId', function (req, res, next) {
  const studentId = req.params.studentId;

  Student.findById(studentId)
		.then(student => student.update(req.body))
		.then(student => res.json(student))
    .catch(next);
});

// DELETE routes: /api/param

// Delete a campus
api.delete('/campus/:campusId', function (req, res, next) {
  const id = req.params.campusId;

  Campus.destroy({ where: { id } })
    .then(() => res.status(204).end())
    .catch(next);
});

// Delete a student
api.delete('/student/:studentId', function (req, res, next) {
  const id = req.params.studentId;

  Student.destroy({ where: { id } })
    .then(() => res.status(204).end())
    .catch(next);
});


module.exports = api
