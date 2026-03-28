import { Router } from "express";
import DashboardController from "../controller/dashboard.controller";
import { authorization } from "../middleware/authorization";

const router = Router();

router.use(authorization);
router.get("/", DashboardController.getDashboardDataHandler);

export default router;
