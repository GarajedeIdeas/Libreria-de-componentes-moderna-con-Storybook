import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import "./Card.css";
import { options } from "./constants";

export const Card = ({
  onClick,
  isClickable,
  isDraggable,
  children,
  color,
  size,
}) => {
  return (
    <div
      onClick={onClick}
      className={classNames("card", {
        [`color-${color}`]: color,
        [`size-${size}`]: size,
        "is-clickable": isClickable,
        "is-draggable": isDraggable,
      })}
    >
      {children}
    </div>
  );
};

Card.propTypes = {
  children: PropTypes.node.isRequired,
  getStyles: PropTypes.func.isRequired,
  onClick: PropTypes.func,
  color: PropTypes.oneOf(options.colors),
  size: PropTypes.oneOf(options.sizes),
  isClickable: PropTypes.bool,
  isDraggable: PropTypes.bool,
};

Card.defaultProps = {
  color: "base",
  size: "sm",
};

export default Card;
