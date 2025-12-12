import barbers from "../data/barbers.json";

export default function Barbers() {
  return (
    <main className="section">
      <h2>Meet the Barbers</h2>
      <div className="grid">
        {barbers.map((barber) => (
          <div className="card" key={barber.id}>
            <img src={barber.photo} alt={barber.name} />
            <h3>{barber.name}</h3>
            <p>{barber.bio}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
