import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav style={{ position: "relative", padding: "1rem", background: "#fff", color: "#fff", display: "flex", justifyContent: "space-between" }}>
       <div><img src="src/images/headshot photo frame.png" alt="logo here" class="andy-logo" /> </div>
      <div style={{ display: "flex", gap: "1rem" }}>
        <Link to="/" style={{ color:"black", textDecoration: "none" }}>Home</Link>
        <Link to="/services" style={{ color: "black", textDecoration: "none" }}>Services</Link>
        <Link to="/barbers" style={{ color: "black", textDecoration: "none" }}>Barbers</Link>
        <Link to="/gallery" style={{ color: "black", textDecoration: "none" }}>Gallery</Link>
        <Link to="/contact" style={{ color: "black", textDecoration: "none" }}>Contact</Link>
        {/* <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form> */}
      </div>
    </nav>
  );
}
