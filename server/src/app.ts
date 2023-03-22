import "reflect-metadata";
import "express-async-errors";
import express from "express";
import { sessionRoute, userRoutes } from "./routes";


const app = express();
app.use(express.json());

app.use("/users", userRoutes);

export default app;
