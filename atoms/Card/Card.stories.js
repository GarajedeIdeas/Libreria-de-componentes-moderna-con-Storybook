import Card from ".";
import { options } from "./constants";

const Template = (args) => <Card {...args} />;

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

export const Colors = () =>
  options.colors.map((color, index) => <Card key={index} color={color} />);

export const Sizes = () =>
  options.sizes.map((size, index) => <Card key={index} size={size} />);
