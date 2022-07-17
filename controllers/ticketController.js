const createTicket = async (req, res) => {
  res.send("Ticket Created");
};
const deleteTicket = async (req, res) => {
  res.send("Ticket deleted");
};
const updateTicket = async (req, res) => {
  res.send("Ticket updated");
};
const getAllTickets = async (req, res) => {
  res.send("all tickets");
};
const showStats = async (req, res) => {
  res.send("stats");
};

export { createTicket, deleteTicket, updateTicket, getAllTickets, showStats };
