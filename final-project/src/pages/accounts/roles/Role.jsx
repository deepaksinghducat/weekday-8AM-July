import { Fragment } from "react";
import Table from "react-bootstrap/Table";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { deleteRoleStart } from "../../../redux/actions/RoleAction";

const Role = () => {
  const { roles } = useSelector((state) => state.role);

  const dispatch = useDispatch();

  const deleteHandler = (index) => {
    dispatch(deleteRoleStart(index));
  
    toast.error('Role Delete Successfully');
  
  };

  return (
    <Fragment>
      <h1 className="mb-2">
        Roles
        <Link
          to="/accounts/create-role"
          className="btn btn-primary"
          style={{
            float: "right",
          }}
        >
          Create Role
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
          {roles.length > 0 &&
            roles.map((role, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{role.name}</td>
                <td>
                  <Link
                    to={`/accounts/edit-role/${index}`}
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

export default Role;
