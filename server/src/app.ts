import "reflect-metadata";
import "express-async-errors";
import express from "express";
import { sessionRoute, userRoutes } from "./routes";
import { handleAppError } from "./middlewares";
import { contactRoutes } from "./routes/contacts";


const app = express();
app.use(express.json());

app.use("/users", userRoutes);
app.use("/login", sessionRoute);
app.use("/contacts", contactRoutes);

app.use(handleAppError);

export default app;
