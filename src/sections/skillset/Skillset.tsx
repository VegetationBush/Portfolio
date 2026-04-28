import { useFadeInOnScroll } from "@/util/fadeInOnScroll"
import SkillCard from "./components/SkillCard";
import git_brand from "@/assets/brandIcons/git.svg?raw"

const languageSkills: ({ svg: string, label: string })[] = [
  { svg: git_brand, label: "HTML" },
  { svg: git_brand, label: "CSS" },
  { svg: git_brand, label: "Go" },
  { svg: git_brand, label: "Java" },
  { svg: git_brand, label: "Javascript" },
  { svg: git_brand, label: "Kotlin" },
  { svg: git_brand, label: "LaTeX" },
  { svg: git_brand, label: "Lua" },
  { svg: git_brand, label: "Luau" },
  { svg: git_brand, label: "Love2D" },
  { svg: git_brand, label: "Markdown" },
  { svg: git_brand, label: "MATLAB" },
  { svg: git_brand, label: "Notation" },
  { svg: git_brand, label: "Python" },
  { svg: git_brand, label: "R" },
  { svg: git_brand, label: "SQL" },
  { svg: git_brand, label: "Typescript" },
]

const softwareTechSkills: ({ svg: string, label: string })[] = [
  { svg: git_brand, label: "AdobeXD" },
  { svg: git_brand, label: "Audacity" },
  { svg: git_brand, label: "Blender" },
  { svg: git_brand, label: "Canva" },
  { svg: git_brand, label: "Excel" },
  { svg: git_brand, label: "Git" },
  { svg: git_brand, label: "Github" },
  { svg: git_brand, label: "Krita" },
  { svg: git_brand, label: "MuseScore Studio" },
  { svg: git_brand, label: "Overleaf" },
  { svg: git_brand, label: "paint.net" },
  { svg: git_brand, label: "React" },
  { svg: git_brand, label: "Roblox Studio" },
  { svg: git_brand, label: "Vercel" },
  { svg: git_brand, label: "Vite" },
  { svg: git_brand, label: "VS Code" },
]

function Skillset() {
  const { ref, isVisible } = useFadeInOnScroll();
  
  return (
    <div
      style = {{
        display: "flex",
        flexDirection: "column",

        gap: "3rem"
      }}
    >
      <div
        ref={ref}
        className = "split-container"
        style = {{
          transform: isVisible ? "translateX(0px)" : "translateX(4rem)",
          transition: "all 0.3s ease-out",
          opacity: isVisible ? 1 : 0,

          flexWrap: "wrap",
          display: "flex",
          gap: "1rem",
        }}
      >
        {languageSkills.map((item, index) => {
          return <SkillCard key = {index} svg = {item.svg} label = {item.label} />
        })}
      </div>

      <div
        ref={ref}
        className = "split-container"
        style = {{
          transform: isVisible ? "translateX(0px)" : "translateX(4rem)",
          transition: "all 0.3s ease-out",
          opacity: isVisible ? 1 : 0,

          flexWrap: "wrap",
          display: "flex",
          gap: "1rem",
        }}
      >
        {softwareTechSkills.map((item, index) => {
          return <SkillCard key = {index} svg = {item.svg} label = {item.label} />
        })}
      </div>
    </div>
  )
}

export default Skillset