import type { Meta, StoryObj } from "@storybook/react";

import { Avatar } from "./avatar";

const meta: Meta<typeof Avatar> = {
	title: "Catalyst/Avatar",
	component: Avatar,
};

export default meta;

type Story = StoryObj<typeof Avatar>;

export const BasicWithImage: Story = {
	name: "Basic with image",
	args: {
		src: "https://randomuser.me/api/portraits/women/82.jpg",
		square: false,
		alt: "profile picture of Jane Doe",
		title: "Jane Doe",
		className: "size-12",
	},
};

export const BasicWithInitials: Story = {
	name: "Basic with initials",
	args: {
		initials: "JD",
		square: false,
		alt: "profile picture of Jane Doe",
		title: "Jane Doe",
		className: "size-12 bg-slate-800",
	},
};
