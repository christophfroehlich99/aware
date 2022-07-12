import LandingImg from "../assets/images/landing-image.svg";
import { Logo } from "../components";
import Wrapper from "../assets/wrappers/LandingPage";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
        <h1>Aware</h1>
      </nav>
      <div className="container page">
        <div className="landing-info">
          <h2>
            project <span>management</span> tool
          </h2>
          <p>
            <span>Aware</span> is the visual work <span>management</span> tool
            that empowers teams to ideate, plan, manage, and celebrate their
            work together in a collaborative, <span>productive</span>, and
            organized way.
          </p>
          <Link to="/register">
            <button type="button" className="btn btn-hero">
              Login/Register
            </button>
          </Link>
        </div>
        <img src={LandingImg} alt="team" className="img main-img" />
      </div>
      <footer>made by chris</footer>
    </Wrapper>
  );
};
export default Landing;
