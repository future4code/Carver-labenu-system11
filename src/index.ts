import { getEstudantes } from './endpoint/getEstudantes';
import express, { Express, Request, Response } from "express";
import cors from "cors";
import { AddressInfo } from "net";
import { getClass } from "./endpoints/labeClass/getClass";
import { changeClass } from "./endpoints/labeClass/changeClass";


const app: Express = express();
app.use(express.json());
app.use(cors());

const server = app.listen(process.env.PORT || 3003, () => {
 if (server) {
  const address = server.address() as AddressInfo;
  console.log(`Server is running in http://localhost: ${address.port}`);
 } else {
  console.error(`Failure upon starting server.`);
 }
});

app.get("/estundant/:class", getEstudantes)
app.get('/class', getClass)
app.put('/class', changeClass)