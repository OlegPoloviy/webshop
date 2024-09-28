import { Router } from "express";
import { Laptop } from "../database/models/laptops.js";

export const laptopRouter = Router();

laptopRouter.get("/", async (req,res) => {
    try{
        const laptops = await Laptop.getAllLaptops();
        res.send(laptops);
    }catch(err){
        res.status(500).json(err);
        console.log(err);
    }
});

laptopRouter.get('/:id',async (req,res) => {
    const id = req.params.id;
    try{
        const laptop = await Laptop.getLaptop(id);
        res.send(laptop);
    }catch(err){
        res.status(500).json(err);
    }
})