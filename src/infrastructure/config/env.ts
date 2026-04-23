import dotenv from "dotenv";

dotenv.config();

export const env = {
  PORT: Number(process.env.PORT) || 4000,
  ALBUMS_API_URL: process.env.ALBUMS_API_URL || "https://jsonplaceholder.typicode.com/albums",
  PHOTOS_API_URL: process.env.PHOTOS_API_URL || "https://jsonplaceholder.typicode.com/photos",
};
