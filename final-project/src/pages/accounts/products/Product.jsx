import { Fragment } from "react";
import Table from "react-bootstrap/Table";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { deleteProductStart } from "../../../redux/actions/ProductAction";

const Product = () => {
  const { products } = useSelector((state) => state.products);

  const dispatch = useDispatch();

  const deleteHandler = (index) => {
    dispatch(deleteProductStart(index));

    toast.error("Product Deleted Successfully");
  };

  return (
    <Fragment>
      <h1 className="mb-2">
        Products
        <Link
          to="/accounts/create-product"
          className="btn btn-primary"
          style={{
            float: "right",
          }}
        >
          Create Product
        </Link>
      </h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {products.length > 0 &&
            products.map((product, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{product.name}</td>
                <td>
                  <Link
                    to={`/accounts/edit-product/${index}`}
                    className="btn btn-sm btn-outline-primary"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    className="mx-2 btn btn-sm btn-outline-danger"
                    onClick={() => deleteHandler(index)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
    </Fragment>
  );
};

export default Product;
