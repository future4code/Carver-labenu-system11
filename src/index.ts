import { changeTeacherClass } from './endpoints/changeTeacherClass/changeTeacherClass';
import { changeStudantClass } from './endpoints/changeStudantClass/changeStudantClass';
import { getStudant } from './endpoints/getStudant/getStudant';
import express, { Express, Request, Response } from "express";
import cors from "cors";
import { AddressInfo } from "net";
import { getClass } from "./endpoints/labeClass/getClass";
import { changeClass } from "./endpoints/labeClass/changeClass";
// import { StudentController } from "./controller/StudentController";
// import { ClassController } from "./controller/ClassController";
import { getTeachers } from "./endpoints/labeTeachers/getTeacher";

const app: Express = express();
app.use(express.json());
app.use(cors());

app.put('/teacher', changeTeacherClass)
app.put("/studant", changeStudantClass)
app.get("/studant/:class", getStudant)
app.get('/class', getClass)
app.put('/class', changeClass)
app.get('/teachers', getTeachers)

// const studentController = new StudentController()
// const classController = new ClassController()
// app.post('/class', classController.createClass)
// app.post('/student', studentController.createStudent)
// app.get('/student', studentController.getStudentByName)

const server = app.listen(process.env.PORT || 3003, () => {
 if (server) {
  const address = server.address() as AddressInfo;
  console.log(`Server is running in http://localhost: ${address.port}`);
 } else {
  console.error(`Failure upon starting server.`);
 }
});
