// import express, { Request, Response } from 'express';
// import { labeClass } from '../types';
// import { BaseDatabase } from '../connection/connection';

// export class StudentDatabase extends BaseDatabase {
//     private static TABLE_NAME = "labeSystem_estudants"
    
//     public async createStudent(name:string, email:string, birth_date:string, class_id:number):Promise<void> {
//         try{
//             await this.connection
//             .insert({
//                 name: name,
//                 email: email,
//                 birth_date: birth_date,
//                 class_id: class_id
//             })
//             .into(StudentDatabase.TABLE_NAME)
//         }
//         catch(error:any){
//             throw new Error(error.sqlMessage || error.message);
//         }
//     }

//     public async getStudentByName(search:any):Promise<any> {
//         try{
//             const result = await this.connection
//             .select('id','name')
//             .from(StudentDatabase.TABLE_NAME)
//             .whereILike('name', `%${search}%`)
//             return result;
//         }
//         catch(error:any){
//             throw new Error(error.sqlMessage || error.message);
//         }
//     }
// }
