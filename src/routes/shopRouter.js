import { Router } from "express";
import { Shop } from "../database/models/Shop.js";

export const shopRouter = Router();

shopRouter.get("/", async (req,res) => {
    try{
        const products = await Shop.getAllProducts();
        res.send(products);
    }catch(err){
        res.json(err).sendStatus(500);
    }
})