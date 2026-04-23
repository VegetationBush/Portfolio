import "@/index.css"
import { useState, useEffect } from "react";
import TestImage from '@/assets/TestImage.png'
import Arcadient from '@/assets/Arcadient.png'
import Biomass from '@/assets/Biomass.png'
import PerspectiveCard from "@/components/PerspectiveCard";

type MarqueeProps = {
  
}

export default function Marquee() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;

  const items = [TestImage, Arcadient, Biomass, TestImage, Arcadient, Biomass]

  return (
    <div style={{
      overflow: "hidden",
      position: "absolute",
      height: "100vh",
      width: "65vw",
      WebkitMaskImage: "linear-gradient(to right, transparent, black 20%, black 80%, transparent)",
      right: "5vh",
      padding: "150px",
      opacity: "0.5",

    }}>

      <div style={{ transform: "rotate(-45deg)", position: "relative" }}>
        <div
          style={{
            display: "flex",
            width: "max-content",
            animation: "scroll 10s linear infinite",
          }}
        >
          {[...items, ...items].map((item, i) => (
            <img
              key={i}
              src={item}
              style={{
                width: "150px",
                height: "150px",
                objectFit: "cover",
                marginRight: "1rem",
              }}
            />
          ))}
        </div>
        <style>{`
          @keyframes scroll {
            from {
              transform: translateX(0);
            }
            to {
              transform: translateX(-50%);
            }
          }
        `}</style>
      </div>

      <div style={{ transform: "rotate(-45deg)", position: "relative", top: "100px" }}>
        <div
          style={{
            display: "flex",
            width: "max-content",
            animation: "scroll 15s linear infinite",
          }}
        >
          {[...items, ...items].map((item, i) => (
            <img
              key={i}
              src={item}
              style={{
                width: "150px",
                height: "150px",
                objectFit: "cover",
                marginRight: "1rem",
              }}
            />
          ))}
        </div>
        <style>{`
          @keyframes scroll {
            from {
              transform: translateX(0);
            }
            to {
              transform: translateX(-50%);
            }
          }
        `}</style>
      </div>

      <div style={{ transform: "rotate(-45deg)", position: "relative", top: "200px" }}>
        <div
          style={{
            display: "flex",
            width: "max-content",
            animation: "scroll 20s linear infinite",
          }}
        >
          {[...items, ...items].map((item, i) => (
            <img
              key={i}
              src={item}
              style={{
                width: "150px",
                height: "150px",
                objectFit: "cover",
                marginRight: "1rem",
              }}
            />
          ))}
        </div>
        <style>{`
          @keyframes scroll {
            from {
              transform: translateX(0);
            }
            to {
              transform: translateX(-50%);
            }
          }
        `}</style>
      </div>

      <div style={{ transform: "rotate(-45deg)", position: "relative", top: "300px" }}>
        <div
          style={{
            display: "flex",
            width: "max-content",
            animation: "scroll 25s linear infinite",
          }}
        >
          {[...items, ...items].map((item, i) => (
            <PerspectiveCard style = {{width: "150px", height: "150px", position: "relative"}}>
              <img
                key={i}
                src={item}
                style={{
                  width: "150px",
                  height: "150px",
                  objectFit: "cover",
                  marginRight: "1rem",
                }}
              />
            </PerspectiveCard>
          ))}
        </div>
        <style>{`
          @keyframes scroll {
            from {
              transform: translateX(0);
            }
            to {
              transform: translateX(-50%);
            }
          }
        `}</style>
      </div>

    </div>
  );
}