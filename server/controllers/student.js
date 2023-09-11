import StudentData from "../models/student.js";
export const getStudent = async (req, res)=> {
   try {
     const allStudents = await StudentData.find();
     res.status(200).json(allStudents);
   } catch (error) {
        res.status(404).json({message:error.message})
   }
}
export const createStudent = async (req, res)=> {
    const student = req.body;
    const newStudent = new StudentData(student);

    try {
        await newStudent.save(student);
        res.status(201).json(newStudent);
    } catch (error) {
        res.status(409).json({message:error.message});
    }
    // StudentData.create(student
    //     ).then((ans) => {
    //     console.log("Document inserted")
    //   }).catch((err) => {
    //     console.log(err.Message);
    //   })
}