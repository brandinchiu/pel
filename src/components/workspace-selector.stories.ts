import type { Meta, StoryObj } from "@storybook/react";

import WorkspaceSelector from "@/components/workspace-selector";

const meta: Meta<typeof WorkspaceSelector> = {
	title: "Design System/Workspace Selector",
	component: WorkspaceSelector,
};

export default meta;

type Story = StoryObj<typeof WorkspaceSelector>;

export const Initial: Story = {
	args: {},
};

export const InitialWithDifferentLabel: Story = {
	name: "With a different label",
	args: {
		label: "account",
	},
};

export const WithAWorkspace: Story = {
	name: "With a workspace",
	args: {
		label: "workspace",
		activeWorkspaceId: "1",
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
		activeWorkspaceId: "1",
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
