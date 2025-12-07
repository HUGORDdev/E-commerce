import dotenv from "dotenv"

dotenv.config()

export const ENV = {
    NODE_ENV: process.env.NODE_ENV,
    PORT: process.env.PORT,
    DB_URL: process.env.DB_URL,
    CLERK_PUBLISHABLE_KEY: process.env.CLERK_PUBLISHABLE_KEY,
    CLERK_SECRET_KEY: process.env.CLERK_SECRET_KEY,
    CLOUDNARY_API_KEY: process.env.CLOUDNARY_API_KEY,
    CLOUDNARY_API_SECRET: process.env.CLOUDNARY_API_SECRET,
    CLOUDNARY_CLOUD_NAME: process.env.CLOUDNARY_API_SECRET,
    INNGEST_KEY_VALUE:process.env.INNGEST_KEY_VALUE,
}