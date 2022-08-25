import { Fragment } from "react";
import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";

const Product = () => {
  return (
    <Fragment>
      <h1 className="mb-2">Products</h1>
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
            <td>
              <Link to={`/accounts/edit-role/1`}>Edit</Link>
            </td>
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

export default Product;
