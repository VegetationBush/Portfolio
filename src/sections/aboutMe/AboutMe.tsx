import '@/index.css'

import PerspectiveCard from '@/components/PerspectiveCard'
import MusicImage from "./images/Music.png"
import CodeImage from "./images/Code.png"

import { useFadeInOnScroll } from '@/util/fadeInOnScroll'

function AboutMe() {
  const { ref, isVisible } = useFadeInOnScroll();

  return (
    <div
      ref={ref}
      style = {{
        position: "relative",
        height: "100%",
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateX(0px)" : "translateX(4rem)",
        transition: "all 0.3s ease-out",
        display: "flex",
    }}>

      {/* Text section */}
      <div style = {{
        position: "relative",
        width: "45%",
        maxWidth: "800px",
        minWidth: "300px",
        padding: "5rem 0",
        display: "flex",
        flexDirection: "column",
        rowGap: "20px",
      }}>
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
        <p style = {{
          marginTop: "14rem",
          position: "relative",
        }}>
          I am grateful for the opportunity to catch this dream when I was still young. It has shaped how I think and grow, in ways that would
          be greatly foreign to my past self. Over time, I learned that consistency with a splash of talent (and a bit of luck), can take you
          (almost) anywhere.
        </p>
      </div>

      <div style = {{}}>
        <PerspectiveCard
          style = {{
            position: "absolute",
            height: "25rem",
            width: "25rem",
            right: "0",
            top: "5rem",
          }}
        >
          <img src = {MusicImage} />
        </PerspectiveCard>
        <PerspectiveCard
          style = {{
            position: "absolute",
            height: "25rem",
            width: "25rem",
            right: "10rem",
            top: "20rem",
          }}
        >
          <img src = {CodeImage} />
        </PerspectiveCard>
      </div>
      
      
    </div>
  )
}

export default AboutMe
