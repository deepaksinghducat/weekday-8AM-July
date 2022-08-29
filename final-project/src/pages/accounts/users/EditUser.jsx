import React, { Fragment } from 'react'

const EditUser = () => {
  return (
	  <Fragment>
      <h1>Edit User</h1>

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
          <label htmlFor="email" class="form-label">
            Email
          </label>
          <input
            type="email"
            class="form-control"
            id="email"
            placeholder="Enter email"
          />
        </div>

        <div class="mb-3">
          <label htmlFor="Password" class="form-label">
            password
          </label>
          <input
            type="password"
            class="form-control"
            id="Password"
            placeholder="Enter Password"
          />
        </div>

        <div class="mb-3">
          <label htmlFor="status" class="form-label">
            Role
          </label>
          <select
            class="form-select"
            id="status"
            aria-label="Default select example"
          >
            <option selected>Select Role</option>
            <option value="1">Admin</option>
            <option value="2">Customer</option>
          </select>
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
  )
}

export default EditUser