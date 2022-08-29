import React , { Fragment } from "react";

const EditProduct = () => {
  return (
    <Fragment>
      <h1>Edit Product</h1>

      <form>
        <div class="mb-3">
          <label htmlFor="title" class="form-label">
            Name
          </label>
          <input
            type="text"
            class="form-control"
            id="title"
            placeholder="Enter title"
          />
        </div>

        <div class="mb-3">
          <label htmlFor="description" class="form-label">
            Description
          </label>
          <textarea
            class="form-control"
            placeholder="Description"
            id="description"
          ></textarea>
        </div>

        <div class="mb-3">
          <label htmlFor="Price" class="form-label">
            Price
          </label>
          <input
            type="number"
            class="form-control"
            id="Price"
            placeholder="Enter Price"
          />
        </div>

        <div class="mb-3">
          <label htmlFor="Image" class="form-label">
            Image
          </label>
          <input
            type="text"
            class="form-control"
            id="Image"
            placeholder="Enter Image"
          />
        </div>

        <div class="mb-3">
          <label htmlFor="status" class="form-label">
            Status
          </label>
          <select
            class="form-select"
            id="status"
            aria-label="Default select example"
          >
            <option selected>Select Status</option>
            <option value="1">Active</option>
            <option value="2">Inactive</option>
          </select>
        </div>

        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
    </Fragment>
  );
};

export default EditProduct;
