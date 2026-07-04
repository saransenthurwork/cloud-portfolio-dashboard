import { docker } from "../lib/docker";
import { DockerContainer } from "../types/Docker";
import { CreateContainerRequest } from "../types/CreateContainer";

export async function getContainers(): Promise<DockerContainer[]> {

  const containers =
    await docker.listContainers({
      all: true,
    });

  return containers.map((container) => ({

    id: container.Id,

    name:
      container.Names[0].replace("/", ""),

    image:
      container.Image,

    status:
      container.State,

    ports:
      container.Ports.map(
        (port) =>
          `${port.PublicPort ?? "-"}:${port.PrivatePort}`
      ),

  }));

}

export async function createContainer(
  data: CreateContainerRequest
) {
  const container = await docker.createContainer({
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

export async function startContainer(id: string) {
  const container = docker.getContainer(id);

  await container.start();

  return {
    message: "Container started",
  };
}

export async function stopContainer(id: string) {
  const container = docker.getContainer(id);

  await container.stop();

  return {
    message: "Container stopped",
  };
}

export async function deleteContainer(id: string) {
  const container = docker.getContainer(id);

  await container.remove({
    force: true,
  });

  return {
    message: "Container deleted",
  };
}