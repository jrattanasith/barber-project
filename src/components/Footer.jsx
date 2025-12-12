export default function Footer() {
  return (
    <footer style={{ textAlign: "center", padding: "1rem", marginTop: "2rem", borderTop: "1px solid #ccc" }}>
      © {new Date().getFullYear()} Barber Shop. All rights reserved.
    </footer>
  );
}
