import "dotenv/config";
import express from "express";
import cors from "cors";

import { config } from "./config/env";
import authRoutes from "./routes/AuthRoutes";
import projectRoutes from "./routes/ProjectRoutes";
import dockerRoutes from "./routes/DockerRoutes";
import healthRoutes from "./routes/HealthRoutes";

const app = express();

app.use(cors());

app.use(express.json());

app.use("/api/docker", dockerRoutes);

app.use("/api/health", healthRoutes);

app.get("/", (_req, res) => {
  res.json({
    application: "Nimbus Cloud API",
    status: "running",
  });
});

app.use("/api/auth", authRoutes);

app.use("/api/projects", projectRoutes);

app.listen(config.PORT, () => {
  console.log(
    `🚀 Nimbus Cloud API running on http://localhost:${config.PORT}`
  );
});