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

export const getStudent = async (req, res) => {
    try{
        const students = await Student.findOne({studentNumber:req.params.id})
        res.status(200).send(students)
    } catch(err) {
        res.status(400).send(err)
    }
}

export const getStudents = async (req, res) => {
    try{
        const students =await Student.find({})
        res.status(200).send(students)
    } catch(err) {
        res.status(400).send(err)
    }
}

export const updateStudent = async (req, res) => {
    try{
        const students = await Student.findOne({studentNumber:req.params.id})
        const response = await students.updateOne({$set: req.body})
        res.status(200).send(response)
    } catch (err) {
        res.status(400).send(err)
    }   
}

export const deleteStudent = async (req, res) => {
    try{
        const students = await Student.deleteOne({studentNumber:req.params.id})
        res.status(200).send(students)
    } catch (err) {
        res.status(400).send(err)
    }   
}

