import React, { Fragment, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { addCustomerStart } from "../../../redux/actions/CustomerAction";


const initialValue = {
  name: "",
  email: "",
  password: "",
  role: "",
  status: "",
};


const CreateUser = () => {
  const [formValue, setFormValue] = useState(initialValue);

  const { name, email, password, role, status} = formValue;

  const onInputChange = (e) => {
    e.preventDefault();

    const { name, value } = e.target;

    setFormValue({
      ...formValue,
      [name]: value,
    });
  };

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const { roles } = useSelector(state => state.role)

  console.log(typeof(roles[0].status));

  const submitHandler = (event) => {
    event.preventDefault();

    dispatch(addCustomerStart(formValue));

    toast.success('Customer Created Successfully');

    setTimeout(() => {
      navigate('/accounts/users');
    },5000)
  };

  return (
    <Fragment>
      <h1>Create User</h1>

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
            {
              roles.length > 0 && roles.map((role,index) => (
                
                <Fragment key={index}>
                  {
                    role.status === "1"  && <option value={role.name}>{role.name}</option>
                  }
                </Fragment>
              ))
            }
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
            <option >Select Status</option>
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

export default CreateUser;
