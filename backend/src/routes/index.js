import express from 'express'

import studentsRoutes from './student.routes.js'

const router = express.Router()

router.use('/cats', function(req,res) {
    res.send("Meow!")
})

router.use('/students', studentsRoutes)


export default router