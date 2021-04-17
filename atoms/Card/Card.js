import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import styles from "./Card.module.css";
import { options } from "./constants";

import { getClasses } from "../../helpers/styles";

export const Card = ({
  onClick,
  isClickable,
  isDraggable,
  children,
  color,
  size,
}) => {
  const getStyles = getClasses(styles)({
    color,
    size,
    isClickable,
    isDraggable,
  });

  return (
    <div
      onClick={onClick}
      className={getStyles("card", ["color", "size"], {
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
