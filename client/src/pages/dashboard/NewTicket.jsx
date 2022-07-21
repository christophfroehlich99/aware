import { FormRow, Alert } from "../../components";
import Wrapper from "../../assets/wrappers/DashboardFormPage";
import { useAppContext } from "../../context/appContext";

const NewTicket = () => {
  const {
    isLoading,
    displayAlert,
    showAlert,
    alertText,
    alertType,
    isEditing,
    editId,
    ticketTitle,
    ticketDescription,
    ticketProject,
    ticketTeamOptions,
    ticketTeam,
    ticketTypeOptions,
    ticketType,
    ticketStatusOptions,
    ticketStatus,
    ticketPriorityOptions,
    ticketPriority,
  } = useAppContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !ticketTitle ||
      !ticketDescription ||
      !ticketProject ||
      !ticketTeam ||
      !ticketType ||
      !ticketStatus ||
      !ticketPriority
    ) {
      displayAlert();
      return;
    }
    console.log("create ticket");
  };

  const handleTicketInput = (e) => {
    const { name, value } = e.target;
    console.log(`${name}:${value}`);
  };

  return (
    <Wrapper>
      <form className="form">
        <h3>{isEditing ? "Edit Ticket" : "New Ticket"}</h3>
        {showAlert && <Alert />}
        <div className="form-center">
          <FormRow
            type="text"
            name="ticketTitle"
            value={ticketTitle}
            labelText="ticket title"
            handleChange={handleTicketInput}
          />
          <FormRow
            type="text"
            name="ticketDescription"
            value={ticketDescription}
            labelText="description"
            handleChange={handleTicketInput}
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
export default NewTicket;
