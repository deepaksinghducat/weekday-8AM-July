import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/actions/CartActions";

function Product({ data }) {
  const dispatch = useDispatch();

  return (
    <div className="card mt-4">
      <img src={data.image} className="card-img-top" alt={data.title} />
      <div className="card-body">
        <h5 className="card-title">{data.title}</h5>
        <p className="card-text">{data.description}</p>
        <button
          className="btn btn-primary btn-block"
          onClick={() => dispatch(addToCart(data))}
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
}

export default Product;
