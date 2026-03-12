import React from "react";
import IconSVG from "./IconSVG";
import "../index.css"

type ButtonSize = "small" | "medium" | "large";
interface CustomButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: ButtonSize;
  label?: string;
  svg?: string;
  onClick?: () => void;
}

const sizeStyles = {
  small: { padding: "8px 10px", fontSize: "0.8rem" },
  medium: { padding: "12px 15px", fontSize: "1rem" },
  large: { padding: "16px 20px", fontSize: "1.2rem" },
};

const Button: React.FC<CustomButtonProps> = ({onClick, label, svg, size = "small", style, ...props }) => {
  return (
    <button
      {...props}
      onClick={onClick}
      style={{
        borderRadius: "12px",
        cursor: "pointer",
        outline: "none",
        fontWeight: 600,

        display: "flex",
        alignItems: "center",
        gap: "6px",
        userSelect: "none",

        color: "var(--primary)",
        ...sizeStyles[size],
        ...style,
      }}
    >
      {svg && <IconSVG svg = {svg} color = "var(--primary)" width = {16} height = {16}/>}
      {label}
    </button>
  );
};

export default Button;