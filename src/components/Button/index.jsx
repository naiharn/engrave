import React from "react";
import PropTypes from "prop-types";

const shapes = { round: "rounded-[10px]", square: "rounded-none" };
const variants = {
  fill: {
    gray_500_04: "bg-gray-500_04 text-gray-700_02",
    teal_900_87: "bg-teal-900_87 text-white-A700",
    teal_900: "bg-teal-900 text-white-A700",
  },
};
const sizes = { xs: "p-2", sm: "p-[18px]" };

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "square",
  size = "xs",
  variant = "fill",
  color = "teal_900",
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${
        (size && sizes[size]) || ""
      } ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf(["round", "square"]),
  size: PropTypes.oneOf(["xs", "sm"]),
  variant: PropTypes.oneOf(["fill"]),
  color: PropTypes.oneOf(["gray_500_04", "teal_900_87", "teal_900"]),
};

export { Button };
