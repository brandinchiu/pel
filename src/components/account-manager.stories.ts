import type { Meta, StoryObj } from "@storybook/react";

import AccountManager from "@/components/account-manager";

const meta: Meta<typeof AccountManager> = {
  title: "Design System/Account Manager",
  component: AccountManager
};

export default meta;

type Story = StoryObj<typeof AccountManager>;

export const Basic: Story = {
  args: {

  }
}
