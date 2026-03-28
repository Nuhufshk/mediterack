import { Router } from "express";
import ProfileController from "../controller/profile.controller";
import { validateBody } from "../utils";
import { authorization } from "../middleware/authorization";
import { upsertProfileSchema, updateProfileSettingsSchema } from "../schema";

const router = Router();

router.use(authorization);

router.get("/:userId", ProfileController.getByUserIdHandler);
router.post(
    "/:userId",
    validateBody(upsertProfileSchema),
    ProfileController.upsertHandler
);
router.patch(
    "/:userId/settings",
    validateBody(updateProfileSettingsSchema),
    ProfileController.updateSettingsHandler
);

export default router;
