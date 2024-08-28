import React from "react";

const Cart = ({ cartItems, onClear }) => {
  return (
    <>
      <div>Cart:</div>
      <ul>
        {cartItems.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <button onClick={onClear} className="bg-pink-400 py-2 px-8 ">
        Clear
      </button>
    </>
  );
};

export default Cart;
