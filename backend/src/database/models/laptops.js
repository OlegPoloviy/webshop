import { laptopDTO } from "../DTO/laptopsDTO.js";

export class Laptop{
    static async getAllLaptops(){
        return await laptopDTO.findAll();
    }

    static async getLaptop(id){
        return await laptopDTO.findAll({
            where:{id:id}
        })
    }
}