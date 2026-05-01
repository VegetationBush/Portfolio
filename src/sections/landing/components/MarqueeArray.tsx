import type { ReactElement } from "react";
import Marquee from "./Marquee";

const images = import.meta.glob<string>('/src/sections/landing/components/marqueeImages/*.{png,jpg,jpeg,avif}', {
  eager: true,
  import: 'default',
});
const itemList = Object.values(images);

const ELEMENT_SIZE_REM = 11
const listToElements = (list: string[]): ReactElement[] => {
  return list.map((item, i) => {
    return <img
      key={i}
      src={item}
      style={{
        width: `${ELEMENT_SIZE_REM}rem`,
        height: `${ELEMENT_SIZE_REM}rem`,
        objectFit: "cover",
        marginRight: "1rem",
        borderRadius: "1.5rem",
      }}
    />
  })
}

const MarqueeArray = () => {
  return (
    <div style = {{
      position: "relative",
      height: "100%",
      width: "100%",

      justifyItems: "center",
    }}>
      <div
        className = "intro-marquee-array"
        style = {{
          position: "relative",
          height: "100%",

          WebkitMaskImage: "linear-gradient(to right, transparent, black 35%, black 65%, transparent)",
          overflow: "hidden",
          animation: "marquee-array-fade 3s ease-in forwards",
        }}
      >
        <div style = {{
          height: "100%",
          width: "100%",

          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          
          transform: "rotate(-35deg)",
          transformOrigin: "top left",
        }}>
          {
            Array.from({ length: 7 }, (_, i) => (
              <div
                key = {i}
                style = {{
                  position: "relative",

                  // since the container is rotated 35 degrees from the top left, each element must be adjusted so aligns vertically, leaving no gaps
                  right: `${ELEMENT_SIZE_REM * (i + 1)}rem`,
                }}
              >
                <Marquee items = {listToElements(itemList)} duration = {10 + i * 3}/>
              </div>
            ))
          }
        </div>
        <style>
          {`@keyframes marquee-array-fade {
            0%   { opacity: 0.25 }
            100% { opacity: 0.1 }
          }`}
        </style>
      </div>
    </div>
  )
}

export default MarqueeArray