import '../index.css'
import Button from './Button';
import Separator from './Separator';
import git_brand from '../assets/git_brand.svg'

const Navbar = () => {
  return (
    <nav
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: 55,

        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#ffffff",
        borderBottom: "1px solid #e5e7eb",
        boxShadow: "0 2px 6px rgba(0, 0, 0, 0.05)",
      }}
    >
      <div style={{position: "absolute", right: 90, justifyContent: "flex-end", display: "flex", gap: 8}}>
        <Button label="Github" imgSrc={git_brand} useBorder={false}/>
        <Separator/>
        <Button label="Github" imgSrc={git_brand}/>
        <Separator/>
        <Button label="Github" imgSrc={git_brand}/>
      </div>

    </nav>
  );
};

export default Navbar;