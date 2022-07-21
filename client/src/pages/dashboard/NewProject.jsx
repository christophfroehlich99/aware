import { FormRow, Alert } from "../../components";
import Wrapper from "../../assets/wrappers/DashboardFormPage";
import { useAppContext } from "../../context/appContext";
import { DISPLAY_ALERT } from "../../context/actions";

const NewProject = () => {
  const {
    isLoading,
    showAlert,
    displayAlert,
    alertText,
    alertType,
    isEditing,
    editId,
    projectName,
    projectDescription,
    projectTeamOptions,
  } = useAppContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!projectName || !projectDescription || !projectTeamOptions) {
      displayAlert();
      return;
    }
    console.log("create job");
  };

  const handleProjectInput = (e) => {
    const { name, value } = e.target;
    console.log(`${name}:${value}`);
  };

  return (
    <Wrapper>
      <form className="form">
        <h3>{isEditing ? "Edit Project" : "New Project"}</h3>
        {showAlert && <Alert />}
        <div className="form-center">
          <FormRow
            type="text"
            name="projectName"
            value={projectName}
            labelText="project name"
            handleChange={handleProjectInput}
          />
          <FormRow
            type="text"
            name="projectDescription"
            value={projectDescription}
            labelText="description"
            handleChange={handleProjectInput}
          />
          <FormRow
            type="text"
            name="projectDescription"
            value={projectDescription}
            labelText="description"
            handleChange={handleProjectInput}
          />
          {/* project team options */}
          <div className="btn-container">
            <button
              type="submit"
              className="btn btn-block submit-btn"
              onClick={handleSubmit}
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </Wrapper>
  );
};
export default NewProject;
