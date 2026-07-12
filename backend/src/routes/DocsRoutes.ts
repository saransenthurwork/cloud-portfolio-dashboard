import { Router } from "express";
import swaggerUi from "swagger-ui-express";
import YAML from "yamljs";
import path from "path";

const router = Router();

const swaggerDocument = YAML.load(
  path.join(__dirname, "../docs/swagger.yaml")
);

router.use("/", swaggerUi.serve);

router.get(
  "/",
  swaggerUi.setup(swaggerDocument)
);

export default router;