const express = require('express');
const router = express.Router();
const TeacherController = require('../controllers/teachersController');

// Login
router.post('/login', TeacherController.Login);

// Logout
router.post('/logout', TeacherController.Logout);

// Create/Insert
router.post('/createTeacher', TeacherController.createTeacher);

// View/Find
router.post('/findTeacher', TeacherController.findTeacher);

// Update
router.post('/updateTeacher', TeacherController.updateTeacher);

// Remove/Delete
router.post('/deleteTeacher', TeacherController.deleteTeacher);

module.exports = router;