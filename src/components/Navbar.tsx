import "./navbar.css"
import Button from './Button';
import Separator from './Separator';
import git_brand from '@/assets/github-icon.svg?raw'
import dark_light from '@/assets/dark-light.svg?raw'
import file_icon from '@/assets/file-icon.svg?raw'
import { useState, useEffect } from "react"
import { useTheme } from "@/ThemeProvider";

const Navbar = () => {

  const ThemeContext = useTheme()
  
  return (
    <nav
      style={{
        position: "relative",
        width: "100%",
        height: "var(--navbar-height)",
        zIndex: 100,
        
        display: "flex",
        flexGrow: 0,
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "var(--background)",
        boxShadow: "var(--shadow)",
      }}
    >
      <div
        className = "navbar-action-container"
        style = {{
          position: "absolute",
          justifyContent: "flex-end",
          display: "flex",
          gap: "0.5rem"
        }}
      >
        <Button
          label = "Github"
          svg = {git_brand}
          onClick = {() => window.open("https://github.com/VegetationBush", "_blank")}
        />
        <Separator/>
        <Button
          label = "Toggle Mode"
          svg = {dark_light}
          onClick = {() => ThemeContext.toggleTheme()}
        />
        <Separator/>
        <Button
          label = "Resume"
          svg = {file_icon}
        />
      </div>

    </nav>
  );
};

export default Navbar;