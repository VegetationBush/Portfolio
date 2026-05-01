import "@/styles/button.css"

import React from "react";
import IconSVG from "./IconSVG";

type ButtonSize = "small" | "medium" | "large";
interface CustomButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: ButtonSize;
  label?: string;
  svg?: string;
  collapsible?: boolean;
  onClick?: () => void;
}

const sizeStyles = {
  small: { padding: "0.5rem 0.75rem", fontSize: "0.8rem" },
  medium: { padding: "0.75rem 1rem", fontSize: "1rem" },
  large: { padding: "1rem 1.25rem", fontSize: "1.2rem" },
};

const Button: React.FC<CustomButtonProps> = ({onClick, label, svg, size = "small", collapsible = true, style, ...props }) => {
  return (
    <button
      {...props}
      onClick = {onClick}
      style = {{
        borderRadius: "0.75rem",
        cursor: "pointer",
        outline: "none",
        fontWeight: 600,

        display: "flex",
        alignItems: "center",
        gap: "0.5rem",
        userSelect: "none",
        textWrap: "nowrap",

        color: "var(--primary)",
        ...sizeStyles[size],
        ...style,
      }}
    >
      
      {
        svg && <IconSVG
          svg = {svg}
          color = "var(--primary)"
          width = {"1.1rem"}
          height = {"1.1rem"}
        />
      }
     
      <span className = { collapsible ? "button-collapsable-label" : "" }>
        {label}
      </span>
    </button>
  );
};

export default Button;