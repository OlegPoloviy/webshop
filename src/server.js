import express from "express";
import { router } from "./routes/appRouter.js";
import "dotenv/config";

const PORT = process.env.PORT;

const app = express();

app.use(router);

app.listen(PORT,() => {
    console.log(`server started on http://localhost:${PORT}`)
 })