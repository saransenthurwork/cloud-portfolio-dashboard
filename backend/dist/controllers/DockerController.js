"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.listContainers = listContainers;
exports.createContainer = createContainer;
exports.start = start;
exports.stop = stop;
exports.remove = remove;
const logger_1 = __importDefault(require("../config/logger"));
const DockerService_1 = require("../services/DockerService");
async function listContainers(_req, res) {
    try {
        const containers = await (0, DockerService_1.getContainers)();
        res.json(containers);
    }
    catch (error) {
        logger_1.default.error(error);
        res.status(500).json({
            message: "Failed to load containers",
        });
    }
}
async function createContainer(req, res) {
    try {
        const container = await (0, DockerService_1.createContainer)(req.body);
        res.status(201).json(container);
    }
    catch (error) {
        logger_1.default.error(error);
        if (error instanceof Error) {
            return res.status(500).json({
                message: error.message,
            });
        }
        res.status(500).json({
            message: "Container creation failed",
        });
    }
}
async function start(req, res) {
    try {
        const result = await (0, DockerService_1.startContainer)(req.params.id);
        res.json(result);
    }
    catch (error) {
        logger_1.default.error(error);
        res.status(500).json({
            message: "Failed to start container",
        });
    }
}
async function stop(req, res) {
    try {
        const result = await (0, DockerService_1.stopContainer)(req.params.id);
        res.json(result);
    }
    catch (error) {
        logger_1.default.error(error);
        res.status(500).json({
            message: "Failed to stop container",
        });
    }
}
async function remove(req, res) {
    try {
        const result = await (0, DockerService_1.deleteContainer)(req.params.id);
        res.json(result);
    }
    catch (error) {
        logger_1.default.error(error);
        res.status(500).json({
            message: "Failed to delete container",
        });
    }
}
//# sourceMappingURL=DockerController.js.map