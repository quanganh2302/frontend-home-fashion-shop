import React from "react";
import "./Button.scss";
const Button = (props) => {
  const {
    width,
    height,
    border,
    radius,
    color,
    fontSize,
    fontWeight,
    className,
    text,
    bgColor,
  } = props;
  return (
    <section
      className={className}
      style={{
        backgroundColor: bgColor,
        width: width,
        height: height,
        border: border,
        borderRadius: radius,
        fontSize: fontSize,
        color: color,
        lineHeight: height,
        fontWeight: fontWeight,
        textAlign: "center",
        textTransform: "uppercase",
        cursor: "pointer",
      }}
    >
      {text}
    </section>
  );
};

export default Button;
