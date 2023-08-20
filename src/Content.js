import React from "react";
import { useState } from "react";

const Content = () => {
  const [name, setName] = useState("Dave");

  const handleNameChange = () => {
    const names = ["Bob", "Dave", "Kevin"];
    const int = Math.floor(Math.random() * 3);
    setName(names[int]);
  };

  const handleClick = () => {
    console.log("you clicked it!");
  };
  const handleClick2 = (name) => {
    console.log(`${name} was clicked`);
  };
  const handleClick3 = (e) => {
    console.log(e.target.innerText);
  };
  // to create a duplicate use SHIFT + ALT + downArrow
  return (
    <main>
      {/* button 1 */}
      <p onDoubleClick={handleClick}>Hello {name}!</p>
      <button onClick={handleNameChange}>Change Name</button>

      {/* button 2 */}
      <button onClick={() => handleClick2("Dave")}>Click It</button>

      {/* button 3 */}
      <button
        onClick={(e) => {
          handleClick3(e);
        }}
      >
        Click It
      </button>
    </main>
  );
};

export default Content;
