"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const pino_http_1 = __importDefault(require("pino-http"));
const logger_1 = __importDefault(require("./config/logger"));
const env_1 = require("./config/env");
const AuthRoutes_1 = __importDefault(require("./routes/AuthRoutes"));
const ProjectRoutes_1 = __importDefault(require("./routes/ProjectRoutes"));
const DockerRoutes_1 = __importDefault(require("./routes/DockerRoutes"));
const HealthRoutes_1 = __importDefault(require("./routes/HealthRoutes"));
const MetricsRoutes_1 = __importDefault(require("./routes/MetricsRoutes"));
const DocsRoutes_1 = __importDefault(require("./routes/DocsRoutes"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use("/api/docs", DocsRoutes_1.default);
app.use((0, pino_http_1.default)({
    logger: logger_1.default,
}));
app.get("/", (_req, res) => {
    res.json({
        application: "Nimbus Cloud API",
        status: "running",
    });
});
app.use("/api/health", HealthRoutes_1.default);
app.use("/api/metrics", MetricsRoutes_1.default);
app.use("/api/auth", AuthRoutes_1.default);
app.use("/api/projects", ProjectRoutes_1.default);
app.use("/api/docker", DockerRoutes_1.default);
app.listen(env_1.config.PORT, () => {
    logger_1.default.info(`🚀 Nimbus Cloud API running on http://localhost:${env_1.config.PORT}`);
});
//# sourceMappingURL=server.js.map