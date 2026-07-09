import "dotenv/config";
import express from "express";
import cors from "cors";
import pinoHttp from "pino-http";
import logger from "./config/logger";

import { config } from "./config/env";
import authRoutes from "./routes/AuthRoutes";
import projectRoutes from "./routes/ProjectRoutes";
import dockerRoutes from "./routes/DockerRoutes";
import healthRoutes from "./routes/HealthRoutes";

const app = express();

app.use(cors());
app.use(express.json());

app.use(
  pinoHttp({
    logger,
  })
);

app.use("/api/docker", dockerRoutes);
app.use("/api/health", healthRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/projects", projectRoutes);

app.get("/", (_req, res) => {
  res.json({
    application: "Nimbus Cloud API",
    status: "running",
  });
});

app.listen(config.PORT, () => {
  logger.info(
    `🚀 Nimbus Cloud API running on http://localhost:${config.PORT}`
  );
});