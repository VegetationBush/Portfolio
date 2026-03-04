import React from "react";
import "../index.css"

type ButtonSize = "small" | "medium" | "large";
interface CustomButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: ButtonSize;
  label?: string;
  imgSrc?: string;
  useBorder?: boolean;
}

const sizeStyles = {
  small: { padding: "8px 10px", fontSize: "0.8rem" },
  medium: { padding: "12px 15px", fontSize: "1rem" },
  large: { padding: "16px 20px", fontSize: "1.2rem" },
};

const Button: React.FC<CustomButtonProps> = ({useBorder = true, label, imgSrc, size = "small", style, ...props }) => {
  return (
    <button
      {...props}
      style={{
        border: useBorder && "1px solid #e5e7eb" || "",
        borderRadius: "12px",
        cursor: "pointer",
        outline: "none",
        fontWeight: 600,

        display: "flex",
        alignItems: "center",
        gap: "6px",
        userSelect: "none",

        transition: "all 0.2s ease",
        color: "black",
        ...sizeStyles[size],
        ...style,
      }}
    >
      {imgSrc && <img src={imgSrc} alt="" style={{ width: 16, height: 16, fill: "var(--primary)"}}/>}
      {label}
    </button>
  );
};

export default Button;