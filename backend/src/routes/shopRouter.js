import { Router } from "express";
import { Shop } from "../database/models/Shop.js";

export const shopRouter = Router();

shopRouter.get("/", async (req, res) => {
    try {
        const products = await Shop.getAllProducts();
        res.send(products);
    } catch (err) {
        console.error(err); 
        res.status(500).json({ error: 'Internal Server Error', details: err.message });
    }
});

shopRouter.get("/:id", async (req, res) => {
    const id = req.params.id;
    try {
        const product = await Shop.getProduct(id);
        if (!product) {
            return res.status(404).json({ error: 'Product not found' });
        }
        res.send(product);
    } catch (err) {
        console.error(err); 
        res.status(500).json({ error: 'Internal Server Error', details: err.message });
    }
});
