import { Router } from "express";

import {
  listContainers,
  createContainer,
  start,
  stop,
  remove,
} from "../controllers/DockerController";

import { authenticate } from "../middleware/authenticate";

const router = Router();

router.use(authenticate);

router.get("/", listContainers);

router.post("/", createContainer);

router.post("/:id/start", start);

router.post("/:id/stop", stop);

router.delete("/:id", remove);

export default router;