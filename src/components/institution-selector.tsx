"use client";

import React from "react";
import {
  Dropdown,
  DropdownButton,
  DropdownDivider,
  DropdownItem,
  DropdownLabel,
  DropdownMenu,
} from "@/catalyst/dropdown";
import { Avatar } from "@/catalyst/avatar";
import { SidebarItem, SidebarLabel } from "@/catalyst/sidebar";
import {
  ChevronDownIcon,
  Cog8ToothIcon,
  PlusIcon,
} from "@heroicons/react/16/solid";
import { Link } from "@/catalyst/link";

export default function InstitutionSelector({
  institutions,
  activeInstitution
}: {
  activeInstitution: {id: number, name: string, avatar_url: string | null | undefined},
  institutions: {id: number, name: string, avatar_url: string | null | undefined}[]
}) {
  if (!activeInstitution) {
    return (
      <Dropdown>
        <DropdownButton as={SidebarItem} className="lg:mb-2.5">
          <PlusIcon />
          <Link href="/institutions/create">
            <SidebarLabel>Create an institution</SidebarLabel>
          </Link>
        </DropdownButton>
      </Dropdown>
    );
  }

  return (
    <Dropdown>
      {/*Active Team*/}
      <DropdownButton as={SidebarItem} className="lg:mb-2.5">
        {activeInstitution.avatar_url ? (
          <Avatar slot="icon" src={activeInstitution.avatar_url} />
        ) : (
          <Avatar
            slot="icon"
            initials="?"
            className="bg-purple-500 text-white"
          />
        )}
        <SidebarLabel>{activeInstitution.name}</SidebarLabel>
        <ChevronDownIcon />
      </DropdownButton>
      <DropdownMenu className="min-w-80 lg:min-w-64" anchor="bottom start">
        {/*Settings Team*/}
        <DropdownItem href={`/institutions/${activeInstitution.id}/settings`}>
          <Cog8ToothIcon />
          <DropdownLabel>Settings</DropdownLabel>
        </DropdownItem>
        <DropdownDivider />

        {institutions.map((institution) => {
          return (
            <DropdownItem
              key={institution.id}
              onClick={() => {}}
            >
              {institution.avatar_url ? (
                <Avatar slot="icon" src={institution.avatar_url} />
              ) : (
                <Avatar
                  slot="icon"
                  initials="?"
                  className="bg-purple-500 text-white"
                />
              )}
              <DropdownLabel>{institution.name}</DropdownLabel>
            </DropdownItem>
          );
        })}
        <DropdownDivider />

        {/*New Team*/}
        <DropdownItem href="/institutions/create">
          <PlusIcon />
          <DropdownLabel>New institution&hellip;</DropdownLabel>
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
