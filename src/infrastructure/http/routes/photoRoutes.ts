import { Router } from "express";
import { PhotoController } from "../controllers/PhotoController";

export function createPhotoRoutes(controller: PhotoController): Router {
  const router = Router();

  router.get("/photos", (req, res, next) => controller.getByAlbum(req, res, next));

  return router;
}
