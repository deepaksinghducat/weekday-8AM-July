import React, {Fragment} from "react";

const EditRole = () => {
  return (
    <Fragment>
      <h1>Edit Role</h1>

      <form>
        <div class="mb-3">
          <label htmlFor="title" class="form-label">
            Title
          </label>
          <input
            type="text"
            class="form-control"
            id="title"
            placeholder="Enter title"
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

export default EditRole;
