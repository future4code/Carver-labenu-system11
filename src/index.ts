import express, { Express, Request, Response } from "express";
import cors from "cors";
import { AddressInfo } from "net";
import { getClass } from "./endpoints/labeClass/getClass";
import { changeClass } from "./endpoints/labeClass/changeClass";
import { getTeachers } from "./endpoints/labeTeachers/getTeacher";

const app: Express = express();
app.use(express.json());
app.use(cors());




app.get('/class', getClass)
app.put('/class', changeClass)
app.get('/teachers', getTeachers)


const server = app.listen(process.env.PORT || 3003, () => {
 if (server) {
  const address = server.address() as AddressInfo;
  console.log(`Server is running in http://localhost: ${address.port}`);
 } else {
  console.error(`Failure upon starting server.`);
 }
});