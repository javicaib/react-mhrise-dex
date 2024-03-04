import { useState } from "react";
import { toSnakeCase, toTitleCase } from "../../helpers/toCases";
import { Monster } from "../../services/monstersFetch";
import "./MonsterCard.css";
type MonsterCardProps = {
  monster: Monster;
};
function MonsterCard({ monster }: MonsterCardProps) {
  const [flip, setFlip] = useState(false);
  const handleFlip = () => {
    setFlip(!flip);
  };
  const name = toTitleCase(monster.name);
  const imgSrc = `MHRise-${toSnakeCase(name)}_Icon.png`;
  return (
    <div className="card">
      <div className={`front  ${flip ? "flip" : ""}`} onClick={handleFlip}>
        <img src={imgSrc} alt={name} loading="lazy" />
        <span>{name}</span>
      </div>
      <div className={`back  ${flip ? "" : "flip"}`} onClick={handleFlip}>
        <h2>{name}</h2>
        <h2>{toTitleCase(monster.type)}</h2>
        <section>
          <span>Debilidades</span>
          <ul className="elements">
            {monster.weakness.map((weak, index) => {
              return (
                <li key={index}>
                  <img src={`/elements/${weak.toLowerCase()}.png`} alt="fire" />
                </li>
              );
            })}
          </ul>
        </section>
        <a href="/1"> Ver detalles</a>
      </div>
    </div>
  );
}
export default MonsterCard;
