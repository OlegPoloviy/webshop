    import { userDTO } from "../DTO/userDTO.js";
    import bcrypt from "bcrypt"

    export class Users{
        static async createUser(data){
            const {name,surname,email,password} = data.data;
            
            const salt = bcrypt.genSaltSync(10);
            const hashed = bcrypt.hashSync(password,salt);

            return await userDTO.create({
                name: name,
                surname: surname,
                email: email,
                password: hashed
            },
            {
                fields:["name","surname","email","password"]
            }
            );
        }
    }