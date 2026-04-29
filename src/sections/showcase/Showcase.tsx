import ShowcaseItem from "./components/ShowcaseItem";
import type { ShowcaseItemProps } from "./components/ShowcaseItem";

import testimg from "@/assets/testimg.png"

const showcaseItems: ShowcaseItemProps[] = [
  {
    title: "Visulie",
    subtitle: "One-of-a-kind Animation Suite",
    description:
      `A comprehensive animation software that aims to provide a seamless experience to create runtime visual
      and scriptable effects. Users can use the built-in editor to create, import, and serialize animation
      data, which can be run through a custom written interpreter for performant, real-time playback.`,
    image: testimg,
    tags: ["Luau", "Roblox Studio", "AdobeXD"],
    caption: "2023 - Present",
    link: "https://devforum.roblox.com/t/3582453",
  },
  {
    title: "Visulie",
    subtitle: "Comprehensive Animation Suite",
    description: "Animation Editor",
    image: testimg,
    tags: [],
    caption: "2023-Present",
    link: "",
  },
  {
    title: "Visulie",
    subtitle: "Comprehensive Animation Suite",
    description: "Animation Editor",
    image: testimg,
    tags: [],
    caption: "2023-Present",
    link: "",
  },
  {
    title: "Visulie",
    subtitle: "Comprehensive Animation Suite",
    description: "Animation Editor",
    image: testimg,
    tags: [],
    caption: "2023-Present",
    link: "",
  },
]

function Showcase() {
  return (
    <div
      className = "fade-in-container"
      style = {{
        width: "100%",
        
        display: "flex",
        flexDirection: "column",
        padding: "5rem 0rem",
        gap: "4rem"
      }}
    >
      <h2>Showcase</h2>

      <div style = {{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(22.5rem, 1fr))",
        gap: "1rem",
      }}>
        {showcaseItems.map((item, index) => {
          return (
            <ShowcaseItem key = {index} {...item} />
          )
        })}
      </div>
    </div>
  )
}

export default Showcase