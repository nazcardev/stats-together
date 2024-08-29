import { HomeIcon, UsersIcon } from "lucide-react";
import Index from "./pages/Index.jsx";
import TeamStats from "./pages/TeamStats.jsx";

/**
 * Central place for defining the navigation items. Used for navigation components and routing.
 */
export const navItems = [
  {
    title: "Home",
    to: "/",
    icon: <HomeIcon className="h-4 w-4" />,
    page: <Index />,
  },
  {
    title: "Team Stats",
    to: "/team-stats",
    icon: <UsersIcon className="h-4 w-4" />,
    page: <TeamStats />,
  },
];
