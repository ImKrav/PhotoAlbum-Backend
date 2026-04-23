import { Request, Response, NextFunction } from "express";
import { DomainException } from "../../../domain/exceptions/DomainException";

export function errorHandler(
  err: Error,
  _req: Request,
  res: Response,
  _next: NextFunction
): void {
  if (err instanceof DomainException) {
    res.status(err.statusCode).json({
      error: err.name,
      message: err.message,
    });
    return;
  }

  console.error("❌ Error no controlado:", err);

  res.status(500).json({
    error: "InternalServerError",
    message: "Ocurrió un error interno en el servidor",
  });
}
