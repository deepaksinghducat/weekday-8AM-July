import React, { Fragment, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { updateCustomerStart } from "../../../redux/actions/CustomerAction";

const EditUser = () => {
  const { id } = useParams();

  const { customers } = useSelector((state) => state.customer);

  const customer = customers.find((customer, index) => index === parseInt(id));

  const { roles } = useSelector((state) => state.role);

  const [formValue, setFormValue] = useState(customer);

  const { name, email, password, role, status } = formValue;

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const submitHandler = (event) => {
    event.preventDefault();

    dispatch(updateCustomerStart(formValue,id));

    toast.success("Customer Updated Successfully");

    setTimeout(() => {
      navigate("/accounts/users");
    }, 5000);
  };

  const onInputChange = (e) => {
    e.preventDefault();

    const { name, value } = e.target;

    setFormValue({
      ...formValue,
      [name]: value,
    });
  };

  return (
    <Fragment>
      <h1>Edit User</h1>

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
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={email}
            onChange={onInputChange}
            placeholder="Enter email"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="Password" className="form-label">
            password
          </label>
          <input
            type="password"
            className="form-control"
            id="Password"
            name="password"
            value={password}
            onChange={onInputChange}
            placeholder="Enter Password"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="status" className="form-label">
            Role
          </label>
          <select
            className="form-select"
            id="status"
            aria-label="Default select example"
            name="role"
            defaultValue={role}
            onChange={onInputChange}
          >
            <option>Select Role</option>
            {roles.length > 0 &&
              roles.map((role, index) => (
                <Fragment key={index}>
                  {role.status === "1" && (
                    <option value={role.name}>{role.name}</option>
                  )}
                </Fragment>
              ))}
          </select>
        </div>

        <div className="mb-3">
          <label htmlFor="status" className="form-label">
            Status
          </label>
          <select
            className="form-select"
            id="status"
            aria-label="Default select example"
            name="status"
            onChange={onInputChange}
            defaultValue={status}
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

export default EditUser;
