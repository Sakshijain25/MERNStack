import express from "express";
import {getStudent, createStudent} from '../controllers/student.js'
import student from "../models/student.js";

const router = express.Router();
router.get('/', getStudent);
router.post('/', createStudent);

// export const router2 = express.Router()
// router.get('/', (req, res)=> {
//     res.send("Router is working.");
// });
// router.get("/:universalURL", (req, res) => {
//     res.send("404 URL NOT FOUND");
// });
export default router;
