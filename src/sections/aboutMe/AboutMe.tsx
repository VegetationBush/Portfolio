import PerspectiveCard from '@/components/PerspectiveCard'
import MusicImage from "./images/Music.png"
import CodeImage from "./images/Code.png"
import Card from '@/components/Card'

import { useState } from "react"

import { useFadeInOnScroll } from '@/util/fadeInOnScroll'

function AboutMe() {
  const { ref, isVisible } = useFadeInOnScroll();
  const items: ({year: string, description: string})[] = [
    {year: "2018", description: "Composed my first peice of music."},
    {year: "2019", description: "Began my game development journey and wrote my first line of real code."},
    {year: "2020", description: "Began experimenting with various software (UE, MuseScore, Blender, Audacity, etc.). Completed my very first paid commision."},
    {year: "2021", description: "Released my first successful software product."},
    {year: "2022", description: "Launched a multiplayer experience with measurable traction and concurrent users."},
  ]
  const imageItems: string[] = [MusicImage, CodeImage, MusicImage, CodeImage]
  const [hoveredIndex, setHoveredIndex] = useState<number>(0);
  
  return (
    <div
      ref={ref}
      className = "split-container"
      style = {{
        position: "relative",
        minHeight: "var(--content-height)",
        transform: isVisible ? "translateX(0px)" : "translateX(4rem)",
        transition: "all 0.3s ease-out",
        
        alignContent: "center",
        justifyContent: "center",
        padding: "5rem 0",
        gap: "3.5rem",
        
        opacity: isVisible ? 1 : 0,

        "--wrap-length": 40,
        "--left": 5,
        "--right": 4,
      } as React.CSSProperties}
    >

      {/* Text section */}
      <div
        className = "split-item-left"
        style = {{
          position: "relative",
          // minWidth: "30rem",
          
          display: "flex",
          flexDirection: "column",
          rowGap: "1.5rem",
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
          When I was still in elementary school, I quickly found myself immersed in the world of creation, startng my career with music
          composition. I have since explored and developed various skills across multiple disciplines, from digital arts and game
          development, to design and software development.
        </p>

        {/* Timeline */}
        <Card style = {{
          position: "relative",
          minHeight: "10rem",
          maxHeight: "12rem",
          marginInline: "-1rem",
          marginTop: "2rem",
          marginBottom: "2rem",
          flex: 1,

          display: "flex",
          flexDirection: "column",
          padding: "1rem",
          gap: "1rem",
        }}>

          {/* line */}
          <div style = {{
            width: "100%",
            position: "relative",
            height: "1rem",
          }}>
            <div style = {{
              display: "flex",
              width: "100%",
              justifyContent: "space-around"
            }}>
              <div style = {{
                position: "absolute",
                width: "100%",
                height: "0.2rem",
                top: "50%",
                translate: "0% -50%",
                backgroundColor: "var(--accent)",
                WebkitMaskImage: "linear-gradient(to right, transparent, black 25%, black 75%, transparent)",
              }}/>
              {items.map((_, index) => (
                <div
                  key = {index}
                  style = {{
                    position: "relative",
                    textAlign: "center",
                    height: "1rem",
                    width: "1rem",
                    backgroundColor: "var(--background)",
                    borderRadius: "100%",
                    border: "0.225rem solid var(--primary)",
                  }}
                  onMouseEnter = {() => setHoveredIndex(index)}
                >
                </div>
              ))}
            </div>
          </div>

          {/* info */}
          {hoveredIndex != null && (
            <div style = {{
              position: "relative",
              flex: 1,
              padding: "0rem 1rem",
              width: "100%",
            }}>
              <div style = {{
                fontWeight: "600",
              }}>{items[hoveredIndex].year}</div>
              <div>{items[hoveredIndex].description}</div>
            </div>
          )}
        </Card>


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
          // minWidth: "30rem",
          overflow: "hidden",
          display: "grid",
          gridTemplate: "repeat(2, 1fr) / repeat(2, 1fr)",
          gap: "1rem",
        }}
      >
        {imageItems.map((imgsrc) => {
          return (<PerspectiveCard
            style = {{
              position: "relative",
              padding: 0,
              width: "100%",
              height: "100%",
            }}
          >
            <img style = {{width: "100%", height: "100%"}} src = {imgsrc}/>
          </PerspectiveCard>)
        })}
      </div>
      
      
    </div>
  )
}

export default AboutMe
