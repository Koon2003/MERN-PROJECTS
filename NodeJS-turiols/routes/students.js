import express from "express";
import { studentcontroller } from "../controllers/index.js";

const router = express.Router();

router.get("/", studentcontroller.getAllStudents);

router.get("/:id", studentcontroller.getStudentById);
// res.send('GET detail student by id: '+req?.params?.id ?? '');

router.post("/insert", studentcontroller.insertStudent);
// res.send('POST insert Student');

// put or patch
router.patch("/patch", studentcontroller.updateStudent);
// res.send('PATCH insert Student');

export default router;
