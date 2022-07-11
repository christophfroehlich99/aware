const createProject = async (req, res) => {
  res.send("project created");
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
