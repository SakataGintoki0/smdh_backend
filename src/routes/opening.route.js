import { Router } from "express";
import {
  createOpening,
  getAllOpenings,
  updateOpening,
  deleteOpening,
} from "../controllers/opening.controller.js";
import { verifyJwt } from "../middlewares/auth.middleware.js";

const router = Router();

router.route("/create").post(verifyJwt, createOpening);
router.route("/update").post(verifyJwt, updateOpening);
router.route("/delete").get(verifyJwt, deleteOpening);
router.route("/get-all").get(getAllOpenings);

export default router;
