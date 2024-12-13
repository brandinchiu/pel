import type { Meta, StoryObj } from "@storybook/react";

import Sidebar from "@/components/sidebar";
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
import React from "react";

const meta: Meta<typeof Sidebar> = {
	title: "Design System/Sidebar",
	component: Sidebar,
};

export default meta;

type Story = StoryObj<typeof Sidebar>;

export const Initial: Story = {
	args: {
		pathname: "/",
		workspaces: [],
	},
};

export const WithAWorkspace: Story = {
	name: "With a workspace",
	args: {
		pathname: "/",
		workspaces: [
			{
				id: "1",
				name: "Acme Corp",
				avatar_url:
					"https://pbs.twimg.com/profile_images/1730334391501488129/G0R0sjHH_400x400.jpg",
			},
		],
	},
};

export const WithMultipleWorkspaces: Story = {
	name: "With multiple workspaces",
	args: {
		pathname: "/",
		workspaces: [
			{
				id: "1",
				name: "Acme Corp",
				avatar_url:
					"https://pbs.twimg.com/profile_images/1730334391501488129/G0R0sjHH_400x400.jpg",
			},
			{
				id: "2",
				name: "Acme Limited",
				avatar_url:
					"https://pbs.twimg.com/profile_images/1260924852028026881/48VQXP0n_400x400.jpg",
			},
		],
	},
};

export const WithTopLinks: Story = {
	name: "With top nav links",
	args: {
		pathname: "/",
		workspaces: [
			{
				id: "1",
				name: "Acme Corp",
				avatar_url:
					"https://pbs.twimg.com/profile_images/1730334391501488129/G0R0sjHH_400x400.jpg",
			},
			{
				id: "2",
				name: "Acme Limited",
				avatar_url:
					"https://pbs.twimg.com/profile_images/1260924852028026881/48VQXP0n_400x400.jpg",
			},
		],
		topNavLinks: [
			{
				href: "/search",
				label: "Search",
				icon: <MagnifyingGlassIcon />,
			},
			{
				href: "/inbox",
				label: "Inbox",
				icon: <InboxIcon />,
			},
		],
	},
};

export const WithMainLinks: Story = {
	name: "With main nav links",
	args: {
		pathname: "/",
		workspaces: [
			{
				id: "1",
				name: "Acme Corp",
				avatar_url:
					"https://pbs.twimg.com/profile_images/1730334391501488129/G0R0sjHH_400x400.jpg",
			},
			{
				id: "2",
				name: "Acme Limited",
				avatar_url:
					"https://pbs.twimg.com/profile_images/1260924852028026881/48VQXP0n_400x400.jpg",
			},
		],
		mainNavLinks: [
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
		],
	},
};

export const WithADifferentActiveLink: Story = {
	name: "With a different active link",
	args: {
		pathname: "/events",
		workspaces: [
			{
				id: "1",
				name: "Acme Corp",
				avatar_url:
					"https://pbs.twimg.com/profile_images/1730334391501488129/G0R0sjHH_400x400.jpg",
			},
		],
		mainNavLinks: [
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
		],
	},
};

export const WithShortcutLinks: Story = {
	name: "With shortcuts",
	args: {
		pathname: "/",
		workspaces: [
			{
				id: "1",
				name: "Acme Corp",
				avatar_url:
					"https://pbs.twimg.com/profile_images/1730334391501488129/G0R0sjHH_400x400.jpg",
			},
			{
				id: "2",
				name: "Acme Limited",
				avatar_url:
					"https://pbs.twimg.com/profile_images/1260924852028026881/48VQXP0n_400x400.jpg",
			},
		],
		mainNavLinks: [
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
		],
		shortcuts: [
			{
				href: "/events/1",
				label: "Bear Hug: Live in Concert",
			},
			{
				href: "/events/2",
				label: "Viking People",
			},
			{
				href: "/events/3",
				label: "Six Fingers — DJ Set",
			},
			{
				href: "/events/4",
				label: "We All Look The Same",
			},
		],
	},
};

export const WithBottomLinks: Story = {
	name: "With bottom nav links",
	args: {
		pathname: "/",
		workspaces: [
			{
				id: "1",
				name: "Acme Corp",
				avatar_url:
					"https://pbs.twimg.com/profile_images/1730334391501488129/G0R0sjHH_400x400.jpg",
			},
			{
				id: "2",
				name: "Acme Limited",
				avatar_url:
					"https://pbs.twimg.com/profile_images/1260924852028026881/48VQXP0n_400x400.jpg",
			},
		],
		bottomNavLinks: [
			{
				href: "/support",
				label: "Support",
				icon: <QuestionMarkCircleIcon />,
			},
			{
				href: "/changelog",
				label: "Changelog",
				icon: <SparklesIcon />,
			},
		],
	},
};

export const Full: Story = {
	name: "Full example",
	args: {
		pathname: "/",
		workspaces: [
			{
				id: "1",
				name: "Acme Corp",
				avatar_url:
					"https://pbs.twimg.com/profile_images/1730334391501488129/G0R0sjHH_400x400.jpg",
			},
			{
				id: "2",
				name: "Acme Limited",
				avatar_url:
					"https://pbs.twimg.com/profile_images/1260924852028026881/48VQXP0n_400x400.jpg",
			},
		],
		topNavLinks: [
			{
				href: "/search",
				label: "Search",
				icon: <MagnifyingGlassIcon />,
			},
			{
				href: "/inbox",
				label: "Inbox",
				icon: <InboxIcon />,
			},
		],
		mainNavLinks: [
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
		],
		shortcutsLabel: "Upcoming Events",
		shortcuts: [
			{
				href: "/events/1",
				label: "Bear Hug: Live in Concert",
			},
			{
				href: "/events/2",
				label: "Viking People",
			},
			{
				href: "/events/3",
				label: "Six Fingers — DJ Set",
			},
			{
				href: "/events/4",
				label: "We All Look The Same",
			},
		],
		bottomNavLinks: [
			{
				href: "/support",
				label: "Support",
				icon: <QuestionMarkCircleIcon />,
			},
			{
				href: "/changelog",
				label: "Changelog",
				icon: <SparklesIcon />,
			},
		],
		user: {
			full_name: "Jane Doe",
			email: "jane@example.com",
			avatar_url: "https://randomuser.me/api/portraits/women/64.jpg",
		},
	},
};
