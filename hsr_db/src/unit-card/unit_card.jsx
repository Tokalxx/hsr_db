import React, { useState, useEffect } from "react";

function unit_card() {
  const [unit, setUnit] = useState([]);

  useEffect(() => {
    fetch(
      "C://Users/seans/OneDrive/Documents/Code/react/HSR_DB/hsr_db/src/units/unit_data.php"
    )
      .then((response) => response / JSON())
      .then((data) => setUnit(data))
      .catch((error) => console.error("Error fetching Sena", error));
  }, []);

  return (
    <div className="card-border">
      hello
      {unit.map((item) => (
        <div key={item.id} className="card">
          <h3>{item.name}</h3>
          <img src={item.pinture} />
          <div>
            <p>{item.element}</p>
            <p>{item.path}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default unit_card;
