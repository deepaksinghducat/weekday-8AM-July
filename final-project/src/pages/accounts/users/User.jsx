import { Fragment } from "react";
import Table from "react-bootstrap/Table";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { deleteCustomerStart } from "../../../redux/actions/CustomerAction";

const User = () => {
  const { customers } = useSelector((state) => state.customer);

  const dispatch = useDispatch();

  const deleteHandler = (index) => {
    dispatch(deleteCustomerStart(index));

    toast.error("User Delete Successfully");
  };

  return (
    <Fragment>
      <h1 className="mb-2">
        User
        <Link
          to="/accounts/user-create"
          className="btn btn-primary"
          style={{
            float: "right",
          }}
        >
          Create User
        </Link>
      </h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>name</th>
            <th>email</th>
            <th>role</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {customers.length > 0 &&
            customers.map((customer, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{customer.name}</td>
                <td>{customer.email}</td>
                <td>{customer.role}</td>
                <td>
                  <Link
                    to={`/accounts/edit-user/${index}`}
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

export default User;
