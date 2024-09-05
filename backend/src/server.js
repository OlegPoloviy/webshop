import express from "express";
import { router } from "./routes/appRouter.js";
import "dotenv/config";
import { shopRouter } from "./routes/shopRouter.js";
import cors from "cors";
import bodyParser from "body-parser";

const PORT = process.env.PORT;

const app = express();

app.use(cors())
app.use(router);
app.use("/shop",shopRouter);
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.json());

app.listen(PORT,() => {
    console.log(`server started on http://localhost:${PORT}`)
 });