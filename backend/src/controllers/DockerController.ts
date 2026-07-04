import { Request, Response } from "express";

import {
  getContainers,
  createContainer as createDockerContainer,
  startContainer,
  stopContainer,
  deleteContainer,
} from "../services/DockerService";

export async function listContainers(
  req: Request,
  res: Response
) {
  try {
    const containers = await getContainers();

    res.json(containers);
  } catch {
    res.status(500).json({
      message: "Failed to load containers",
    });
  }
}

export async function createContainer(
  req: Request,
  res: Response
) {
  try {
    const container =
      await createDockerContainer(req.body);

    res.status(201).json(container);
  } catch (error) {
    console.error(error);

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

export async function start(
  req: Request,
  res: Response
) {
  try {
    const result = await startContainer(req.params.id);

    res.json(result);
  } catch {
    res.status(500).json({
      message: "Failed to start",
    });
  }
}

export async function stop(
  req: Request,
  res: Response
) {
  try {
    const result = await stopContainer(req.params.id);

    res.json(result);
  } catch {
    res.status(500).json({
      message: "Failed to stop",
    });
  }
}

export async function remove(
  req: Request,
  res: Response
) {
  try {
    const result = await deleteContainer(req.params.id);

    res.json(result);
  } catch {
    res.status(500).json({
      message: "Failed to delete",
    });
  }
}