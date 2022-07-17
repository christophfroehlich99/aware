import { FaChartPie } from "react-icons/fa";
import { RiUserSettingsFill } from "react-icons/ri";
import { ImFolderOpen } from "react-icons/im";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { RiFileTextFill } from "react-icons/ri";
import { BsFilePersonFill } from "react-icons/bs";

const links = [
  {
    id: 1,
    text: "stats",
    path: "/",
    icon: <FaChartPie />,
  },
  {
    id: 2,
    text: "roles",
    path: "/roles",
    icon: <RiUserSettingsFill />,
  },
  {
    id: 3,
    text: "projects",
    path: "/projects",
    icon: <AiOutlineFundProjectionScreen />,
  },
  {
    id: 4,
    text: "all Tickets",
    path: "/all-tickets",
    icon: <ImFolderOpen />,
  },
  {
    id: 5,
    text: "new Ticket",
    path: "/new-ticket",
    icon: <RiFileTextFill />,
  },
  {
    id: 6,
    text: "profile",
    path: "/profile",
    icon: <BsFilePersonFill />,
  },
];

export default links;
