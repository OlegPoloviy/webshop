import { shopDTO } from "../DTO/shopDTO.js";

export class Shop{
    static async getAllProducts(){
        return await shopDTO.findAll()
    };

    static async getProduct(id){
        return await shopDTO.findAll({
            where:{id : id}
        });
    };
}