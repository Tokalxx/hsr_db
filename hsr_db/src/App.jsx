import { useState } from "react";
import UnitCard from "../src/unit-card/unit_card.jsx";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <UnitCard />
    </>
  );
}

export default App;
