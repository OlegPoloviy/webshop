import { shopDTO } from "../DTO/shopDTO.js";

export class Shop{
    static async getAllProducts(){
        return await shopDTO.findAll()
    }
}