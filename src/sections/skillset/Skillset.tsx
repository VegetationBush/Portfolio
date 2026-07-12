import SkillCard from "./components/SkillCard";
import type { SkillCardProps } from "./components/SkillCard";
import Card from "@/components/Card";

import c from "./languageImages/c.svg?react"
import cpp from "./languageImages/cpp.svg?react"
import css from "./languageImages/css.svg?react"
import go from "./languageImages/go.svg?react"
import html from "./languageImages/html.svg?react"
import java from "./languageImages/java.svg?react"
import javascript from "./languageImages/javascript.svg?react"
import latex from "./languageImages/latex.svg?react"
import latex_light from "./languageImages/latex-light.svg?react"
import lua from "./languageImages/lua.svg?react"
import luau from "./languageImages/luau.svg?react"
import love2d from "./languageImages/love2d.svg?react"
import markdown from "./languageImages/markdown.svg?react"
import markdown_light from "./languageImages/markdown-light.svg?react"
import matlab from "./languageImages/matlab.svg?react"
import python from "./languageImages/python.svg?react"
import r from "./languageImages/r.svg?react"
import sql from "./languageImages/sql.svg?react"
import typescript from "./languageImages/typescript.svg?react"
import vba from "./languageImages/vba.svg?react"

import adobexd from "./techImages/adobexd.svg?react"
import audacity from "./techImages/audacity.svg?react"
import aws from "./techImages/aws.svg?react"
import blender from "./techImages/blender.svg?react"
import canva from "./techImages/canva.svg?react"
import docker from "./techImages/docker.svg?react"
import docker_light from "./techImages/docker-light.svg?react"
import excel from "./techImages/excel.svg?react"
import git from "./techImages/git.svg?react"
import github from "./techImages/github.svg?react"
import github_light from "./techImages/github-light.svg?react"
import krita from "./techImages/krita.svg?react"
import mongodb from "./techImages/mongodb.svg?react"
import musescore from "./techImages/musescore.svg?react"
import nodejs from "./techImages/nodejs.svg?react"
import overleaf from "./techImages/overleaf.svg?react"
import paintdotnet from "./techImages/paintdotnet.svg?react"
import react from "./techImages/react.svg?react"
import redis from "./techImages/redis.svg?react"
import roblox_studio from "./techImages/robloxstudio.svg?react"
import vercel from "./techImages/vercel.svg?react"
import vercel_light from "./techImages/vercel-light.svg?react"
import vite from "./techImages/vite.svg?react"
import vscode from "./techImages/vscode.svg?react"

const skillCategories: { title: string, items: SkillCardProps[] }[] = [
  {
    title: "Programming Languages",
    items: [
      { svg: c, label: "C" },
      { svg: cpp, label: "C++" },
      { svg: go, label: "Go" },
      { svg: java, label: "Java" },
      { svg: javascript, label: "JavaScript", isExperienced: true },
      { svg: lua, label: "Lua", isExperienced: true },
      { svg: luau, label: "Luau", isExperienced: true },
      { svg: love2d, label: "Love2D" },
      { svg: matlab, label: "MATLAB" },
      { svg: python, label: "Python", isExperienced: true },
      { svg: r, label: "R" },
      { svg: sql, label: "SQL" },
      { svg: typescript, label: "Typescript", isExperienced: true },
      { svg: vba, label: "VBA" },
    ],
  },
  {
    title: "Web Development",
    items: [
      { svg: css, label: "CSS", isExperienced: true },
      { svg: html, label: "HTML", isExperienced: true },
      { svg: nodejs, label: "Node.js", isExperienced: true },
      { svg: vercel, svg_light: vercel_light, label: "Vercel" },
      { svg: vite, label: "Vite" },
      { svg: vscode, label: "VS Code", isExperienced: true  },
    ],
  },
  {
    title: "Development Tools",
    items: [
      { svg: aws, label: "AWS"},
      { svg: docker, svg_light: docker_light, label: "Docker" },
      { svg: excel, label: "Excel" },
      { svg: git, label: "Git", isExperienced: true },
      { svg: github, svg_light: github_light, label: "Github", isExperienced: true },
      { svg: latex, svg_light: latex_light, label: "LaTeX" },
      { svg: markdown, svg_light: markdown_light, label: "Markdown", isExperienced: true },
      { svg: mongodb, label: "mongoDB" },
      { svg: overleaf, label: "Overleaf" },
      { svg: react, label: "React", isExperienced: true },
      { svg: redis, label: "Redis"},
      { svg: roblox_studio, label: "Roblox Studio", isExperienced: true },
    ],
  },
  {
    title: "Creative Software",
    items: [
      { svg: adobexd, label: "AdobeXD" },
      { svg: audacity, label: "Audacity" },
      { svg: blender, label: "Blender" },
      { svg: canva, label: "Canva" },
      { svg: krita, label: "Krita" },
      { svg: musescore, label: "MuseScore Studio", isExperienced: true },
      { svg: paintdotnet, label: "paint.net" },
    ],  
  },
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
          gap: "1.75rem",
        }}>

          {/* legend */}
          <div style = {{
            width: "10rem",
            height: "0rem",

            backgroundColor: "var(--background-tertiary)",

            borderRadius: "0.75rem",
            padding: "1.1rem 1.1rem",
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
            gap: "0.75rem",
            boxSizing: "border-box",
          }}>

            {skillCategories.map((category, index) => {
              return (
                <Card
                  key = {index}
                  className = "fade-in-container"
                  style = {{
                    display: "flex",
                    flexDirection: "column",

                    padding: "2.5rem",
                    gap: "1.5rem",
                  }}
                >
                  <h3>{category.title}</h3>
                  <div
                    style = {{
                      flexWrap: "wrap",
                      flexDirection: "row",
                      display: "flex",
                      gap: "0.75rem",
                    }}
                  >
                    {category.items.map((item, index) => {
                      return (
                        <SkillCard
                          key = {index}
                          {...item}
                        />
                      )
                    })}
                  </div>
                </Card>
              )
            })}
          </div>
        </div>
        
      </div>
    </div>
    
  )
}

export default Skillset