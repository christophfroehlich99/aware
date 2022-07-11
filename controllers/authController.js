import User from "../models/User.js";
import { StatusCodes } from "http-status-codes";
import { BadRequestError, NotFoundError } from "../errors/index.js";

const register = async (req, res) => {
  const { email, name, password } = req.body;
  if (!email || !name || !password) {
    throw new BadRequestError("please provide all values");
  }

  const user = await User.create({ email, name, password });
  res.status(StatusCodes.CREATED).json({ user });
};
const login = async (req, res) => {
  res.send("login successfull!");
};
const updateUser = async (req, res) => {
  res.send("Updated user!");
};

export { register, login, updateUser };
