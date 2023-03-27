import "reflect-metadata";
import "express-async-errors";
import express from "express";
import cors from "cors";
import { sessionRoute, userRoutes } from "./routes";
import { handleAppError } from "./middlewares";
import { contactRoutes } from "./routes/contacts";
import { profileRoute } from "./routes/profile";


const app = express();
app.use(express.json());

app.use("/users", userRoutes);
app.use("/login", sessionRoute);
app.use("/contacts", contactRoutes);
app.use("/profile", profileRoute);

app.use(handleAppError);
app.use(cors());

export default app;
