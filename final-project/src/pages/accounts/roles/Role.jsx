import { Fragment, useEffect } from "react";
import Table from "react-bootstrap/Table";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getRoles } from "../../../redux/actions/RoleAction";

const Role = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRoles(['gfdsgdsg']));
  },[])

  return (
    <Fragment>
      <h1 className="mb-2">
        Roles

        <Link to='/accounts/create-role' className="btn btn-primary" style={{
          float: 'right'
        }}>Create Role</Link>
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
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td><Link to={`/accounts/edit-role/1`}>Edit</Link></td>
          </tr>
          <tr>
            <td>2</td>
            <td>Jacob</td>
            <td>Thornton</td>
          </tr>
        </tbody>
      </Table>
    </Fragment>
  );
};

export default Role;
