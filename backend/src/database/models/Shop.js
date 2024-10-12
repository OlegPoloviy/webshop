import { shopDTO } from "../DTO/shopDTO.js";
import { sequelize } from "../dbConnection.js";
import { smarphoneAboutDTO } from "../DTO/smarthoneDescriptionDTO.js";      

export class Shop {
    static async getAllProducts() {
        return await shopDTO.findAll({
            attributes: ['id', 'title', 'type', 'price', 'path_to_img'],
            order: [['id', 'DESC']],
            limit: 8
        });
    };

    static async getProduct(id) {
        return await shopDTO.findAll({
            attributes: { exclude: ['description']},
            where: { id: id },
            include: [{
                model: smarphoneAboutDTO,
                as: 'smarphones_about'
            }]
        });
    };

}   