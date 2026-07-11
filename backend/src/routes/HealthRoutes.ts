import { Router } from "express";
import logger from "../config/logger";

const router = Router();

router.get("/", (_req, res) => {
  logger.info("Health check requested");

  res.json({
    status: "healthy",
    service: "Nimbus Cloud API",
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
  });
});

export default router;