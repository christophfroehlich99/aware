import express from "express";
const router = express.Router();

import {
  createProject,
  deleteProject,
  updateProject,
  getAllProjects,
} from "../controllers/projectController.js";

router.route("/").post(createProject).get(getAllProjects);
router.route("/:id").patch(updateProject).delete(deleteProject);

export default router;
