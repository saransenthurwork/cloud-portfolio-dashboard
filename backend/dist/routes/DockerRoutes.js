"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const DockerController_1 = require("../controllers/DockerController");
const authenticate_1 = require("../middleware/authenticate");
const router = (0, express_1.Router)();
router.use(authenticate_1.authenticate);
router.get("/", DockerController_1.listContainers);
router.post("/", DockerController_1.createContainer);
router.post("/:id/start", DockerController_1.start);
router.post("/:id/stop", DockerController_1.stop);
router.delete("/:id", DockerController_1.remove);
exports.default = router;
//# sourceMappingURL=DockerRoutes.js.map