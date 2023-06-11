import React from "react";

import iconCarrito from "../../media/Iconcarrito.svg";

const CartWidget = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img src={iconCarrito} alt="carrito" />
      <span>5</span>
    </div>
  );
};

export default CartWidget;
