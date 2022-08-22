import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "../redux/actions/ProductActions";
import Product from "./Product";

function Home() {
  const dispatch = useDispatch();

  const { products } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getProduct());
  }, [dispatch]);

  return (
    <div className="row mb-4">
      {products.length > 0 &&
        products.map((product) => (
          <div className="col-sm-3" key={product.id}>
            <Product data={product} />
          </div>
        ))}
    </div>
  );
}

export default Home;
