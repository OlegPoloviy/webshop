    import { sequelize } from "../dbConnection.js";
    import { DataTypes } from "sequelize";

    export const smarphoneAboutDTO = sequelize.define("smarphones_about",{
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        brand: {
            type: DataTypes.STRING,
            allowNull: false
        },
        display: {
            type: DataTypes.STRING,
            allowNull: false
        },
        size: {
            type: DataTypes.STRING,
            allowNull: false
        },
        color: {
            type: DataTypes.STRING,
            allowNull: false
        },
        processor: {
            type: DataTypes.STRING,
            allowNull: false
        },
        memory: {
            type: DataTypes.STRING,
            allowNull: false
        },
        ram: {
            type: DataTypes.STRING,
            allowNull: false
        },
        battery: {
            type: DataTypes.STRING,
            allowNull: false
        },
        camera: {
            type: DataTypes.STRING,
            allowNull: false
        },
        sim_card_count: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        image2: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        image3: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        image4: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
    },{timestamps: false,freezeTableName: true});