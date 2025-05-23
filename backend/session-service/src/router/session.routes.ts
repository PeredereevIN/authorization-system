import { Router } from "express";
import { sessionController } from "../module/session.module";

const sessionRoutes = Router();

sessionRoutes.get("/all", sessionController.getAllSession);
sessionRoutes.get("/", sessionController.getSession);
sessionRoutes.delete("/:id", sessionController.deleteSession);

export default sessionRoutes;
