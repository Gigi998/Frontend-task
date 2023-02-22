import BusinessLogo from "../assets/img/Business.svg";
import BusinessLogoR from "../assets/img/BusinessR.svg";
import HomeLogo from "../assets/img/Home.svg";
import HomeLogoR from "../assets/img/HomeR.svg";
import HealthLogo from "../assets/img/Health.svg";
import HealthLogoR from "../assets/img/HealthR.svg";
import SportLogo from "../assets/img/Sports.svg";
import SportLogoR from "../assets/img/SportsR.svg";
import ScienceLogo from "../assets/img/Science.svg";
import ScienceLogoR from "../assets/img/ScienceR.svg";
import TechnologyLogo from "../assets/img/Technology.svg";
import TechnologyLogoR from "../assets/img/TechnologyR.svg";
import GeneralLogo from "../assets/img/News.svg";
import GeneralLogoR from "../assets/img/NewsR.svg";
import Fav from "../assets/img/Fav.svg";
import FavR from "../assets/img/FavR.svg";

const navLinks = [
  {
    id: 1,
    text: "Home",
    path: "/",
    svg: HomeLogo,
    svgR: HomeLogoR,
  },
  {
    id: 2,
    text: "General",
    path: "general",
    svg: GeneralLogo,
    svgR: GeneralLogoR,
  },
  {
    id: 3,
    text: "Business",
    path: "business",
    svg: BusinessLogo,
    svgR: BusinessLogoR,
  },
  {
    id: 4,
    text: "Health",
    path: "health",
    svg: HealthLogo,
    svgR: HealthLogoR,
  },
  {
    id: 5,
    text: "Science",
    path: "science",
    svg: ScienceLogo,
    svgR: ScienceLogoR,
  },
  {
    id: 6,
    text: "Sport",
    path: "sport",
    svg: SportLogo,
    svgR: SportLogoR,
  },
  {
    id: 7,
    text: "Technology",
    path: "technology",
    svg: TechnologyLogo,
    svgR: TechnologyLogoR,
  },
  {
    id: 8,
    text: "Favorites",
    path: "favorites",
    svg: Fav,
    svgR: FavR,
  },
];

export const categoriesArray = [
  "general",
  "health",
  "business",
  "science",
  "sport",
  "technology",
];

export default navLinks;
