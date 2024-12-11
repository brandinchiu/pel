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

export const Basic: Story = {
  args: {
    navbar: Navbar({}),
    sidebar: Sidebar({
      institutions: [{id: 1, name: 'Acme Corp', avatar_url: 'https://pbs.twimg.com/profile_images/1730334391501488129/G0R0sjHH_400x400.jpg'}],
    })
  }
}
