function AddAnimalBtn() {
  const handleClick = () => {
    console.log("Button was clicked");
  };

  return (
    <div>
      <button onClick={handleClick}>Add Animal</button>
    </div>
  );
}

export default AddAnimalBtn;