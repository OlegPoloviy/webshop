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
});

shopRouter.get("/:id", async (req,res) => {
    const id = req.params.id;
    try{
        const product = await Shop.getProduct(id);
        res.send(product);
    }catch(err){
        res.json(err).sendStatus(500);
    }
});