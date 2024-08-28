import React, { useState } from "react";

const handleClick = () => {
  const newDrink = {
    title: drink.title,
    price: 8,
  };
  setDrink(newDrink);
};

const Example = () => {
  return (
    <>
      <div>Example</div>
      <button onClick={handleClick}>Set Price!</button>
    </>
  );
};

export default Example;
