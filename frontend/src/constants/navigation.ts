import {
  LayoutDashboard,
  FolderKanban,
  Server,
  Boxes,
  Activity,
  FileText,
  Shield,
  Wallet,
  Settings,
} from "lucide-react";

export const navigation = [
  {
    title: "Overview",
    icon: LayoutDashboard,
    path: "/",
  },
  {
    title: "Projects",
    icon: FolderKanban,
    path: "/projects",
  },
  {
    title: "Infrastructure",
    icon: Server,
    path: "/infrastructure",
  },
  {
    title: "Containers",
    icon: Boxes,
    path: "/containers",
  },
  {
    title: "Kubernetes",
    icon: Boxes,
    path: "/kubernetes",
  },
  {
    title: "Monitoring",
    icon: Activity,
    path: "/monitoring",
  },
  {
    title: "Logs",
    icon: FileText,
    path: "/logs",
  },
  {
    title: "Security",
    icon: Shield,
    path: "/security",
  },
  {
    title: "Billing",
    icon: Wallet,
    path: "/billing",
  },
  {
    title: "Settings",
    icon: Settings,
    path: "/settings",
  },
];