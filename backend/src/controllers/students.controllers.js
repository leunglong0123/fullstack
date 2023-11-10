import Student from "../models/students.model.js";

export const addStudent = async (req, res) => {
    try {
        const newStudent = new Student(req.body)
        await newStudent.save()
        res.status(201).send(newStudent)
    } catch(err) {
        res.status(400).send(err)
    }
}

export const getStudents = async (req, res) => {
    
}
