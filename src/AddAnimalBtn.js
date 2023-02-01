function AddAnimalBtn({ type, getRandomAnimal, setAnimals }) {
  const handleClick = () => {
    setAnimals([...type, getRandomAnimal()]);
  };

  return (
    <div>
      <button onClick={handleClick}>Add Animal</button>
    </div>
  );
}

export default AddAnimalBtn;
