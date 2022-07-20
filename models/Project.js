import mongoose from "mongoose";

const ProjectSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please provide a project name"],
      minlength: 3,
      maxlength: 30,
    },
    description: {
      type: String,
      maxlength: 150,
    },
    team: [
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
  },
  { timestamps: true }
);

export default mongoose.model("Project", ProjectSchema);
