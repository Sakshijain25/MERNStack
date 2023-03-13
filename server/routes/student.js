import express from "express";
import {getStudent} from '../controllers/student.js'

const router = express.Router();
router.get('/', getStudent);

// export const router2 = express.Router()
// router2.get('/', (req, res)=> {
//     res.send("Router is working.");
// });
// router.get("/:universalURL", (req, res) => {
//     res.send("404 URL NOT FOUND");
// });
export default router;
