import "./style.css";

export const CharCard = ({ obj }) => {
  const ep = Object.assign({}, obj.episode);
  console.log(ep);
  return (
    <>
      {obj.status === "Alive" ? (
        <div className="vivo card">
          <h1>{obj.name}</h1>
          <p>Breed: {obj.species}</p>
          <p>Planet: {obj.origin.name}</p>
          <p>Sexo: {obj.gender}</p>
          <p>Supposed current location: {obj.location.name}</p>
          <p>already appeared in {obj.episode.length} episode</p>
          <img src={obj.image} alt={obj.name} />
        </div>
      ) : (
        <div className="morto card">
          <h1>{obj.name}</h1>
          <p>Raça: {obj.species}</p>
          <p>Planet: {obj.origin.name}</p>
          <p>Sexo: {obj.gender}</p>
          <p>Supposed current location: {obj.location.name}</p>
          <p>already appeared in {obj.episode.length} episode</p>
          <img src={obj.image} alt={obj.name} />
        </div>
      )}
    </>
  );
};
