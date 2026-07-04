import { Router } from "express";

import {
  create,
  list,
} from "../controllers/ProjectController";

import { authenticate } from "../middleware/authenticate";

const router = Router();

router.use(authenticate);

router.post("/", create);

router.get("/", list);

export default router;