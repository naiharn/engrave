import React from "react";

const sizeClasses = {
  txtYrsaBold40: "font-bold font-yrsa",
  txtYesevaOneRegular100: "font-normal font-yesevaone",
  txtRajdhaniSemiBold35: "font-rajdhani font-semibold",
  txtYrsaBold36: "font-bold font-yrsa",
  txtYesevaOneRegular70: "font-normal font-yesevaone",
  txtYrsaRegular60: "font-normal font-yrsa",
  txtRajdhaniSemiBold35Black9009b01: "font-rajdhani font-semibold",
  txtYrsaSemiBold32Lightgreen100: "font-semibold font-yrsa",
  txtYrsaSemiBold32: "font-semibold font-yrsa",
  txtVollkornRomanRegular45: "font-normal font-vollkorn",
  txtYrsaRegular40: "font-normal font-yrsa",
  txtWallpoet100: "font-normal font-wallpoet",
  txtRajdhaniSemiBold35Black9009b: "font-rajdhani font-semibold",
  txtTrispaceRegular30: "font-normal font-trispace",
  txtVollkornRomanRegular20: "font-normal font-vollkorn",
  txtRajdhaniRegular30: "font-normal font-rajdhani",
  txtVollkornRomanRegular40: "font-normal font-vollkorn",
  txtVollkornRomanRegular30: "font-normal font-vollkorn",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
