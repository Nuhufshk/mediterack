import { Router } from "express";
import UserController from "../controller/user.controller";
import { validateBody } from "../utils";
import { authorization } from "../middleware/authorization";
import { createUserSchema, updateUserSchema } from "../schema";

const router = Router();

router.use(authorization);

router.post("/", validateBody(createUserSchema), UserController.createHandler);
router.get("/", UserController.getAllHandler);
router.get("/:id", UserController.getByIdHandler);
router.patch(
    "/:id",
    validateBody(updateUserSchema),
    UserController.updateHandler
);
router.delete("/:id", UserController.deleteHandler);

export default router;
