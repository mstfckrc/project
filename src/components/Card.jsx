export default function Card({ name, description }) {
  return (
    <div className="card">
      <div className="card-name">
        <h3>{name}</h3>
      </div>
      <div className="card-description">
        <p>{description}</p>
      </div>
    </div>
  );
}
