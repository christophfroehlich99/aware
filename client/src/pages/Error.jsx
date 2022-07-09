import errorImg from "../assets/images/error-image.svg";
import Wrapper from "../assets/wrappers/ErrorPage";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <Wrapper className="full-page">
      <h3>Uhh there was an error </h3>
      <img src={errorImg} alt="error 404" />
      <Link to="/">
        <button className="btn btn-hero">Go Back</button>
      </Link>
    </Wrapper>
  );
};
export default Error;
