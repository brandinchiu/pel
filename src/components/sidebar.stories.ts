import type { Meta, StoryObj } from "@storybook/react";

import Sidebar from "@/components/sidebar";

const meta: Meta<typeof Sidebar> = {
  title: "Design System/Sidebar",
  component: Sidebar
}

export default meta;

type Story = StoryObj<typeof Sidebar>;

export const Initial: Story = {
  args: {
    pathname: '/',
    institutions: []
  }
}

export const WithAWorkspace: Story = {
  name: 'With a workspace',
  args: {
    pathname: '/',
    institutions: [{id: 1, name: 'Acme Corp', avatar_url: 'https://pbs.twimg.com/profile_images/1730334391501488129/G0R0sjHH_400x400.jpg'}],
  }
}

export const WithADifferentActiveLink: Story = {
  args: {
    pathname: "/events",
    institutions: [{
      "id": 1,
      "name": "Acme Corp",
      "avatar_url": "https://pbs.twimg.com/profile_images/1730334391501488129/G0R0sjHH_400x400.jpg"
    }]
  },
  name: "With a different active link"
};

export const WithMultipleWorkspaces: Story = {
  name: 'With multiple workspaces',
  args: {
    pathname: '/',
    institutions: [
      {id: 1, name: 'Acme Corp', avatar_url: 'https://pbs.twimg.com/profile_images/1730334391501488129/G0R0sjHH_400x400.jpg'},
      {id: 2, name: 'Acme Limited', avatar_url: 'https://pbs.twimg.com/profile_images/1260924852028026881/48VQXP0n_400x400.jpg'}
    ],
  }
}
