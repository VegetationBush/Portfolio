import { useFadeInOnScroll } from "@/util/fadeInOnScroll"
import SkillCard from "./components/SkillCard";

import git_brand from "@/assets/github-icon.svg?raw"

import html_icon from "./languageImages/html.svg?raw"
import css_icon from "./languageImages/css.svg?raw"
import java from "./languageImages/java.svg?raw"
import javascript from "./languageImages/javascript.svg?raw"
import latex from "./languageImages/latex.svg?raw"
import latex_light from "./languageImages/latex-light.svg?raw"
import lua from "./languageImages/lua.svg?raw"
import luau from "./languageImages/luau.svg?raw"
import love2d from "./languageImages/love2d.svg?raw"
import markdown from "./languageImages/markdown.svg?raw"
import markdown_light from "./languageImages/markdown-light.svg?raw"
import matlab from "./languageImages/matlab.svg?raw"
import python from "./languageImages/python.svg?raw"
import r from "./languageImages/r.svg?raw"
import typescript from "./languageImages/typescript.svg?raw"

const languageSkills: ({ svg: string, svg_light?: string, label: string })[] = [
  { svg: css_icon, label: "CSS" },
  { svg: html_icon, label: "HTML" },
  { svg: java, label: "Java" },
  { svg: javascript, label: "JavaScript" },
  { svg: latex, svg_light: latex_light, label: "LaTeX" },
  { svg: lua, label: "Lua" },
  { svg: luau, label: "Luau" },
  { svg: love2d, label: "Love2D" },
  { svg: markdown, svg_light: markdown_light, label: "Markdown", },
  { svg: matlab, label: "MATLAB" },
  { svg: python, label: "Python" },
  { svg: r, label: "R" },
  { svg: typescript, label: "Typescript" },
]

import adobexd from "./techImages/adobexd.svg?raw"
import audacity from "./techImages/audacity.svg?raw"
import blender from "./techImages/blender.svg?raw"
import canva from "./techImages/canva.svg?raw"
import excel from "./techImages/excel.svg?raw"
import git from "./techImages/git.svg?raw"
import github from "./techImages/github.svg?raw"
import github_light from "./techImages/github-light.svg?raw"
import krita from "./techImages/krita.svg?raw"
import musescore from "./techImages/musescore.svg?raw"
import overleaf from "./techImages/overleaf.svg?raw"
import paintdotnet from "./techImages/paintdotnet.svg?raw"
import react from "./techImages/react.svg?raw"
import roblox_studio from "./techImages/robloxstudio.svg?raw"
import vercel from "./techImages/vercel.svg?raw"
import vercel_light from "./techImages/vercel-light.svg?raw"
import vite from "./techImages/vite.svg?raw"
import vscode from "./techImages/vscode.svg?raw"

const softwareTechSkills: ({ svg: string, svg_light?: string, label: string })[] = [
  { svg: adobexd, label: "AdobeXD" },
  { svg: audacity, label: "Audacity" },
  { svg: blender, label: "Blender" },
  { svg: canva, label: "Canva" },
  { svg: excel, label: "Excel" },
  { svg: git, label: "Git" },
  { svg: github, svg_light: github_light, label: "Github" },
  { svg: krita, label: "Krita" },
  { svg: musescore, label: "MuseScore Studio" },
  { svg: overleaf, label: "Overleaf" },
  { svg: paintdotnet, label: "paint.net" },
  { svg: react, label: "React" },
  { svg: roblox_studio, label: "Roblox Studio" },
  { svg: vercel, svg_light: vercel_light, label: "Vercel" },
  { svg: vite, label: "Vite" },
  { svg: vscode, label: "VS Code" },
]

function Skillset() {
  const { ref, isVisible } = useFadeInOnScroll();
  
  return (
    <div
      ref = {ref}
      style = {{
        transform: isVisible ? "translateX(0px)" : "translateX(4rem)",
        transition: "all 0.3s ease-out",
        opacity: isVisible ? 1 : 0,

        display: "grid",
        flexDirection: "column",

        padding: "5rem 0rem",
        gap: "8rem"
      }}
    >
      <div
        style = {{
          display: "flex",
          flexDirection: "column",
          gap: "3rem",
        }}
      >
        <h2>Languages</h2>
        <div
          style = {{
            flexWrap: "wrap",
            flexDirection: "row",
            display: "flex",
            gap: "1rem",
          }}
        >
          {languageSkills.map((item, index) => {
            return <SkillCard key = {index} svg = {item.svg} svg_light = {item.svg_light} label = {item.label} />
          })}
        </div>
      </div>

      <div
        style = {{
          display: "flex",
          flexDirection: "column",
          gap: "3rem",
        }}
      >
        <h2>Technology</h2>
        <div
          style = {{
            flexWrap: "wrap",
            flexDirection: "row",
            display: "flex",
            gap: "1rem",
          }}
        >
          {softwareTechSkills.map((item, index) => {
            return <SkillCard key = {index} svg = {item.svg} svg_light = {item.svg_light} label = {item.label} />
          })}
        </div>
      </div>
    </div>
  )
}

export default Skillset