import '../index.css'
import Button from '../components/Button';
import Separator from '../components/Separator';
import git_brand from '../assets/git_brand.svg'

const Navbar = () => {
  return (
    <nav
      style={{
        position: "relative",
        top: 0,
        left: 0,
        width: "100%",
        height: 55,
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
        <Button label="Github" imgSrc={git_brand} useBorder={false}/>
        <Separator/>
        <Button label="Github" imgSrc={git_brand} useBorder={false}/>
        <Separator/>
        <Button label="Github" imgSrc={git_brand} useBorder={false}/>
      </div>

    </nav>
  );
};

export default Navbar;