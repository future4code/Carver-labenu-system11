import express, { Express, Request, Response } from "express";
import cors from "cors";
import { AddressInfo } from "net";
import { getClass } from "./endpoints/labeClass/getClass";
import { changeClass } from "./endpoints/labeClass/changeClass";
// import { StudentController } from "./controller/StudentController";
// import { ClassController } from "./controller/ClassController";
// import { TeacherController } from "./controller/TeacherController";

const app: Express = express();
app.use(express.json());
app.use(cors());


app.get('/class', getClass)
app.put('/class', changeClass)

// const studentController = new StudentController()
// const classController = new ClassController()
// const teacherController = new TeacherController()
// app.post('/class', classController.createClass)
// app.post('/student', studentController.createStudent)
// app.get('/student', studentController.getStudentByName)
// app.post('/teacher', teacherController.createTeacher)
// app.get('/teacher', teacherController.getTeacherByName)


const server = app.listen(process.env.PORT || 3003, () => {
 if (server) {
  const address = server.address() as AddressInfo;
  console.log(`Server is running in http://localhost: ${address.port}`);
 } else {
  console.error(`Failure upon starting server.`);
 }
});
