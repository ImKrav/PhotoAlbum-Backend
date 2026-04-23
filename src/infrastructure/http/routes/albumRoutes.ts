import { Router } from "express";
import { AlbumController } from "../controllers/AlbumController";

export function createAlbumRoutes(controller: AlbumController): Router {
  const router = Router();

  router.get("/albums", (req, res, next) => controller.getAll(req, res, next));

  return router;
}
