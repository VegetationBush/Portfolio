import SkillCard from "./components/SkillCard";
import type { SkillCardProps } from "./components/SkillCard";
import Card from "@/components/Card";

import c from "./languageImages/c.svg?raw"
import css_icon from "./languageImages/css.svg?raw"
import html_icon from "./languageImages/html.svg?raw"
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
import vba from "./languageImages/vba.svg?raw"

const languageSkills: SkillCardProps[] = [
  { svg: c, label: "C" },
  { svg: css_icon, label: "CSS", isExperienced: true },
  { svg: html_icon, label: "HTML", isExperienced: true },
  { svg: java, label: "Java" },
  { svg: javascript, label: "JavaScript", isExperienced: true },
  { svg: latex, svg_light: latex_light, label: "LaTeX" },
  { svg: lua, label: "Lua", isExperienced: true },
  { svg: luau, label: "Luau", isExperienced: true },
  { svg: love2d, label: "Love2D" },
  { svg: markdown, svg_light: markdown_light, label: "Markdown", isExperienced: true },
  { svg: matlab, label: "MATLAB" },
  { svg: python, label: "Python", isExperienced: true },
  { svg: r, label: "R" },
  { svg: typescript, label: "Typescript", isExperienced: true },
  { svg: vba, label: "VBA" },
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
import nodejs from "./techImages/nodejs.svg?raw"
import overleaf from "./techImages/overleaf.svg?raw"
import paintdotnet from "./techImages/paintdotnet.svg?raw"
import react from "./techImages/react.svg?raw"
import roblox_studio from "./techImages/robloxstudio.svg?raw"
import vercel from "./techImages/vercel.svg?raw"
import vercel_light from "./techImages/vercel-light.svg?raw"
import vite from "./techImages/vite.svg?raw"
import vscode from "./techImages/vscode.svg?raw"

const softwareTechSkills: SkillCardProps[] = [
  { svg: adobexd, label: "AdobeXD" },
  { svg: audacity, label: "Audacity" },
  { svg: blender, label: "Blender" },
  { svg: canva, label: "Canva" },
  { svg: excel, label: "Excel" },
  { svg: git, label: "Git", isExperienced: true },
  { svg: github, svg_light: github_light, label: "Github", isExperienced: true  },
  { svg: krita, label: "Krita" },
  { svg: musescore, label: "MuseScore Studio", isExperienced: true },
  { svg: nodejs, label: "Node.js", isExperienced: true },
  { svg: overleaf, label: "Overleaf" },
  { svg: paintdotnet, label: "paint.net" },
  { svg: react, label: "React", isExperienced: true },
  { svg: roblox_studio, label: "Roblox Studio", isExperienced: true },
  { svg: vercel, svg_light: vercel_light, label: "Vercel" },
  { svg: vite, label: "Vite" },
  { svg: vscode, label: "VS Code", isExperienced: true  },
]

function Skillset() {
  return (
    <div className = "section-container">
      <div
        className = "section-item fade-in-container"
        style = {{
          width: "100%",

          display: "grid",
          flexDirection: "column",
          gap: "3rem",
        }}
      >
        <h2>Experience</h2>

        <div style = {{
          display: "flex",
          flexDirection: "column",
          gap: "1.5rem",
        }}>

          {/* legend */}
          <div style = {{
            width: "10rem",
            minHeight: "2.5rem",

            backgroundColor: "var(--background-tertiary)",

            borderRadius: "0.75rem",
            padding: "0.5rem 1rem",
            outline: "2px inset var(--accent)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textWrap: "nowrap",
          }}>
            <h4>Strongest Skills</h4>
          </div>

          <div style = {{
            display: "flex",
            flexDirection: "column",
            gap: "1.5rem",
            boxSizing: "border-box",
          }}>

            {/* languages */}
            <Card
              className = "fade-in-container"
              style = {{
                display: "flex",
                flexDirection: "column",

                padding: "2.5rem",
                gap: "1.5rem",
              }}
            >
              <h3>Languages</h3>
              <div
                style = {{
                  flexWrap: "wrap",
                  flexDirection: "row",
                  display: "flex",
                  gap: "0.75rem",
                }}
              >
                {languageSkills.map((item, index) => {
                  return (
                    <SkillCard
                      key = {index}
                      {...item}
                    />
                  )
                })}
              </div>
            </Card>

            {/* tech and software */}
            <Card
              className = "fade-in-container"
              style = {{
                display: "flex",
                flexDirection: "column",
                padding: "2.5rem",
                gap: "1.5rem",
              }}
            >
              <h3>Technology</h3>
              <div
                style = {{
                  flexWrap: "wrap",
                  flexDirection: "row",
                  display: "flex",
                  gap: "0.75rem",
                }}
              >
                {softwareTechSkills.map((item, index) => {
                  return (
                    <SkillCard
                      key = {index}
                      {...item}
                    />
                  )
                })}
              </div>
            </Card>
          </div>
        </div>
        
      </div>
    </div>
    
  )
}

export default Skillset