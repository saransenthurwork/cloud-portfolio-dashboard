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
import metricsRoutes from "./routes/MetricsRoutes";
import docsRoutes from "./routes/DocsRoutes";

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/docs", docsRoutes);

app.use(
  pinoHttp({
    logger,
  })
);

app.get("/", (_req, res) => {
  res.json({
    application: "Nimbus Cloud API",
    status: "running",
  });
});

app.use("/api/health", healthRoutes);
app.use("/api/metrics", metricsRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/projects", projectRoutes);
app.use("/api/docker", dockerRoutes);

app.listen(config.PORT, () => {
  logger.info(
    `🚀 Nimbus Cloud API running on http://localhost:${config.PORT}`
  );
});