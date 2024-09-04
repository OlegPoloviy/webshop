import { sequelize } from "../dbConnection.js";
import { DataTypes } from "sequelize";

export const shopDTO = sequelize.define("products",{
    id : {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    title: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    type: {
        type : DataTypes.STRING(255),
        allowNull: false
    },
    price: {
        type : DataTypes.DECIMAL,
        allowNull:false
    }
},{timestamps:false});