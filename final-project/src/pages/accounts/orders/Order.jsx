import { Fragment } from "react";
import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";

const Order = () => {
  return (
    <Fragment>
      <h1 className="mb-2">Orders</h1>
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
              <Link to={`/accounts/order-detail/1`}>view</Link>
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

export default Order;
