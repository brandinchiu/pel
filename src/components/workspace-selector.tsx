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

interface Props {
	label?: string;
	activeWorkspaceId: string | undefined;
	workspaces: {
		id: string;
		name: string;
		avatar_url: string | null | undefined;
	}[];
}

export default function WorkspaceSelector({
	label = "workspace",
	activeWorkspaceId,
	workspaces,
}: Props) {
	const activeWorkspace =
		activeWorkspaceId && workspaces.length > 0
			? workspaces.find((workspace) => workspace.id === activeWorkspaceId)
			: null;

	if (!activeWorkspace) {
		return (
			<Dropdown>
				<DropdownButton as={SidebarItem} className="lg:mb-2.5">
					<PlusIcon />
					<Link href="/workspaces/create">
						<SidebarLabel>Create {label}</SidebarLabel>
					</Link>
				</DropdownButton>
			</Dropdown>
		);
	}

	return (
		<Dropdown>
			{/*Active Team*/}
			<DropdownButton as={SidebarItem} className="lg:mb-2.5">
				{activeWorkspace.avatar_url ? (
					<Avatar slot="icon" src={activeWorkspace.avatar_url} />
				) : (
					<Avatar
						slot="icon"
						initials="?"
						className="bg-purple-500 text-white"
					/>
				)}
				<SidebarLabel>{activeWorkspace.name}</SidebarLabel>
				<ChevronDownIcon />
			</DropdownButton>
			<DropdownMenu className="min-w-80 lg:min-w-64" anchor="bottom start">
				{/*Settings Team*/}
				<DropdownItem href={`/institutions/${activeWorkspace.id}/settings`}>
					<Cog8ToothIcon />
					<DropdownLabel>Settings</DropdownLabel>
				</DropdownItem>
				<DropdownDivider />

				{workspaces.map((workspace) => {
					return (
						<DropdownItem key={workspace.id} onClick={() => {}}>
							{workspace.avatar_url ? (
								<Avatar slot="icon" src={workspace.avatar_url} />
							) : (
								<Avatar
									slot="icon"
									initials="?"
									className="bg-purple-500 text-white"
								/>
							)}
							<DropdownLabel>{workspace.name}</DropdownLabel>
						</DropdownItem>
					);
				})}
				<DropdownDivider />

				{/*New Team*/}
				<DropdownItem href="/institutions/create">
					<PlusIcon />
					<DropdownLabel>New {label} &hellip;</DropdownLabel>
				</DropdownItem>
			</DropdownMenu>
		</Dropdown>
	);
}
