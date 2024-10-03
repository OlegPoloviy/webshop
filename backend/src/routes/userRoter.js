import { Router } from "express";

export const userRouter = Router();

userRouter.post("/register",(req,res) => {
    const user = req.body;
    console.log(user);
})