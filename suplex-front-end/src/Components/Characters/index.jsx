import "./style.css";
import { CharCard } from "../CharCard";

export const Characters = ({ props }) => {
  return (
    <div>
      {props.map((character, index) =>
        character.status === "Alive" ? (
          <CharCard key={index} className="vivo" obj={character} />
        ) : (
          <CharCard key={index} className="morto" obj={character} />
        )
      )}
    </div>
  );
};
