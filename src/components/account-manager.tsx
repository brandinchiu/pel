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
import {
	ArrowRightStartOnRectangleIcon,
	ChevronUpIcon,
	Cog8ToothIcon,
	LightBulbIcon,
	ShieldCheckIcon,
	UserIcon,
} from "@heroicons/react/16/solid";
import { SidebarItem } from "@/catalyst/sidebar";

export default function AccountManager() {
	return (
		<Dropdown>
			<DropdownButton as={SidebarItem}>
				<span className="flex min-w-0 items-center gap-3">
					<Avatar
						src="https://randomuser.me/api/portraits/women/64.jpg"
						className="size-10"
						square
						alt=""
					/>
					<span className="min-w-0">
						<span className="block truncate text-sm/5 font-medium text-zinc-950 dark:text-white">
							{"Anonymous"}
						</span>
						<span className="block truncate text-xs/5 font-normal text-zinc-500 dark:text-zinc-400">
							{"john.doe@example.com"}
						</span>
					</span>
				</span>
				<ChevronUpIcon />
			</DropdownButton>
			<DropdownMenu className="min-w-64" anchor="top start">
				<DropdownItem href="/my-profile">
					<UserIcon />
					<DropdownLabel>My profile</DropdownLabel>
				</DropdownItem>
				<DropdownItem href="/settings">
					<Cog8ToothIcon />
					<DropdownLabel>Settings</DropdownLabel>
				</DropdownItem>
				<DropdownDivider />
				<DropdownItem href="/privacy-policy">
					<ShieldCheckIcon />
					<DropdownLabel>Privacy policy</DropdownLabel>
				</DropdownItem>
				<DropdownItem href="/share-feedback">
					<LightBulbIcon />
					<DropdownLabel>Share feedback</DropdownLabel>
				</DropdownItem>
				<DropdownDivider />
				<DropdownItem>
					<ArrowRightStartOnRectangleIcon />
					<DropdownLabel onClick={() => {}}>Sign out</DropdownLabel>
				</DropdownItem>
			</DropdownMenu>
		</Dropdown>
	);
}
