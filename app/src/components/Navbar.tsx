import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav>
      <div className="navbar-left">
        <img src="../typescript.svg" alt="Logo" />
      </div>
      <div className="navbar-right">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  );
}