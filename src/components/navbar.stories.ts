import type { Meta, StoryObj } from "@storybook/react";
import Navbar from "@/components/navbar";

const meta: Meta<typeof Navbar> = {
	title: "Design System/Navbar",
	component: Navbar,
};

export default meta;

type Story = StoryObj<typeof Navbar>;

export const Basic: Story = {};
