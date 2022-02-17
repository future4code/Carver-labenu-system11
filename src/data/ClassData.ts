// import { BaseDatabase } from "../connection/connection";

// export class ClassDatabase extends BaseDatabase {
//     private static TABLE_NAME = "labeSystem_class"
    
//     public async createClass(name:string, module:string):Promise<void> {
//         try{
//             await this.connection
//             .insert({
//                 name: name,
//                 module: module
//             })
//             .into(ClassDatabase.TABLE_NAME)
//         }
//         catch(error:any){
//             throw new Error(error.sqlMessage || error.message);
//         }
//     }
// }
