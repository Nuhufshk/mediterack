import { Router } from "express";
import NotificationController from "../controller/notification.controller";
import { validateBody } from "../utils";
import { authorization } from "../middleware/authorization";
import { createNotificationSchema, updateNotificationSchema } from "../schema";

const router = Router();

router.use(authorization);

router.post(
    "/",
    validateBody(createNotificationSchema),
    NotificationController.createHandler
);
router.get("/", NotificationController.getAllHandler);
router.get("/:id", NotificationController.getByIdHandler);
router.patch(
    "/:id",
    validateBody(updateNotificationSchema),
    NotificationController.updateHandler
);
router.delete("/:id", NotificationController.deleteHandler);

export default router;
