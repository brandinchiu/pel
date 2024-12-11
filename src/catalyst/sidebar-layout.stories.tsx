import type { Meta, StoryObj } from "@storybook/react";

import {SidebarLayout} from "@/catalyst/sidebar-layout";
import {Navbar} from "@/catalyst/navbar";
import Sidebar from "@/components/sidebar";

const meta: Meta<typeof SidebarLayout> = {
  title: "Catalyst/Sidebar Layout",
  component: SidebarLayout
}

export default meta;

type Story = StoryObj<typeof SidebarLayout>;

export const Initial: Story = {
  args: {
    navbar: Navbar({}),
    sidebar: Sidebar({
      pathname: '/',
      institutions: [],
    })
  }
}

export const WithAWorkspace: Story = {
  name: "With a workspace",
  args: {
    navbar: Navbar({}),
    sidebar: Sidebar({
      pathname: '/',
      institutions: [{id: 1, name: 'Acme Corp', avatar_url: 'https://pbs.twimg.com/profile_images/1730334391501488129/G0R0sjHH_400x400.jpg'}],
    })
  }
}

export const SidebarActiveLink: Story = {
  name: "With a different active link",
  args: {
    navbar: Navbar({}),
    sidebar: Sidebar({
      pathname: '/events',
      institutions: [{id: 1, name: 'Acme Corp', avatar_url: 'https://pbs.twimg.com/profile_images/1730334391501488129/G0R0sjHH_400x400.jpg'}],
    })
  }
}

export const WithMultipleWorkspaces: Story = {
  name: "With multiple workspaces",
  args: {
    navbar: Navbar({}),
    sidebar: Sidebar({
      pathname: '/',
      institutions: [
        {id: 1, name: 'Acme Corp', avatar_url: 'https://pbs.twimg.com/profile_images/1730334391501488129/G0R0sjHH_400x400.jpg'},
        {id: 2, name: 'Acme Ltd', avatar_url: 'https://pbs.twimg.com/profile_images/1730334391501488129/G0R0sjHH_400x400.jpg'}
      ],
    })
  }
}
