import { defineConfig } from "drizzle-kit";
import dotenv from "dotenv";

dotenv.config();

export default defineConfig({
  schema: "./src/db/schemas/notes.ts",
  dialect: "postgresql",
  out: "./src/db/migrations/drizzle",
  dbCredentials: {
    url: process.env.DB_CONNECTION_STRING!,
  },
  verbose: true,
  strict: true,
});
