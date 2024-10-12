import { sequelize } from "../dbConnection.js";
import { DataTypes } from "sequelize";
import { smarphoneAboutDTO } from "./smarthoneDescriptionDTO.js";

export const shopDTO = sequelize.define("products", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    title: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    type: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    price: {
        type: DataTypes.DECIMAL,
        allowNull: false
    },
    path_to_img: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'smartphones_about', 
            key: 'id'                  
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
    }
}, { timestamps: false });

shopDTO.belongsTo(smarphoneAboutDTO, { foreignKey: 'description', as: 'smarphones_about' });