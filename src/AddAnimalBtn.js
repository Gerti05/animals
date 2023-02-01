function AddAnimalBtn({count, setCount}) {
  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <button onClick={handleClick}>Add Animal</button>
    </div>
  );
}

export default AddAnimalBtn;
