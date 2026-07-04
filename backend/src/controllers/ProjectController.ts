import { Response } from "express";

import { AuthRequest } from "../middleware/authenticate";

import {
  createProject,
  getProjects,
} from "../services/ProjectService";

export async function create(
  req: AuthRequest,
  res: Response
) {
  try {

    const project =
      await createProject({

        name: req.body.name,

        description:
          req.body.description,

        ownerId:
          req.user!.id,

      });

    res.status(201).json(project);

  } catch {

    res.status(500).json({
      message: "Failed to create project",
    });

  }
}

export async function list(
  req: AuthRequest,
  res: Response
) {
  try {

    const projects =
      await getProjects(
        req.user!.id
      );

    res.json(projects);

  } catch {

    res.status(500).json({
      message: "Failed to fetch projects",
    });

  }
}