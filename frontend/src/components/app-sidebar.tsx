"use client"

import * as React from "react"

import { NavMain } from "@/components/nav-main"
import { NavSecondary } from "@/components/nav-secondary"
import { NavUser } from "@/components/nav-user"
import { FaRegHeart } from "react-icons/fa";
import { LuTicket } from "react-icons/lu";
import { CgProfile } from "react-icons/cg";
import { FiSearch } from "react-icons/fi";
import { LuLayoutDashboard } from "react-icons/lu";
import { IoMdAddCircleOutline } from "react-icons/io";
import { MdOutlineEvent } from "react-icons/md";
import { IoStatsChartOutline } from "react-icons/io5";
import { LuUsers } from "react-icons/lu";
import { FaCheckDouble } from "react-icons/fa6";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { TerminalSquareIcon, BotIcon, BookOpenIcon, Settings2Icon, LifeBuoyIcon, SendIcon, FrameIcon, PieChartIcon, MapIcon, TerminalIcon } from "lucide-react"

const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navSecondary: [
    {
      title: "Support",
      url: "#",
      icon: (
        <LifeBuoyIcon
        />
      ),
    },
    {
      title: "Feedback",
      url: "#",
      icon: (
        <SendIcon
        />
      ),
    },
  ],
  navMain: [
    {
      name: "Dashboard",
      url: "#",
      icon: (
        <LuLayoutDashboard />
      ),
    },
    {
      name: "Discover",
      url: "#",
      icon: (
        <FiSearch />
      ),
    },
    {
      name: "My tickets",
      url: "/my-tickets",
      icon: (
        <LuTicket />
      ),
    },
    {
      name: "Saved",
      url: "#",
      icon: (
        <FaRegHeart />
      ),
    },
    {
      name: "Profile",
      url: "#",
      icon: (
        <CgProfile />
      ),
    },
  ],
  navOrganizer: [
    {
      name: "My events",
      url: "#",
      icon: (
        <MdOutlineEvent />
      ),
    },
    {
      name: "New event",
      url: "#",
      icon: (
        <IoMdAddCircleOutline />
      ),
    },
    {
      name: "Profile",
      url: "/my-tickets",
      icon: (
        <CgProfile />
      ),
    },
  ],
  navAdmin: [
    {
      name: "Approvals",
      url: "#",
      icon: (
        <FaCheckDouble />
      ),
    },
    {
      name: "Users",
      url: "#",
      icon: (
        <LuUsers />
      ),
    },
     {
      name: "Stats",
      url: "/my-tickets",
      icon: (
        <IoStatsChartOutline />
      ),
    },
    {
      name: "Profile",
      url: "/my-tickets",
      icon: (
        <CgProfile />
      ),
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar variant="inset" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <a href="#">
                <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                  <TerminalIcon className="size-4" />
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-medium">Acme Inc</span>
                  <span className="truncate text-xs">Enterprise</span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  )
}
