import { sequelize } from "../dbConnection.js";
import { DataTypes } from "sequelize";

export const laptopDTO = sequelize.define("laptops",{
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    model: {
        type: DataTypes.STRING,
        allowNull: false
    },
    processor : {
        type: DataTypes.STRING,
        allowNull: false
    },
    videocard: {
        type: DataTypes.STRING,
        allowNull: false
    },
    ram: {
        type: DataTypes.STRING
    },
    storage : {
        type: DataTypes.STRING,
    },
    display_size: {
        type: DataTypes.STRING
    },
    operating_system: {
        type: DataTypes.STRING
    },
    price: {
        type: DataTypes.DECIMAL,
        allowNull: false
    }
},{timestamps: false});