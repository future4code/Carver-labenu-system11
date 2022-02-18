// import { BaseDatabase } from '../connection/connection';

// export class TeacherDatabase extends BaseDatabase {
//     private static TABLE_NAME = "labeSystem_teacher"
    
//     public async createTeacher(name:string, email:string, birth_date:string, class_id:number):Promise<void> {
//         try{
//             await this.getConnection()
//             .insert({
//                 name: name,
//                 email: email,
//                 birth_date: birth_date,
//                 class_id: class_id
//             })
//             .into(TeacherDatabase.TABLE_NAME)
//         }
//         catch(error:any){
//             throw new Error(error.sqlMessage || error.message);
//         }
//     }

//     public async getTeacherByName(search:any):Promise<any> {
//         try{
//             const result = await this.getConnection()
//             .select('id','name')
//             .from(TeacherDatabase.TABLE_NAME)
//             .whereILike('name', `%${search}%`)
//             return result;
//         }
//         catch(error:any){
//             throw new Error(error.sqlMessage || error.message);
//         }
//     }
// }