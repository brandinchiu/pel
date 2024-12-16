"use client";

import React, { ReactElement } from "react";
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
} from "@heroicons/react/16/solid";
import { SidebarItem } from "@/catalyst/sidebar";

interface Props {
	user?: {
		full_name: string;
		email: string;
		avatar_url: string | null | undefined;
	};
	topNavLinks: {
		href: string;
		label: string;
		icon: ReactElement<{ title?: string; titleId?: string }>;
	}[];
	bottomNavLinks: {
		href: string;
		label: string;
		icon: ReactElement<{ title?: string; titleId?: string }>;
	}[];
}

/**
 * returns initials used by user avatar.
 * @param fullName
 * @return string
 */
function getInitials(fullName?: string): string {
	if (!fullName) {
		return "?";
	}

	const parts = fullName.split(" ");

	return parts[0].charAt(0) + (parts.length > 1 ? parts[1].charAt(0) : "");
}

export default function AccountManager({
	user,
	topNavLinks,
	bottomNavLinks,
}: Props) {
	return (
		<Dropdown>
			<DropdownButton as={SidebarItem}>
				<span className="flex min-w-0 items-center gap-3">
					<Avatar
						src={user?.avatar_url}
						initials={getInitials(user?.full_name)}
						className="size-10"
						square
						alt=""
					/>
					<span className="min-w-0">
						<span className="block truncate text-sm/5 font-medium text-zinc-950 dark:text-white">
							{user?.full_name || "Anonymous"}
						</span>
						<span className="block truncate text-xs/5 font-normal text-zinc-500 dark:text-zinc-400">
							{user?.email}
						</span>
					</span>
				</span>
				<ChevronUpIcon />
			</DropdownButton>
			<DropdownMenu className="min-w-64" anchor="top start">
				{topNavLinks.map((item) => {
					return (
						<DropdownItem key={item.href} href={item.href}>
							{item.icon}
							<DropdownLabel>{item.label}</DropdownLabel>
						</DropdownItem>
					);
				})}
				{topNavLinks.length > 0 && <DropdownDivider />}
				{bottomNavLinks.map((item) => {
					return (
						<DropdownItem key={item.href} href={item.href}>
							{item.icon}
							<DropdownLabel>{item.label}</DropdownLabel>
						</DropdownItem>
					);
				})}
				{bottomNavLinks.length > 0 && <DropdownDivider />}
				<DropdownItem href="/auth/signout">
					<ArrowRightStartOnRectangleIcon />
					<DropdownLabel>Sign out</DropdownLabel>
				</DropdownItem>
			</DropdownMenu>
		</Dropdown>
	);
}
