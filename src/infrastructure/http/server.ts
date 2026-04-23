import express from "express";
import cors from "cors";
import { Router } from "express";
import { errorHandler } from "./middlewares/errorHandler";

export function createServer(routers: Router[]): express.Application {
  const app = express();

  app.use(cors());
  app.use(express.json());

  for (const router of routers) {
    app.use(router);
  }

  // Global error handler — must be registered AFTER all routes
  app.use(errorHandler);

  return app;
}
