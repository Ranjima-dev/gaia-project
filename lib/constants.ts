import {
  Home,
  BarChart2,
  CheckSquare,
  Activity,
  ListOrdered,
  Download,
  Settings,
  LogOut,
} from "lucide-react";

export const SIDEBAR_TOP_ITEMS = [
  { label: "Dashboard", href: "/dashboard", icon: Home },
  { label: "Savings & ROI", href: "/savings", icon: BarChart2 },
  { label: "Task Suitability", href: "/task-suitability", icon: CheckSquare },
  { label: "User Activity Overview", href: "/user-activity", icon: Activity },
  { label: "Task Prioritization", href: "/task-priority", icon: ListOrdered },
  { label: "Export", href: "/export", icon: Download },
];

export const SIDEBAR_BOTTOM_ITEMS = [
  { label: "Settings", href: "/settings", icon: Settings },
  { label: "Log out", href: "/logout", icon: LogOut, danger: true },
];
