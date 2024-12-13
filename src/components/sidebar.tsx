import React, { ReactElement } from "react";
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
import AccountManager from "@/components/account-manager";
import WorkspaceSelector from "@/components/workspace-selector";
import {
	Cog8ToothIcon,
	LightBulbIcon,
	ShieldCheckIcon,
	UserIcon,
} from "@heroicons/react/16/solid";

interface Props {
	pathname: string | undefined;
	workspaces: {
		id: string;
		name: string;
		avatar_url: string | null | undefined;
	}[];
	topNavLinks: {
		href: string;
		label: string;
		icon: ReactElement<{ title?: string; titleId?: string }>;
	}[];
	mainNavLinks: {
		href: string;
		label: string;
		icon: ReactElement<{ title?: string; titleId?: string }>;
	}[];
	shortcutsLabel: string | undefined;
	shortcuts: {
		href: string;
		label: string;
	}[];
	bottomNavLinks: {
		href: string;
		label: string;
		icon: ReactElement<{ title?: string; titleId?: string }>;
	}[];
	user: {
		full_name: string;
		email: string;
		avatar_url: string | null | undefined;
	};
}

export default function Sidebar({
	pathname,
	workspaces,
	topNavLinks = [],
	mainNavLinks = [],
	shortcutsLabel,
	shortcuts = [],
	bottomNavLinks = [],
	user,
}: Props) {
	return (
		<CatalystSidebar>
			<SidebarHeader>
				{/* TOP DROPDOWN */}
				<WorkspaceSelector
					workspaces={workspaces}
					activeWorkspaceId={
						workspaces.length > 0 ? workspaces[0].id : undefined
					}
				/>

				{topNavLinks.length > 0 && (
					<SidebarSection className="max-lg:hidden">
						{topNavLinks.map((item) => {
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
				)}
			</SidebarHeader>
			<SidebarBody>
				{mainNavLinks.length > 0 && (
					<SidebarSection>
						{mainNavLinks.map((item) => {
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
				)}
				{shortcuts.length > 0 && (
					<SidebarSection className="max-lg:hidden">
						{shortcutsLabel && (
							<SidebarHeading>{shortcutsLabel}</SidebarHeading>
						)}
						{shortcuts.map((item) => {
							return (
								<SidebarItem key={item.href} href={item.href}>
									{item.label}
								</SidebarItem>
							);
						})}
					</SidebarSection>
				)}
				{(mainNavLinks.length > 0 || shortcuts.length > 0) && <SidebarSpacer />}
				{bottomNavLinks.length > 0 && (
					<SidebarSection>
						{bottomNavLinks.map((item) => {
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
				)}
			</SidebarBody>
			<SidebarFooter className="max-lg:hidden">
				{/* BOTTOM DROPDOWN */}
				<AccountManager
					user={user}
					topNavLinks={[
						{
							href: "/my-profile",
							label: "My profile",
							icon: <UserIcon />,
						},
						{
							href: "/settings",
							label: "Settings",
							icon: <Cog8ToothIcon />,
						},
					]}
					bottomNavLinks={[
						{
							href: "/privacy-policy",
							label: "Privacy policy",
							icon: <ShieldCheckIcon />,
						},
						{
							href: "/share-feedback",
							label: "Share feedback",
							icon: <LightBulbIcon />,
						},
					]}
				/>
			</SidebarFooter>
		</CatalystSidebar>
	);
}
