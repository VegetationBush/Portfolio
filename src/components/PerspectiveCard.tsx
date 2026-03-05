import React, { useRef } from 'react';
import type { MouseEvent } from 'react';

interface PerspectiveCardProps {
  title?: string;
  description?: string;
  width?: number;
  height?: number; // optional, default 400
}

const PERSPECTIVE_CARD_STRENGTH = 0.1
const PerspectiveCard: React.FC<PerspectiveCardProps> = ({
  title = "",
  description = "",
  width = 350,
  height = 350,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    // retrieving values
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const cardCenterX = rect.left + rect.width / 2;
    const cardCenterY = rect.top + rect.height / 2;

    const angle = Math.atan2(mouseY - cardCenterY, mouseX - cardCenterX)
    const percentX = Math.abs((mouseX - cardCenterX) / cardCenterX); // percent distance from the center and outer x bound
    const percentY = Math.abs((mouseY - cardCenterY) / cardCenterY); // percent distance from the center and outer y bound

    // percentY is used on rotateX and vice versa since their axis rotates each other
    const rotateX = Math.sin(angle) * -PERSPECTIVE_CARD_STRENGTH * percentY;
    const rotateY = Math.cos(angle) * PERSPECTIVE_CARD_STRENGTH * percentX;
    
    card.style.transform = `rotateX(${rotateX}rad) rotateY(${rotateY}rad)`;
    // card.style.boxShadow = `5px 5px 20px 20px black`;
  };

  const handleMouseLeave = () => {
    if (!cardRef.current) return;

    const card = cardRef.current;
    card.style.transform = 'rotateX(0deg) rotateY(0deg)';
    // card.style.boxShadow = '5px 5px 20px 20px black';
  };

  return (
    <div
      className="interactive-card-container"
      style={{
        width,
        height,
        position: "absolute",
        perspective: "1500px",
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="interactive-card" ref={cardRef} style = {{position: "absolute", height: "350px", width: "350px", color: "white"}}>
        <h2 style = {{backgroundColor: "black", height: "100%", borderRadius: 25, boxShadow: "5px 5px 25px 10px black"}}>{title + "lorem ipsum sor dit amet"}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default PerspectiveCard;