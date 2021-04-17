import Card from ".";
import { options } from "./constants";

const Template = (args) => <Card {...args} />;
const ListTemplate = ({ items, ...args }) =>
  items.map((item, index) => <Card key={index} {...args} {...item} />);

export default {
  title: "Atoms/Card",
  component: Card,
  args: {
    children:
      "Lacerations coaster sort comings windlance happily EIf-witch handful unbefitting? Decide rising startled Aragorn invitations midnight deserves fortunes innards. You cannot hide. I see you. There is no life in the void. Only death. Mirror Emyn dreamed!",
  },
  argTypes: {
    color: {
      description: "**options:**",
      table: {
        type: {
          summary: options.colors.map((option) => `'${option}'`).join("|"),
        },
      },
      control: { type: "select", options: options.colors },
    },
    size: {
      description: "**options:**",
      table: {
        type: {
          summary: options.sizes.map((option) => `'${option}'`).join("|"),
        },
      },
      control: { type: "select", options: options.sizes },
    },
    children: { control: "text" },
  },
};

export const Default = Template.bind({});

export const Clickable = Template.bind({});
Clickable.args = {
  isClickable: true,
};

export const Dragabble = Template.bind({});
Dragabble.args = {
  isDraggable: true,
};

export const Colors = ListTemplate.bind({});
Colors.args = { items: options.colors.map((color) => ({ color })) };

export const Sizes = ListTemplate.bind({});
Sizes.args = { items: options.sizes.map((size) => ({ size })) };
