import rocket from "../assets/rocket.png";
import template from "../assets/templates.png";
import campaign from "../assets/campaign.png";
import integration from "../assets/integration.png";
import web from "../assets/web-management.png";
import settings from "../assets/setting.png";
import './SidebarData.css';

export const SidebarData = [
  {
    title: "Get Started",
    path: "/",
    icon: <img className="icons"  src={rocket} alt="" />,
    cName: "nav-text",
  },
  {
    title: "Templates",
    path: "",
    icon: <img className="icons" src={template} alt="" />,
    cName: "nav-text",
  },
  {
    title: "Campaign",
    path: "/campaign",
    icon: <img className="icons" src={campaign} alt="" />,
    cName: "nav-text",
  },
  {
    title: "Integration",
    path: "",
    icon: <img className="icons" src={integration} alt="" />,
    cName: "nav-text",
  },
  {
    title: "Web",
    path: "",
    icon: <img className="icons" src={web} alt="" />,
    cName: "nav-text",
  },
  {
    title: "Settings",
    path: "",
    icon: <img className="icons" src={settings} alt="" />,
    cName: "nav-text",
  },
];
