import "@/styles/navbar.css"
import Button from './Button';
import Separator from './Separator';
import git_brand from '@/assets/github-icon.svg?raw'
import linkedin_icon from '@/assets/linkedin.svg?raw'
import dark_light from '@/assets/dark-light.svg?raw'
import file_icon from '@/assets/file-icon.svg?raw'
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
          label = "Toggle Mode"
          svg = {dark_light}
          onClick = {() => ThemeContext.toggleTheme()}
        />
        <Separator/>
        <Button
          label = "LinkedIn"
          svg = {linkedin_icon}
          onClick = {() => window.open("https://www.linkedin.com/in/hans-yang-a2096738b/", "_blank")}
        />
        <Separator/>
        <Button
          label = "Github"
          svg = {git_brand}
          onClick = {() => window.open("https://github.com/VegetationBush", "_blank")}
        />
        <Separator/>
        <Button
          label = "Resume"
          svg = {file_icon}
          onClick = {() => window.open(`${import.meta.env.BASE_URL}/HansYang-Resume.pdf`, "_blank")}
        />
      </div>

    </nav>
  );
};

export default Navbar;