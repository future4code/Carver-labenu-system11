import { findEstudants } from './../../service/findEstudants';
import { findIdClass } from './../../service/findIdClass';
import { estudant } from '../../types';
import { Response, Request } from "express";

export const getEstudant = async (req: Request, res: Response) => {
 try {
  const labeClass = req.params.class
  let idClass
  let estudants

  if (!labeClass) {
   throw new Error("Check the class")
  }
  idClass = await findIdClass(labeClass)
  estudants = await findEstudants(idClass)


  res.send({ result:estudants})

 } catch (error: any) {
  switch (error) {
   case "Check the class":
    res.status(404)
    break
   default:
    res.status(500)
  }
  res.send({ message: error.message })
 }
} 