import express from "express";
import { router } from "./routes/appRouter.js";
import "dotenv/config";
import { shopRouter } from "./routes/shopRouter.js";
import { laptopRouter } from "./routes/laptopsRouetr.js";
import { userRouter } from "./routes/userRoter.js";
import path from 'path';
import cors from "cors";
import bodyParser from "body-parser";

const PORT = process.env.PORT;
const __dirname = path.resolve();
const app = express();

app.use(cors());
app.use(router);
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.json());
app.use("/media", express.static(path.join(__dirname, 'src', 'media')));
app.use("/user",userRouter);
app.use("/laptops",laptopRouter);
app.use("/shop",shopRouter);

app.listen(PORT,() => {
    console.log(`server started on http://localhost:${PORT}`)
 });

