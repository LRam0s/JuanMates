import React from "react";
import { BsCart2 } from "react-icons/bs";
import { Link } from "react-router-dom";

const CartWidget = () => {
  return (
    <Link to="/cart">
      <BsCart2 size={35} />
    </Link>
  );
};

export default CartWidget;
