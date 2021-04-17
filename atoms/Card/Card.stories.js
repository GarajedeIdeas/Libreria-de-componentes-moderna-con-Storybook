import Card from ".";
import { options } from "./constants";

const Template = (args) => <Card {...args} />;
const ListTemplate = ({ items, ...args }) =>
  items.map((item, index) => <Card key={index} {...args} {...item} />);

export default {
  title: "Atoms/Card",
  component: Card,
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

export const Colors = ListTemplate.bind({})
Colors.args = { items: options.colors.map((color) => ({ color })) }

export const Sizes = ListTemplate.bind({})
Sizes.args = { items: options.sizes.map((size) => ({ size })) }
