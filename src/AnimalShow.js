import { useState } from "react";
import bird from "./svg/bird.svg";
import cat from "./svg/cat.svg";
import cow from "./svg/cow.svg";
import dog from "./svg/dog.svg";
import gator from "./svg/gator.svg";
import heart from "./svg/heart.svg";
import horse from "./svg/horse.svg";

import "./styles/AnimalShow.css";

const svgMap = {
  bird,
  cat,
  cow,
  dog,
  gator,
  horse,
};

function AnimalShow({ type }) {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    if (count < 4) {
      setCount(count + 1);
    }
  };

  return (
    <div className="animalList animalsShow" onClick={handleClick}>
      <img className="animalsImg" src={svgMap[type]} alt={type} />
      <img className={`heartImg${count}`} src={heart} alt="heart" />
    </div>
  );
}

export default AnimalShow;
