import express from "express";
const router = express.Router();
import {
  createTicket,
  deleteTicket,
  updateTicket,
  getAllTickets,
  showStats,
} from "../controllers/ticketController.js";

router.route("/").post(createTicket).get(getAllTickets);
router.route("/stats").get(showStats);
router.route("/:id").delete(deleteTicket).patch(updateTicket);

export default router;
