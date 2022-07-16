import { useState } from "react";
import { Logo, FormRow, Alert } from "../components";
import Wrapper from "../assets/wrappers/RegisterPage";
import { useAppContext } from "../context/appContext";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    password: "",
    isMember: false,
  });

  const { showAlert, isLoading, displayAlert, registerUser, user, loginUser } =
    useAppContext();
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials((prevCredentials) => ({
      ...prevCredentials,
      [name]: value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const { name, email, password, isMember } = credentials;
    if ((!name && !isMember) || !email || !password) {
      displayAlert();
      return;
    }
    const currentUser = { name, email, password };
    if (isMember) {
      loginUser(currentUser);
    } else {
      registerUser(currentUser);
    }
  };

  useEffect(() => {
    if (user) {
      setTimeout(() => {
        navigate("/");
      }, 3000);
    }
  }, [user, navigate]);
  const toggleIsMember = () => {
    setCredentials((prevCredentials) => ({
      ...prevCredentials,
      isMember: !prevCredentials.isMember,
    }));
  };
  return (
    <Wrapper className="full-page">
      <form className="form">
        <Logo />
        <h2>{credentials.isMember ? "Login" : "Register"}</h2>
        {showAlert && <Alert />}
        {!credentials.isMember && (
          <FormRow
            type="text"
            name="name"
            value={credentials.name}
            handleChange={handleChange}
          />
        )}
        <FormRow
          type="email"
          name="email"
          value={credentials.email}
          handleChange={handleChange}
        />
        <FormRow
          type="password"
          name="password"
          value={credentials.password}
          handleChange={handleChange}
        />
        <button
          type="submit"
          className="btn btn-block"
          disabled={isLoading}
          onClick={onSubmit}
        >
          Submit
        </button>
        <p>
          {credentials.isMember ? "Not a member yet ? " : "Already a Member ?"}
          <button type="button" onClick={toggleIsMember}>
            {credentials.isMember ? "Register " : "Login"}
          </button>
        </p>
      </form>
    </Wrapper>
  );
};
export default Register;
