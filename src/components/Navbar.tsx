import "./navbar.css"
import Button from './Button';
import Separator from './Separator';
import git_brand from '../assets/git_brand.svg?raw'
import dark_light from '../assets/dark_light.svg?raw'
import { useState, useEffect } from "react"

const Navbar = () => {

  const [light, setLight] = useState<boolean>(false)
  useEffect(() => {
    document.documentElement.classList.toggle("light", light)
  }, [light])

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
        boxShadow: "var(--shadow-out)",
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
          onClick = {() => setLight(d => !d)}
        />
        <Separator/>
        <Button
          label="Github"
          svg = {git_brand}
        />
      </div>

    </nav>
  );
};

export default Navbar;