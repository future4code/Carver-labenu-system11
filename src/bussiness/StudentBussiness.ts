// import { StudentDatabase } from "../data/StudentData";

// class StudentBussiness {

//     async createStudent(name:string, email:string, birth_date:string, class_id:number):Promise<void> {
//         if(!name){
//             throw new Error('Nome não informado')
//         }
//         if(!email){
//             throw new Error('Email não informado')
//         }
//         if(!birth_date){
//             throw new Error('Data de nascimento não informado')
//         }
//         if(!class_id){
//             throw new Error('Classe não informada')
//         }
//         const studentDataBase = new StudentDatabase()
//         await studentDataBase.createStudent(name,email,birth_date,class_id)
//     }

//     async getStudentByName(search:any):Promise<any> {
//         if(!search){
//             throw new Error('Nome para pesquisa não informado')
//         }
        
//         const studentDataBase = new StudentDatabase()
//         const result = await studentDataBase.getStudentByName(search)
//         if (!result[0]) {
//             throw new Error(`Nenhum estudante encontrado`)
//         }
//         return result;
//     }
// }

// export default new StudentBussiness()