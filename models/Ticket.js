import mongoose from "mongoose";

const TicketSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      minlength: 3,
      maxlength: 30,
    },
    description: {
      type: String,
      maxlength: 150,
    },
    project: {
      type: mongoose.Types.ObjectId,
      ref: "Project",
      required: [true, "Please provide user"],
    },
    assignedTo: [
      {
        type: mongoose.Types.ObjectId,
        ref: "User",
      },
    ],
    createdBy: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      required: [true, "Please provide user"],
    },
    ticketType: {
      type: String,
      enum: ["Errors", "Feature Requests", "Other"],
      default: "Errors",
    },
    status: {
      type: String,
      enum: ["open", "in progress", "resolved", "additional info required"],
      default: "open",
    },
    priority: {
      type: String,
      enum: ["low", "medium", "high", "urgent"],
      default: "low",
    },
  },
  { timestamps: true }
);

export default mongoose.model("Ticket", TicketSchema);
