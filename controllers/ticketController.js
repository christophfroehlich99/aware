import mongoose from "mongoose";
import Ticket from "../models/Ticket.js";
import { BadRequestError } from "../errors/index.js";
import { StatusCodes } from "http-status-codes";
import User from "../models/User.js";

const createTicket = async (req, res) => {
  const {
    title,
    description,
    project,
    assignedTo,
    ticketType,
    status,
    priority,
  } = req.body;
  if (
    !title ||
    !description ||
    !project ||
    !assignedTo ||
    !ticketType ||
    !status ||
    !priority
  ) {
    throw new BadRequestError("Please provide all values!");
  }
  req.body.createdBy = req.user.userId;
  const ticket = await Ticket.create(req.body);
  await User.updateMany(
    { _id: { $in: assignedTo } },
    { $addToSet: { tickets: ticket._id } },
    {
      new: true,
      runValidators: true,
    }
  );

  res.status(StatusCodes.CREATED).json({ ticket });
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
