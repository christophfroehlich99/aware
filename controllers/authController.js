const register = async (req, res) => {
  res.send("registered user!");
};
const login = async (req, res) => {
  res.send("login successfull!");
};
const updateUser = async (req, res) => {
  res.send("Updated user!");
};

export { register, login, updateUser };
