import "./aboutMe.css"

import PerspectiveCard from '@/components/PerspectiveCard'
import MusicImage from "./images/Music.png"
import CodeImage from "./images/Code.png"

import { useState } from "react"

import { useFadeInOnScroll } from '@/util/fadeInOnScroll'

function AboutMe() {
  const { ref, isVisible } = useFadeInOnScroll();
  const items: ({title: string, description: string})[] = [
    {title: "a", description: "b"},
    {title: "c", description: "d"},
    {title: "c", description: "d"},
    {title: "c", description: "d"},
    {title: "a", description: "b"},
    {title: "c", description: "d"},
    {title: "c", description: "d"},
    {title: "c", description: "d"},
  ]
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  
  return (
    <div
      ref={ref}
      className = "split-container"
      style = {{
        position: "relative",
        height: "100%",
        transform: isVisible ? "translateX(0px)" : "translateX(4rem)",
        transition: "all 0.3s ease-out",
        
        flexWrap: "wrap",
        display: "flex",
        justifyContent: "center",
        flexDirection: "row",
        padding: "6.5rem 0",
        gap: "6.5rem",
        
        opacity: isVisible ? 1 : 0,

        "--left": "4",
        "--right": "4",
      } as React.CSSProperties}
    >

      {/* Text section */}
      <div
        className = "split-item-left"
        style = {{
          position: "relative",
          minWidth: "25rem",
          maxWidth: "32rem",
          
          display: "flex",
          flexDirection: "column",
          rowGap: "1.25rem",
        }}
      >
        <h2>About Me</h2>
        <p style = {{
          position: "relative",
        }}>
          I am a passionate creator who enjoys learning, building, and exploring novel ideas across different domains. I am naturally
          motivated when I turn ideas into real, tangible curiosities.
        </p>
        <p style = {{
          position: "relative",
        }}>
          The spark began way back in elementary school. I quickly found myself immersed with creation, beginning my career with music
          composition. I have since explored and developed various skills across multiple disciplines, including digital arts, game
          development, design, and software development.
        </p>

        {/* Timeline */}
        <div style = {{
          position: "relative",
          minHeight: "8rem",
          maxHeight: "12rem",
          flex: 1,

          padding: "1rem",
        }}>
          <div style = {{
            width: "100%",
            position: "relative",
            height: "1rem",
          }}>
            <div style = {{
              display: "flex",
              width: "100%",
              justifyContent: "space-between"
            }}>
              <div style = {{
                position: "absolute",
                width: "100%",
                height: "0.2rem",
                top: "50%",
                translate: "0% -50%",
                backgroundColor: "var(--accent)",
              }}/>
              {items.map((item, index) => (
                <div
                  key = {index}
                  style = {{
                    position: "relative",
                    textAlign: "center",
                    height: "1rem",
                    width: "1rem",
                    backgroundColor: "var(--background)",
                    borderRadius: "100%",
                    border: "0.2rem solid var(--primary)",
                  }}
                  onMouseEnter = {() => setHoveredIndex(index)}
                  onMouseLeave = {() => setHoveredIndex(null)}
                >

                  {/* tooltip */}
                  {hoveredIndex === index && (
                    <div style={{ position: "absolute", top: "100%" }}>
                      <div>{item.title}</div>
                      <div>{item.description}</div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>


        <p style = {{
          position: "relative",
        }}>
          I am grateful for the opportunity to catch this dream when I was still young. It has shaped how I think and grow, in ways that would
          be greatly foreign to my past self. Over time, I learned that consistency with a splash of talent (and a bit of luck), can take you
          (almost) anywhere.
        </p>
      </div>

      {/* Image section */}
      <div
        className = "split-item-right"
        style = {{
          position: "relative",
          maxWidth: "40rem",
          minWidth: "20rem",
          height: "100%",
          maxHeight: "45rem",
          overflow: "hidden",
        }}
      >
        <PerspectiveCard
          style = {{
            position: "absolute",
            left: 0,
            top: 0,
            width: "70%",
            height: "auto",
            minWidth: "20rem",
            aspectRatio: 1,
          }}
        >
          <img src = {MusicImage} />
        </PerspectiveCard>
        <PerspectiveCard
          style = {{
            position: "absolute",
            width: "70%",
            height: "auto",
            minWidth: "20rem",
            bottom: 0,
            right: 0,
            aspectRatio: 1,
          }}
        >
          <img src = {CodeImage} />
        </PerspectiveCard>
      </div>
      
      
    </div>
  )
}

export default AboutMe
