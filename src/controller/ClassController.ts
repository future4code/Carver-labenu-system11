// import { Request, Response } from "express";
// import ClassBussiness from "../bussiness/ClassBussiness";
// import StudentBussiness from "../bussiness/StudentBussiness";
// // import { BaseDatabase } from "../connection/connection";

// export class ClassController{
//     async createClass(req:Request, res:Response){
//         try{
//             const{name,module} = req.body
//             await ClassBussiness.createClass(name,module)
//             res.status(200).send("Classe criada com sucesso!")
//         }
//         catch(error:any){
//             res.status(error.statusCode || 400).send({ error: error.message });
//         }
//     }
// }