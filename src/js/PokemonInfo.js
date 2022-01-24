import style from "../css/info.module.css";
import { Button } from "@mui/material";
const PokemonInfo = ({
  id,
  image,
  name,
  type,
  hp,
  attack,
  defence,
  specialDefence,
  specialAttack,
  speed,
  weight,
  height,
  funcBack,
}) => {
  const backgroundStyle = type + " " + style.info;
  const hpStyle = {
    width: hp + "px",
  };
  const defenceStyle = {
    width: defence + "px",
  };
  const attackStyle = {
    width: attack + "px",
  };
  const speedStyle = {
    width: speed + "px",
  };
  const specAtackStyle = {
    width: specialAttack + "px",
  };
  const specialDefencStyle = {
    width: specialDefence + "px",
  };
  const weightStyle = {
    width: weight + "px",
  };
  const heightStyle = {
    width: height + "px",
  };

  return (
    <div className={backgroundStyle}>
      <div className={style.id}>
        <h2>id: {id}</h2>
        <Button className="btn" variant="outlined" onClick={funcBack}>
          Back
        </Button>
      </div>
      <div className={style.statsbox}>
        <div>
          <img src={image} alt="img" />
        </div>
        <div className={style.stats}>
          <h2>{name}</h2>
          <ul>
            <li>Hp: {hp}</li>
            <div className={style.scale}>
              <div style={hpStyle}></div>
            </div>
            <li>Defence: {defence}</li>
            <div className={style.scale}>
              <div style={defenceStyle}></div>
            </div>
            <li>Attack: {attack}</li>
            <div className={style.scale}>
              <div style={attackStyle}></div>
            </div>
            <li>Speed: {speed}</li>
            <div className={style.scale}>
              <div style={speedStyle}></div>
            </div>
            <li>Specil Attack: {specialAttack}</li>
            <div className={style.scale}>
              <div style={specAtackStyle}></div>
            </div>
            <li>Special Defence: {specialDefence} </li>
            <div className={style.scale}>
              <div style={specialDefencStyle}></div>
            </div>
            <li>Weight: {weight}</li>
            <div className={style.scale}>
              <div style={weightStyle}></div>
            </div>
            <li>Height: {height}</li>
            <div className={style.scale}>
              <div style={heightStyle}></div>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PokemonInfo;
