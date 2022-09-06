import React, { Fragment, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { addRoleStart } from "../../../redux/actions/RoleAction";

const initialValue = {
  name: "",
  status: "",
};

const CreateRole = () => {
  const [formValue, setFormValue] = useState(initialValue);

  const { name, status } = formValue;

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

    dispatch(addRoleStart(formValue));

    toast.success('Role Created Successfully');

    setTimeout(() => {
      navigate('/accounts/roles');
    },5000)
  };

  return (
    <Fragment>
      <h1>Create Role</h1>
      <form onSubmit={submitHandler}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
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
          <label htmlFor="status" className="form-label">
            Status
          </label>
          <select
            name="status"
            className="form-select"
            id="status"
            aria-label="Default select example"
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

export default CreateRole;
