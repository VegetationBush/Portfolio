import '../index.css'
import Button from './Button';
import Separator from './Separator';
import git_brand from '../assets/git_brand.svg?raw'
import dark_light from '../assets/dark_light.svg?raw'
import { useState, useEffect } from "react"

const Navbar = () => {

  const [dark, setDark] = useState<boolean>(false)
  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark)
  }, [dark])

  return (
    <nav
      style={{
        position: "relative",
        top: 0,
        left: 0,
        width: "100%",
        height: "var(--navbar-height)",
        zIndex: 100,
        
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "var(--background)",
        borderBottom: "var(--border)",
        boxShadow: "var(--shadow)",
      }}
    >
      <div style={{position: "absolute", right: 90, justifyContent: "flex-end", display: "flex", gap: 8}}>
        <Button
          label="Github"
          svg={git_brand}
          onClick={() => window.open("https://github.com/VegetationBush", "_blank")}
        />
        <Separator/>
        <Button
          label="Toggle Mode"
          svg={dark_light}
          onClick={() => setDark(d => !d)}
        />
        <Separator/>
        <Button
          label="Github"
          svg={git_brand}
        />
      </div>

    </nav>
  );
};

export default Navbar;