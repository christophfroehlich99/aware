import Wrapper from "../assets/wrappers/SmallSidebar";
import { useAppContext } from "../context/appContext";
import links from "../utils/links";
import { NavLink } from "react-router-dom";
import Logo from "./Logo";
import { FaTimes } from "react-icons/fa";
import NavLinks from "./NavLinks";

const SmallSidebar = () => {
  const { showSidebar, toggleSidebar } = useAppContext();

  return (
    <Wrapper>
      {showSidebar && (
        <div
          className={
            showSidebar ? "sidebar-container show-sidebar" : "sidebar-container"
          }
        >
          <div className="content">
            <button className="close-btn" onClick={toggleSidebar}>
              <FaTimes />
            </button>
            <header>
              <Logo />
            </header>
            <NavLinks toggleSidebar={toggleSidebar} />
          </div>
        </div>
      )}
    </Wrapper>
  );
};
export default SmallSidebar;
