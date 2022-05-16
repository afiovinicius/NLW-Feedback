import { Story, Meta } from "@storybook/react";
import { Widget } from "./widget";

export default {
  title: "Widget",
  component: Widget,
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
} as Meta;

const btnWidget: Story = (args) => <Widget {...args} />;

export const Feedback = btnWidget.bind({});

Feedback.args = {
  Action: false,
};
