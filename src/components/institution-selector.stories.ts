import type { Meta, StoryObj } from "@storybook/react";

import InstitutionSelector from "@/components/institution-selector";

const meta: Meta<typeof InstitutionSelector> = {
  title: "Design System/Institution Selector",
  component: InstitutionSelector
}

export default meta;

type Story = StoryObj<typeof InstitutionSelector>;

export const Initial: Story = {
  args: {

  }
}

export const WithAWorkspace: Story = {
  name: "With a workspace",
  args: {
    activeInstitution: {id: 1, name: 'Acme Corp', avatar_url: 'https://pbs.twimg.com/profile_images/1730334391501488129/G0R0sjHH_400x400.jpg'},
    institutions: [{id: 1, name: 'Acme Corp', avatar_url: 'https://pbs.twimg.com/profile_images/1730334391501488129/G0R0sjHH_400x400.jpg'}]
  }
}

export const WithMultipleWorkspaces: Story = {
  name: "With multiple workspaces",
  args: {
    activeInstitution: {id: 1, name: 'Acme Corp', avatar_url: 'https://pbs.twimg.com/profile_images/1730334391501488129/G0R0sjHH_400x400.jpg'},
    institutions: [
      {id: 1, name: 'Acme Corp', avatar_url: 'https://pbs.twimg.com/profile_images/1730334391501488129/G0R0sjHH_400x400.jpg'},
      {id: 2, name: 'Acme Limited', avatar_url: 'https://pbs.twimg.com/profile_images/1260924852028026881/48VQXP0n_400x400.jpg'}
    ]
  }
}
