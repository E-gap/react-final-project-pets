import React from "react";

function ChooseOption({ onSelectCategory }) {
  const categories = ["Your pet", "sell", "lost/found","in good hands"]; // список доступних категорій

  return (
    <div>
      <h2>Choose category:</h2>
      <ul>
        {categories.map((category) => (
          <li key={category}>
            <button onClick={() => onSelectCategory(category)}>{category}</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ChooseOption;
