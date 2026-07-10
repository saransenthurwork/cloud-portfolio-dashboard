import { Request, Response } from "express";
import logger from "../config/logger";

import {
  getContainers,
  createContainer as createDockerContainer,
  startContainer,
  stopContainer,
  deleteContainer,
} from "../services/DockerService";

type DockerParams = {
  id: string;
};

export async function listContainers(
  _req: Request,
  res: Response
) {
  try {
    const containers = await getContainers();

    res.json(containers);
  } catch (error) {
    logger.error(error);

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
    const container = await createDockerContainer(req.body);

    res.status(201).json(container);
  } catch (error) {
    logger.error(error);

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
  req: Request<DockerParams>,
  res: Response
) {
  try {
    const result = await startContainer(req.params.id);

    res.json(result);
  } catch (error) {
    logger.error(error);

    res.status(500).json({
      message: "Failed to start container",
    });
  }
}

export async function stop(
  req: Request<DockerParams>,
  res: Response
) {
  try {
    const result = await stopContainer(req.params.id);

    res.json(result);
  } catch (error) {
    logger.error(error);

    res.status(500).json({
      message: "Failed to stop container",
    });
  }
}

export async function remove(
  req: Request<DockerParams>,
  res: Response
) {
  try {
    const result = await deleteContainer(req.params.id);

    res.json(result);
  } catch (error) {
    logger.error(error);

    res.status(500).json({
      message: "Failed to delete container",
    });
  }
}