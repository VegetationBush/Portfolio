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
    tags: ["Luau", "Roblox Studio", "AdobeXD", "Solo Project"],
    highlights: ["100+ Sales", "$1000+ CAD Revenue"],
    caption: "2023 - Present",
    link: "https://devforum.roblox.com/t/3582453",
  },
  {
    title: "FPS",
    subtitle: "Incremental Simulation Game",
    description: `A completed incremental game with curated player progression. The gameplay loop focuses on
      gradual growth, resource management, and strategic upgrades, creating a satisfying progression system
      that keeps players engaged.`,
    image: testimg,
    highlights: ["100K+ Plays", "100+ Peak CCU"],
    tags: ["Luau", "Roblox Studio", "Musescore", "Team Project"],
    caption: "2022-2023",
    link: "https://www.roblox.com/games/11352614810",
  },
  {
    title: "Pocket Rift",
    subtitle: "Multiplayer Experience Prioritizing Emergent Gameplay",
    description: `
      An in-dev multiplayer game built with a complex web of interconnected game mechanics designed to produce
      rich, replayable, and emergent gameplay. The codebase is extensible, robust, and data-oriented, leveraging
      the use of state propagation and context to produce procedural behaviuor.
      `,
    image: testimg,
    tags: ["Luau", "Roblox Studio", "Musescore", "Audacity", "Krita", "AdobeXD", "Solo Project"],
    caption: "2023-Present",
    link: "https://www.roblox.com/games/3090230888",
  },
  {
    title: "sys.break()",
    subtitle: "Terminal Style Text-Based RTS",
    description: `
      A gamejam project prioritizing user interfaces and feel. Uses string manipulation, parsing, and lexical
      analysis as the core game mechanic. Players are required to race against time and determine the correct
      inputs to reach the end.`,
    image: testimg,
    tags: ["Luau", "Roblox Studio", "Team Gamejam Project"],
    caption: "2023",
    link: "https://www.roblox.com/games/137695637382314",
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