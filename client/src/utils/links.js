import { FaChartPie } from "react-icons/fa";
import { RiUserSettingsFill } from "react-icons/ri";
import { ImFolderOpen } from "react-icons/im";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { MdOutlinePostAdd } from "react-icons/md";
import { BsFilePersonFill } from "react-icons/bs";
import { MdOutlineAddChart } from "react-icons/md";

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
    text: "new Project",
    path: "/new-Project",
    icon: <MdOutlineAddChart />,
  },
  {
    id: 4,
    text: "projects",
    path: "/projects",
    icon: <AiOutlineFundProjectionScreen />,
  },
  {
    id: 5,
    text: "all Tickets",
    path: "/all-tickets",
    icon: <ImFolderOpen />,
  },
  {
    id: 6,
    text: "new Ticket",
    path: "/new-ticket",
    icon: <MdOutlinePostAdd />,
  },
  {
    id: 7,
    text: "profile",
    path: "/profile",
    icon: <BsFilePersonFill />,
  },
];

export default links;
