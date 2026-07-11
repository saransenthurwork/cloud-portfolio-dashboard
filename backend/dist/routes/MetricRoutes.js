"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const metrics_1 = require("../config/metrics");
const router = (0, express_1.Router)();
router.get("/", async (_req, res) => {
    res.set("Content-Type", metrics_1.register.contentType);
    res.end(await metrics_1.register.metrics());
});
exports.default = router;
//# sourceMappingURL=MetricRoutes.js.map