import express from 'express'

import { addStudent,getStudent,updateStudent,getStudents, deleteStudent } from '../controllers/students.controllers.js'

const router = express.Router()

// this is === /students
router.get('/', getStudents) //GET all students
router.post('/', addStudent) // ADD a new student
router.get('/:id', getStudent) // GET a single student by id
router.put('/:id', updateStudent) // UPDATE a student
router.delete('/:id',deleteStudent) // DElETE a student


export default router