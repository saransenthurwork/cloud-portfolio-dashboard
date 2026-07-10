"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const logger_1 = __importDefault(require("../config/logger"));
const router = (0, express_1.Router)();
router.get("/", (_req, res) => {
    logger_1.default.info("Health check requested");
    res.json({
        status: "healthy",
        service: "Nimbus Cloud API",
        timestamp: new Date().toISOString(),
        uptime: process.uptime(),
    });
});
exports.default = router;
//# sourceMappingURL=HealthRoutes.js.map