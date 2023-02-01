import { useState } from "react";
import AnimalShow from "./AnimalShow";
import AddAnimalBtn from "./AddAnimalBtn";

function getRandomAnimal() {
  const animalsArr = ["bird", "cat", "cow", "dog", "gator", "horse"];

  return animalsArr[Math.floor(Math.random() * animalsArr.length)];
}

function App() {
  const [animals, setAnimals] = useState([]);

  const renderAnimals = animals.map((animal, index) => {
    return <AnimalShow type={animal} key={index} />;
  });

  return (
    <div>
      <AddAnimalBtn
        type={animals}
        setAnimals={setAnimals}
        getRandomAnimal={getRandomAnimal}
      />
      <div>{renderAnimals}</div>
    </div>
  );
}

export default App;
