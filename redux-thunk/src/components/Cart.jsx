import React from "react";
import { useSelector } from "react-redux";

function Cart() {
  const { carts } = useSelector(state => state.carts);

  return (
    <ul className="list-group">
		{
			carts.length > 0 ? carts.map((item) => (
				<li className="list-group-item">
					<div>title: {item.title}</div>
					<div>Price: ${item.price}</div>
				</li>
			)) : (<li className="list-group-item">No Item in Cart</li>)
		}
    </ul>
  );
}

export default Cart;
