import { Router } from "express";
import PatientController from "../controller/patient.controller";
import { validateBody } from "../utils";
import { authorization } from "../middleware/authorization";
import { createPatientSchema, updatePatientSchema } from "../schema";

const router = Router();

router.use(authorization);

router.post(
    "/",
    validateBody(createPatientSchema),
    PatientController.createHandler
);
router.get("/", PatientController.getAllHandler);
router.get("/:id", PatientController.getByIdHandler);
router.patch(
    "/:id",
    validateBody(updatePatientSchema),
    PatientController.updateHandler
);
router.delete("/:id", PatientController.deleteHandler);

export default router;
