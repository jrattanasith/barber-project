export default function Contact() {
  return (
    <main className="section">
      <h2>Contact Us</h2>
      <p>📍 123 Barber St, City, State</p>
      <p>📞 (555) 000-0000</p>
      <p>⏰ Mon–Sat: 9 AM – 7 PM</p>
      <iframe
        src="https://www.google.com/maps/embed?...your_map_link..."
        width="100%"
        height="350"
        style={{ border: 0 }}
        loading="lazy"
      ></iframe>
    </main>
  );
}
