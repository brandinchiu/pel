import React from "react";
import {
	Navbar as CatalystNavbar,
	NavbarItem,
	NavbarSection,
	NavbarSpacer,
} from "@/catalyst/navbar";
import { InboxIcon, MagnifyingGlassIcon } from "@heroicons/react/20/solid";
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
	Cog8ToothIcon,
	LightBulbIcon,
	ShieldCheckIcon,
	UserIcon,
} from "@heroicons/react/16/solid";

export default function Navbar() {
	return (
		<CatalystNavbar>
			<NavbarSpacer />
			<NavbarSection>
				<NavbarItem href="/search" aria-label="Search">
					<MagnifyingGlassIcon />
				</NavbarItem>
				<NavbarItem href="/inbox" aria-label="Inbox">
					<InboxIcon />
				</NavbarItem>
				<Dropdown>
					<DropdownButton as={NavbarItem}>
						<Avatar
							src="https://randomuser.me/api/portraits/men/51.jpg"
							square
						/>
					</DropdownButton>
					<DropdownMenu className="min-w-64" anchor="bottom end">
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
						<DropdownItem href="/logout">
							<ArrowRightStartOnRectangleIcon />
							<DropdownLabel>Sign out</DropdownLabel>
						</DropdownItem>
					</DropdownMenu>
				</Dropdown>
			</NavbarSection>
		</CatalystNavbar>
	);
}
