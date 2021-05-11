import { Meta, Story } from "@storybook/react/types-6-0";
import React from "react";
import { IconLink } from "../../../src/components";
import { IconLinkProps } from "../../../src/types/icon-link/icon-link";

export default {
  title: "Components/IconLink",
  component: IconLink,
  parameters: {
    layout: "centered",
  },
} as Meta;

// Template
const Template: Story<IconLinkProps> = (args) => {
  return <IconLink {...args} />;
};

// Stories
export const Default = Template.bind({});
Default.args = {
  label: "Go to twitter",
  href: "https://www.twitter.com",
};

export const ButtonIconLink = Template.bind({});
ButtonIconLink.args = {
  label: "Gallery",
  onClick: () => {
    // eslint-disable-next-line no-alert
    alert("IconLink Button Clicked!");
  },
};
