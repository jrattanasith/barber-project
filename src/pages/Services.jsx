import services from "../data/services.json";

export default function Services() {
  return (
    <main className="section">
      <h2>Our Services</h2>
      <div className="grid">
        {services.map((service) => (
          <div className="card" key={service.id}>
            <h3>{service.name}</h3>
            <p>{service.description}</p>
            <strong>{service.price}</strong>
          </div>
        ))}
      </div>
    </main>
  );
}
