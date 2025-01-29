import config from "@/lib/config";
import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";

const sql = neon(config.env.databaseUrl);

export const db = drizzle({ client: sql, casing: "snake_case" });


// import { drizzle } from "drizzle-orm/neon-http";
// import { neon } from "@neondatabase/serverless";
// import { config } from "dotenv";

// config({ path: ".env" }); // or .env.local

// const sql = neon(process.env.DATABASE_URL!);
// // const sql = neon(import.meta.env.DATABASE_URL!);
// export const db = drizzle({ client: sql });


// import { drizzle } from "drizzle-orm/neon-http";
// import { neon } from "@neondatabase/serverless";

// const DATABASE_URL = process.env.DATABASE_URL;

// if (!DATABASE_URL) {
//   throw new Error("DATABASE_URL is not defined in the environment variables.");
// }

// const sql = neon(DATABASE_URL);
// export const db = drizzle(sql);