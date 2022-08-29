import { Fragment } from "react";
import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";

const User = () => {
  return (
    <Fragment>
      <h1 className="mb-2">User
      
      <Link to='/accounts/user-create' className="btn btn-primary" style={{
          float: 'right'
        }}>Create User</Link>
      </h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>FirstName</th>
            <th>LastName</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Mark</td>
            <td>
              <Link to={`/accounts/edit-user/1`}>Edit</Link>
            </td>
          </tr>
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Mark</td>
            <td>
              <Link to={`/accounts/edit-user/1`}>Edit</Link>
            </td>
          </tr>
        </tbody>
      </Table>
    </Fragment>
  );
};

export default User;
