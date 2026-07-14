import ShowcaseItem from "./components/ShowcaseItem";
import type { ShowcaseItemProps } from "./components/ShowcaseItem";

import persplexive from "./images/Persplexive.png"
import plusOneMagic from "./images/+1MagicEvo.png"
import bloxroyale from "./images/BloxRoyale.png"
import sysbreak from "./images/sys.break().png"
import fps from "./images/fps.png"
import pocketrift from "./images/pocketrift.png"
import visulie from "./images/visulie.png"
import musescore from "./images/musescore.png"

const showcaseItems: ShowcaseItemProps[] = [
  {
    title: "+1 Magic Evolution",
    subtitle: "Engaging Magic Mastery",
    description:
      `An incremental game with a roguelite twist. Players gain magic power to fight stronger and stronger
      enemies, unlocking dungeons to fight difficult bosses and get valuable rewards. Supported the production
      of both backend and frontend systems, such as boss AI, animations, and user interface, delivering 
      updates that engage players of all demographics and skill levels.`,
    image: plusOneMagic,
    tags: ["Luau", "Roblox Studio"],
    highlights: ["10k+ Peak CCU", "1M+ Favourites", "27M+ Visits"],
    caption: "2026",
    link: "https://www.roblox.com/games/116223724643557/1-Magic-Evolution",
  },
  {
    title: "Visulie",
    subtitle: "One-of-a-kind Animation Suite",
    description:
      `A comprehensive animation software that aims to provide a seamless experience to create runtime visual
      and scriptable effects. Users can use the built-in editor to create, import, and serialize animation
      data, which can be run through a custom written interpreter for performant, real-time playback.`,
    image: visulie,
    tags: ["Luau", "Roblox Studio", "AdobeXD", "Solo Project", "Actively Managed"],
    highlights: ["150+ Sales", "$1500+ CAD Revenue", "#1 Ranked Google Search"],
    caption: "2021 - Present",
    link: "https://devforum.roblox.com/t/3582453",
  },
  {
    title: "FPS",
    subtitle: "Incremental Simulation Game",
    description:
      `A completed incremental game with curated player progression. The gameplay loop focuses on gradual
      growth, resource management, and strategic upgrades, creating a satisfying progression system that
      keeps players engaged.`,
    image: fps,
    highlights: ["100K+ Plays", "100+ Peak CCU", "Paid Role"],
    tags: ["Luau", "Roblox Studio", "Musescore", "Team Project"],
    caption: "2022-2023",
    link: "https://www.roblox.com/games/11352614810",
  },
  {
    title: "Pocket Rift",
    subtitle: "Multiplayer Experience Prioritizing Emergent Gameplay",
    description:
      `An in-dev multiplayer game built with a complex web of interconnected game mechanics designed to produce
      rich, replayable, and emergent gameplay. The codebase is extensible, robust, and data-oriented, leveraging
      the use of state propagation and context to produce procedural behaviour.`,
    image: pocketrift,
    tags: ["Luau", "Roblox Studio", "Musescore", "Audacity", "Krita", "AdobeXD", "Solo Project"],
    caption: "2023-Present",
    link: "https://www.roblox.com/games/3090230888",
  },
  {
    title: "sys.break()",
    subtitle: "Terminal Style Text-Based RTS",
    description:
      `A gamejam project prioritizing user interfaces and feel. Uses string manipulation, parsing, and lexical
      analysis as the core game mechanic. Players are required to race against time and determine the correct
      inputs to reach the end.`,
    image: sysbreak,
    tags: ["Luau", "Roblox Studio", "Collaborative Gamejam"],
    caption: "2023",
    link: "https://www.roblox.com/games/137695637382314",
  },
  {
    title: "Blox Royale",
    subtitle: "Player vs. Player Tower Defense",
    description:
      `Commissioned to create 3D assets for an online game with over 25 million lifetime visits. Delivered on
      schedule, adhering to product specifications and providing consistent communication.`,
    highlights: ["25M+ Lifetime Visits", "Paid Contract"],
    image: bloxroyale,
    tags: ["Blender"],
    caption: "2020",
    link: "https://www.roblox.com/games/4805544631",
  },
  {
    title: "Persplexive!",
    subtitle: "Visually Expressive Skit",
    description:
      `Worked as the lead programmer in a team, developing a short narrative-driven experience with a focus on
      visual polish and smooth gameplay. Designed dialogue systems and structured gameplay progression to ensure
      a cohesive player experience.`,
    image: persplexive,
    tags: ["Roblox Studio", "Luau", "Musescore", "Collaborative Gamejam"],
    caption: "2024",
    link: "https://www.roblox.com/games/16144754329",
  },
  {
    title: "Compositions",
    subtitle: "My Original Soundtracks",
    description:
      `My passion for music has been with me ever since the initial spark. Since then, I learned how to play many
      more instruments and started exploring music composition across genres and instruments. My portfolio on
      MuseScore showcases many of the original pieces I have created. Feel free to take a look!`,
    image: musescore,
    tags: ["Musescore"],
    caption: "2018-Present",
    link: "https://musescore.com/user/37216317",
  },
]

function Showcase() {
  return (
    <div
      className = "section-container"
      style = {{
        backgroundColor: "var(--background-secondary)",
      }}
    >
      <div
        className = "section-item fade-in-container"
        style = {{
          width: "100%",
          
          display: "flex",
          flexDirection: "column",
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
    </div>
  )
}

export default Showcase