"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createProject = createProject;
exports.getProjects = getProjects;
const prisma_1 = require("../lib/prisma");
async function createProject(data) {
    return prisma_1.prisma.project.create({
        data: {
            name: data.name,
            description: data.description,
            ownerId: data.ownerId,
        },
    });
}
async function getProjects(ownerId) {
    return prisma_1.prisma.project.findMany({
        where: {
            ownerId,
        },
        orderBy: {
            createdAt: "desc",
        },
    });
}
//# sourceMappingURL=ProjectService.js.map