import BusinessLogo from "../assets/img/Business.svg";
import HomeLogo from "../assets/img/Home.svg";
import HealthLogo from "../assets/img/Health.svg";
import SportLogo from "../assets/img/Sports.svg";
import ScienceLogo from "../assets/img/Science.svg";
import TechnologyLogo from "../assets/img/Technology.svg";
import GeneralLogo from "../assets/img/News.svg";
import HomeLogo2 from "../assets/img/Home2.jpg";
const navLinks = [
  {
    id: 1,
    text: "Home",
    path: "/",
    svg: HomeLogo2,
  },
  {
    id: 2,
    text: "General",
    path: "general",
    svg: GeneralLogo,
  },
  {
    id: 3,
    text: "Business",
    path: "business",
    svg: BusinessLogo,
  },
  {
    id: 4,
    text: "Health",
    path: "health",
    svg: HealthLogo,
  },
  {
    id: 5,
    text: "Science",
    path: "science",
    svg: ScienceLogo,
  },
  {
    id: 6,
    text: "Sport",
    path: "sport",
    svg: SportLogo,
  },
  {
    id: 7,
    text: "Technology",
    path: "technology",
    svg: TechnologyLogo,
  },
];

export default navLinks;
