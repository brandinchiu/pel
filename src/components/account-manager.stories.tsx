import type { Meta, StoryObj } from "@storybook/react";

import AccountManager from "@/components/account-manager";
import {
	Cog8ToothIcon,
	LightBulbIcon,
	ShieldCheckIcon,
	UserIcon,
} from "@heroicons/react/16/solid";
import React from "react";

const meta: Meta<typeof AccountManager> = {
	title: "Design System/Account Manager",
	component: AccountManager,
};

export default meta;

type Story = StoryObj<typeof AccountManager>;

export const Basic: Story = {
	args: {
		topNavLinks: [],
		bottomNavLinks: [],
	},
};

export const WithUser: Story = {
	name: "With user",
	args: {
		user: {
			full_name: "Jane Doe",
			email: "jane@example.com",
			avatar_url: "https://randomuser.me/api/portraits/women/64.jpg",
		},
		topNavLinks: [],
		bottomNavLinks: [],
	},
};

export const WithoutProfilePicture: Story = {
	name: "Without profile picture",
	args: {
		user: {
			full_name: "Jane Doe",
			email: "jane@example.com",
			avatar_url: undefined,
		},
		topNavLinks: [],
		bottomNavLinks: [],
	},
};

export const WithTopLinks: Story = {
	name: "With top nav links",
	args: {
		user: {
			full_name: "Jane Doe",
			email: "jane@example.com",
			avatar_url: "https://randomuser.me/api/portraits/women/64.jpg",
		},
		topNavLinks: [
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
		],
		bottomNavLinks: [],
	},
};

export const WithBottomLinks: Story = {
	name: "With bottom nav links",
	args: {
		user: {
			full_name: "Jane Doe",
			email: "jane@example.com",
			avatar_url: "https://randomuser.me/api/portraits/women/64.jpg",
		},
		topNavLinks: [
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
		],
		bottomNavLinks: [
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
		],
	},
};

export const FullExample: Story = {
	name: "Full example",
	args: {
		user: {
			full_name: "Jane Doe",
			email: "jane@example.com",
			avatar_url: "https://randomuser.me/api/portraits/women/64.jpg",
		},
		topNavLinks: [
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
		],
		bottomNavLinks: [
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
		],
	},
};
