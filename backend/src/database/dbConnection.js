import { Sequelize } from "sequelize";

export const sequelize = new Sequelize(
    'webshop','postgres','07092006',{
        dialect:'postgres',
        host:'localhost',
        port:"5433"
    }
)