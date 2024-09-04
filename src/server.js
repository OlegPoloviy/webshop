import express from "express";
import { router } from "./routes/appRouter.js";
import "dotenv/config";
import { shopRouter } from "./routes/shopRouter.js";

const PORT = process.env.PORT;

const app = express();

app.use(router);
app.use("/shop",shopRouter);

app.listen(PORT,() => {
    console.log(`server started on http://localhost:${PORT}`)
 });