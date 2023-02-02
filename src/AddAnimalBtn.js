import "./styles/AnimalBtn.css";

function AddAnimalBtn({ type, getRandomAnimal, setAnimals }) {
  const handleClick = () => {
    setAnimals([...type, getRandomAnimal()]);
  };

  return (
    <div>
      <button className="animalBtn" onClick={handleClick}>
        Add Animal
      </button>
    </div>
  );
}

export default AddAnimalBtn;
