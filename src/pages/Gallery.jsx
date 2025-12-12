import gallery from "../data/gallery.json";

export default function Gallery() {
  return (
    <main className="section">
      <h2>Gallery</h2>
      <div className="grid">
        {gallery.map((img, i) => (
          <img src={img} alt={`cut-${i}`} key={i} />
        ))}
      </div>
    </main>
  );
}
