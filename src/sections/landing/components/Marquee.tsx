import React from "react";

interface MarqueeProps {
  items: React.ReactElement[],
  duration: number,
}

function shuffle<T>(array: T[]): T[] {
  const arr = [...array]; // don’t mutate original

  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }

  return arr;
}

const Marquee: React.FC<MarqueeProps> = ({items, duration}) => {
  const shuffledItems = shuffle(items)
  const duplicatedItems = [...shuffledItems, ...shuffledItems].map((item, index) =>
    React.cloneElement(item, {
      key: `${item.key ?? "item"}-${index}`,
    })
  );

  return (
    <div
      style={{
        position: "relative",
        left: 0,
        width: "max-content",
        animation: `marquee-enter ${0.5 + duration / 10}s ease-out`,
      }}
    >
      <div
        style={{
          position: "relative",
          width: "max-content",
          display: "flex",
          animation: `marquee-scroll ${duration}s linear infinite`,
        }}
      >
        {duplicatedItems}
      </div>
      <style>{`
        @keyframes marquee-scroll {
          from {
            transform: translateX(0%);
          }
          to {
            transform: translateX(-50%);
          }
        }
        @keyframes marquee-enter {
          from {
            transform: translateX(50%);
          }
          to {
            transform: translateX(0%);
          }
        }
      `}</style>
    </div>
  );
}

export default Marquee