"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ProjectController_1 = require("../controllers/ProjectController");
const authenticate_1 = require("../middleware/authenticate");
const router = (0, express_1.Router)();
router.use(authenticate_1.authenticate);
router.post("/", ProjectController_1.create);
router.get("/", ProjectController_1.list);
exports.default = router;
//# sourceMappingURL=ProjectRoutes.js.map