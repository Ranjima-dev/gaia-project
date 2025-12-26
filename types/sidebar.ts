import { LucideIcon } from "lucide-react";

export type SidebarLinkItem = {
  label: string;
  href: string;
  icon: LucideIcon;
  danger?: boolean;
};

export type SidebarActionItem = {
  label: string;
  icon: LucideIcon;
  danger?: boolean;
  action: "logout";
};

export type SidebarItem = SidebarLinkItem | SidebarActionItem;
