import { estudant } from './../types/type';
import { Response, Request } from "express";

export const getEstudantes = async (req: Request, res: Response) => {
 try {
  const LabeClass = req.params.class

  if (!LabeClass) {
   throw new Error("Check the class")
  }
  


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