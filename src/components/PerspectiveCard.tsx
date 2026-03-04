import React, { useRef } from 'react';
import type { MouseEvent } from 'react';

interface PerspectiveCardProps {
  title?: string;
  description?: string;
  width?: number;
  height?: number; // optional, default 400
}

const PerspectiveCard: React.FC<PerspectiveCardProps> = ({
  title = "",
  description = "",
  width = 50,
  height = 50,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = 25; // max tilt
    const rotateY = -25;

    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    card.style.boxShadow = `${-rotateY * 2}px ${rotateX * 2}px 40px rgba(0,0,0,0.05)`;
  };

  const handleMouseLeave = () => {
    if (!cardRef.current) return;

    const card = cardRef.current;
    card.style.transform = 'rotateX(0deg) rotateY(0deg)';
    card.style.boxShadow = '0 20px 40px rgba(0,0,0,0.05)';
  };

  return (
    <div
      className="interactive-card-container"
      style={{ width, height , backgroundColor: "gray", position: "absolute"}}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="interactive-card" ref={cardRef}>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default PerspectiveCard;