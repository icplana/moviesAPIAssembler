import app from "./server";
import config from "./config/config";
import prisma from "./db/prismaClient";

const PORT = process.env.PORT || 4000;;

app.listen(PORT, "0.0.0.0", async () => {
	console.log(`Server is running on port ${PORT}`);
	await prisma.$connect();
	console.log("Prisma connected");
});