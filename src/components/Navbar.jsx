import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav style={{ padding: "1rem", background: "#333", color: "#fff", display: "flex", justifyContent: "space-between" }}>
      <div>Barber Shop</div>
      <div style={{ display: "flex", gap: "1rem" }}>
        <Link to="/" style={{ color: "#fff", textDecoration: "none" }}>Home</Link>
        <Link to="/services" style={{ color: "#fff", textDecoration: "none" }}>Services</Link>
        <Link to="/barbers" style={{ color: "#fff", textDecoration: "none" }}>Barbers</Link>
        <Link to="/gallery" style={{ color: "#fff", textDecoration: "none" }}>Gallery</Link>
        <Link to="/contact" style={{ color: "#fff", textDecoration: "none" }}>Contact</Link>
      </div>
    </nav>
  );
}
