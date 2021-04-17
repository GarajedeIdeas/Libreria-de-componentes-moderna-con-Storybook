import Card from ".";
import { options } from "./constants";

export default {
  title: "Atoms/Card",
  component: Card,
};

export const Default = () => <Card />;

export const Clickable = () => <Card isClickable />;

export const Dragabble = () => <Card isDraggable />;

export const Colors = () => options.colors.map((color, index) => (
  <Card key={index} color={color} />
));

export const Sizes = () => options.sizes.map((size, index) => (
  <Card key={index} size={size} />
));
