import { useState } from "react";
import AnimalShow from "./AnimalShow";
import AddAnimalBtn from "./AddAnimalBtn";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <AddAnimalBtn count={count} setCount={setCount} />
      <AnimalShow count={count} />
    </div>
  );
}

export default App;
