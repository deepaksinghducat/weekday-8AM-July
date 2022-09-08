import React , { Fragment, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { updateProductStart } from "../../../redux/actions/ProductAction";

const EditProduct = () => {

  const {id} = useParams();

  const { products } = useSelector(state => state.products);

  const product = products.find((product, index) => index == id);

  const [formValue, setFormValue] = useState(product);

  const { name,description, price, image_url, status } = formValue;

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const onInputChange = (e) => {
    e.preventDefault();

    const { name, value } = e.target;

    setFormValue({
      ...formValue,
      [name]: value,
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();

    dispatch(updateProductStart(formValue,id));

    toast.success('Product Updated Successfully');

    setTimeout(() => {
      navigate('/accounts/products');
    },5000)
  };

  return (
    <Fragment>
      <h1>Edit Product</h1>

      <form onSubmit={submitHandler}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            name="name"
            value={name}
            onChange={onInputChange}
            placeholder="Enter title"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <textarea
            className="form-control"
            placeholder="Description"
            id="description"
            name="description"
            value={description}
            onChange={onInputChange}
          ></textarea>
        </div>

        <div className="mb-3">
          <label htmlFor="Price" className="form-label">
            Price
          </label>
          <input
            type="number"
            className="form-control"
            id="Price"
            name="price"
            value={price}
            onChange={onInputChange}
            placeholder="Enter Price"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="Image" className="form-label">
            Image
          </label>
          <input
            type="text"
            className="form-control"
            id="Image"
            name="image_url"
            value={image_url}
            onChange={onInputChange}
            placeholder="Enter Image"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="status" className="form-label">
            Status
          </label>
          <select
            className="form-select"
            id="status"
            name="status"
            defaultValue={status}
            onChange={onInputChange}
            aria-label="Default select example"
          >
            <option>Select Status</option>
            <option value="1">Active</option>
            <option value="2">Inactive</option>
          </select>
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </Fragment>
  );
};

export default EditProduct;
