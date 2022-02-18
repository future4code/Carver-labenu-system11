// import { Request, Response } from "express";
// import  StudentBussiness  from "../bussiness/StudentBussiness";
// // import { BaseDatabase } from "../connection/connection";

// export class StudentController {
//     async createStudent(req:Request, res:Response){
//         try{
//             const{name,email,birth_date,class_id} = req.body
//             await StudentBussiness.createStudent(name,email,birth_date,class_id)
//             res.status(200).send("Estudante criado com sucesso!")
//         }
//         catch(error:any){
//             res.status(error.statusCode || 400).send({ error: error.message });
//         }
//     }

//     async getStudentByName(req:Request, res:Response):Promise<any> {
//         try{
//             const search = req.query.search
//             const result = await StudentBussiness.getStudentByName(search)
//             res.status(200).send(result)
//         }
//         catch(error:any){
//             res.status(error.statusCode || 400).send({ error: error.message });   
//         }
//     }
// }
