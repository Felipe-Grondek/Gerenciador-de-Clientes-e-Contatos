import app from "./app";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

(async () => {
    await prisma.$connect()
    .catch((err: any) => {
        console.log("Error during Prisma initialization", err)
    })

    app.listen(3001, () => {
        console.log("Server running on http://localhost:3001")
    })
})()

export { prisma };