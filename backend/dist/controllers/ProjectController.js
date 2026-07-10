"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.create = create;
exports.list = list;
const ProjectService_1 = require("../services/ProjectService");
async function create(req, res) {
    try {
        const project = await (0, ProjectService_1.createProject)({
            name: req.body.name,
            description: req.body.description,
            ownerId: req.user.id,
        });
        res.status(201).json(project);
    }
    catch {
        res.status(500).json({
            message: "Failed to create project",
        });
    }
}
async function list(req, res) {
    try {
        const projects = await (0, ProjectService_1.getProjects)(req.user.id);
        res.json(projects);
    }
    catch {
        res.status(500).json({
            message: "Failed to fetch projects",
        });
    }
}
//# sourceMappingURL=ProjectController.js.map