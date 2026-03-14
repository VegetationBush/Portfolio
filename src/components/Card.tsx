import React, { useRef } from 'react';
import type { MouseEvent } from 'react';

interface CardProps {
  title?: string;
  description?: string;
  width?: number;
  height?: number;
  children?: React.ReactNode;
}

const Card: React.FC<CardProps & React.HTMLAttributes<HTMLDivElement>> = ({
  width = 350,
  height = 350,
  style,
  children
}) => {
  return (
    <div
        style = {{
          backgroundColor: "var(--background)",
          width: width,
          height: height,
          borderRadius: 25,
          border: "var(--border)",
          boxShadow: "var(--shadow)",
          padding: "15px",
          color: "var(--primary)",
          ...style
        }}>
        {children}
      </div>
  );
};

export default Card;