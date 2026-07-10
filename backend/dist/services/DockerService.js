"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getContainers = getContainers;
exports.createContainer = createContainer;
exports.startContainer = startContainer;
exports.stopContainer = stopContainer;
exports.deleteContainer = deleteContainer;
const docker_1 = require("../lib/docker");
async function getContainers() {
    const containers = await docker_1.docker.listContainers({
        all: true,
    });
    return containers.map((container) => ({
        id: container.Id,
        name: container.Names[0].replace("/", ""),
        image: container.Image,
        status: container.State,
        ports: container.Ports.map((port) => `${port.PublicPort ?? "-"}:${port.PrivatePort}`),
    }));
}
async function createContainer(data) {
    const container = await docker_1.docker.createContainer({
        Image: data.image,
        name: data.name,
        ExposedPorts: {
            "80/tcp": {},
        },
        HostConfig: {
            PortBindings: {
                "80/tcp": [
                    {
                        HostPort: data.hostPort,
                    },
                ],
            },
        },
    });
    await container.start();
    return {
        id: container.id,
        message: "Container created successfully",
    };
}
async function startContainer(id) {
    const container = docker_1.docker.getContainer(id);
    await container.start();
    return {
        message: "Container started",
    };
}
async function stopContainer(id) {
    const container = docker_1.docker.getContainer(id);
    await container.stop();
    return {
        message: "Container stopped",
    };
}
async function deleteContainer(id) {
    const container = docker_1.docker.getContainer(id);
    await container.remove({
        force: true,
    });
    return {
        message: "Container deleted",
    };
}
//# sourceMappingURL=DockerService.js.map