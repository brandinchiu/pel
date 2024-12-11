"use client";

import React from "react";
import {
  Sidebar as CatalystSidebar,
  SidebarBody,
  SidebarFooter,
  SidebarHeader,
  SidebarHeading,
  SidebarItem,
  SidebarLabel,
  SidebarSection,
  SidebarSpacer,
} from "@/catalyst/sidebar";
import {
  Cog6ToothIcon,
  HomeIcon,
  InboxIcon,
  MagnifyingGlassIcon,
  MegaphoneIcon,
  QuestionMarkCircleIcon,
  SparklesIcon,
  Square2StackIcon,
  TicketIcon,
  UsersIcon,
} from "@heroicons/react/20/solid";
import AccountManager from "@/components/account-manager";
import InstitutionSelector from "@/components/institution-selector";

export default function Sidebar({
  pathname,
  institutions,
}: { pathname: string, institutions: {id: number, name: string, avatar_url: string | null | undefined}[] }) {
  const sidebarItems = [
    {
      href: "/",
      label: "Home",
      icon: <HomeIcon />,
    },
    {
      href: "/events",
      label: "Events",
      icon: <Square2StackIcon />,
    },
    {
      href: "/orders",
      label: "Orders",
      icon: <TicketIcon />,
    },
    {
      href: "/settings",
      label: "Settings",
      icon: <Cog6ToothIcon />,
    },
    {
      href: "/broadcasts",
      label: "Broadcasts",
      icon: <MegaphoneIcon />,
    },
    {
      href: "/users",
      label: "Users",
      icon: <UsersIcon />,
    },
  ];

  return (
    <CatalystSidebar>
      <SidebarHeader>
        {/* TOP DROPDOWN */}
        <InstitutionSelector institutions={institutions} activeInstitution={institutions[0]} />

        <SidebarSection className="max-lg:hidden">
          <SidebarItem href="/search">
            <MagnifyingGlassIcon />
            <SidebarLabel>Search</SidebarLabel>
          </SidebarItem>
          <SidebarItem href="/inbox">
            <InboxIcon />
            <SidebarLabel>Inbox</SidebarLabel>
          </SidebarItem>
        </SidebarSection>
      </SidebarHeader>
      <SidebarBody>
        <SidebarSection>
          {sidebarItems.map((item) => {
            return (
              <SidebarItem
                key={item.href}
                href={item.href}
                current={item.href === pathname}
              >
                {item.icon}
                <SidebarLabel>{item.label}</SidebarLabel>
              </SidebarItem>
            );
          })}
        </SidebarSection>

        <SidebarSection className="max-lg:hidden">
          <SidebarHeading>Upcoming Events</SidebarHeading>
          <SidebarItem href="/events/1">Bear Hug: Live in Concert</SidebarItem>
          <SidebarItem href="/events/2">Viking People</SidebarItem>
          <SidebarItem href="/events/3">Six Fingers — DJ Set</SidebarItem>
          <SidebarItem href="/events/4">We All Look The Same</SidebarItem>
        </SidebarSection>
        <SidebarSpacer />
        <SidebarSection>
          <SidebarItem href="/support">
            <QuestionMarkCircleIcon />
            <SidebarLabel>Support</SidebarLabel>
          </SidebarItem>
          <SidebarItem href="/changelog">
            <SparklesIcon />
            <SidebarLabel>Changelog</SidebarLabel>
          </SidebarItem>
        </SidebarSection>
      </SidebarBody>
      <SidebarFooter className="max-lg:hidden">
        {/* BOTTOM DROPDOWN */}
        <AccountManager />
      </SidebarFooter>
    </CatalystSidebar>
  );
}
