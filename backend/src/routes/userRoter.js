import { Router } from "express";
import { Users } from "../database/models/Users.js";

export const userRouter = Router();

userRouter.post("/register", async (req, res) => {
    try {                   
        const user = req.body;
        console.log(user)
        await Users.createUser(user);
        res.status(201).json(user);  
    } catch (err) {
        res.status(500).json({ message: "Error adding user", error: err.message }); 
    }
});
