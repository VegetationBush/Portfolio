import React, { useRef } from 'react';
import type { MouseEvent } from 'react';

interface PerspectiveCardProps {
  title?: string;
  description?: string;
  width?: string;
  height?: string;
  children?: React.ReactNode;
  cardStyle?: React.CSSProperties,
}

const PERSPECTIVE_CARD_STRENGTH = 0.3
const PerspectiveCard: React.FC<PerspectiveCardProps & React.HTMLAttributes<HTMLDivElement>> = ({
  width,
  height,
  style,
  cardStyle,
  children
}) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    // retrieving values
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    const cardCenterX = rect.left + rect.width / 2;
    const cardCenterY = rect.top + rect.height / 2;

    const angle = Math.atan2(mouseY - cardCenterY, mouseX - cardCenterX);
    const percentX = Math.abs((mouseX - cardCenterX) / (card.offsetWidth / 2)); // percent distance from the center and outer x bound
    const percentY = Math.abs((mouseY - cardCenterY) / (card.offsetHeight / 2)); // percent distance from the center and outer y bound

    // percentY is used on rotateX and vice versa since their axis rotates each other
    const rotateX = Math.sin(angle) * -PERSPECTIVE_CARD_STRENGTH * percentY;
    const rotateY = Math.cos(angle) * PERSPECTIVE_CARD_STRENGTH * percentX;
    card.style.transform = `rotateX(${rotateX}rad) rotateY(${rotateY}rad)`;
  };

  const handleMouseLeave = () => {
    if (!cardRef.current) return;

    const card = cardRef.current;
    card.style.transform = 'rotateX(0deg) rotateY(0deg)';
  };

  return (
    <div
      className="interactive-card-container"
      style={{
        position: "absolute",
        perspective: "1500px",
        height: height,
        
        width: width,
        ...style
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div
        ref = {cardRef}
        style = {{
          transition: 'transform 0.2s ease-out',

          backgroundColor: "var(--background)",
          width: "100%",
          height: "100%",
          borderRadius: 25,
          overflow: "hidden",
          border: "var(--border)",
          boxShadow: "var(--shadow)",
          color: "var(--primary)",
          ...cardStyle
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default PerspectiveCard;