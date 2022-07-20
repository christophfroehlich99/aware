import Project from "../models/Project.js";
import { StatusCodes } from "http-status-codes";
import { BadRequestError, NotFoundError } from "../errors/index.js";

const createProject = async (req, res) => {
  const { name, description, team } = req.body;

  if (!name || !description || team.length === 0) {
    throw new BadRequestError("Please provide all values");
  }
  req.body.createdBy = req.user.userId;
  const project = await Project.create(req.body);
  res.status(StatusCodes.CREATED).json({ project });
};
const deleteProject = async (req, res) => {
  res.send("project deleted");
};
const updateProject = async (req, res) => {
  res.send("project updated");
};
const getAllProjects = async (req, res) => {
  res.send("all Projects");
};

export { createProject, deleteProject, updateProject, getAllProjects };
