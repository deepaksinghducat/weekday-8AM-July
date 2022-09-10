import React from "react";
import { Button, Col, Form, InputGroup, Row, Table } from "react-bootstrap";
import ListGroup from "react-bootstrap/ListGroup";
import { useSelector } from "react-redux";

const Cart = () => {
  const cart = useSelector((state) => state.cart);

  return (
    <Row className="mt-4">
      <Col lg="8">
        <Table bordered>
          <thead>
            <tr>
              <th>#</th>
              <th>Product</th>
              <th>QTY</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {cart.cartItems.length > 0 &&
              cart.cartItems.map((item, index) => (
                <tr>
                  <td>1</td>
                  <td>
                    <p>
                      <img
                        src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_640.jpg"
                        alt="fasfd"
                        height="50"
                      />
                    </p>
                    <p>Product Name</p>
                    <p>Price: $10</p>
                    <p>Quantity: 1</p>
                  </td>
                  <td className="d-flex">
                    <button className="btn btn-primary btn-sm">+</button>
                    <input
                      type="text"
                      value="1"
                      style={{
                        width: "50px",
                        textAlign: "center",
                      }}
                    />
                    <button className="btn btn-primary btn-sm">-</button>
                  </td>
                  <td>
                    <Button variant="danger" size="sm">
                      Remove
                    </Button>
                  </td>
                </tr>
              ))}
          </tbody>
        </Table>

        <Button variant="primary" size="lg">
          Update
        </Button>
      </Col>
      <Col lg="4">
        <ListGroup>
          <ListGroup.Item className="d-flex justify-content-between">
            <div>Sub Total:</div>
            <div>$ {cart.subTotal}</div>
          </ListGroup.Item>
          <ListGroup.Item className="d-flex justify-content-between">
            <div>Taxs:</div>
            <div>$ {cart.taxes}</div>
          </ListGroup.Item>
          <ListGroup.Item className="d-flex justify-content-between">
            <div>Grand Total:</div>
            <div>$ {cart.grandTotal}</div>
          </ListGroup.Item>
          <ListGroup.Item className="d-grid gap-2">
            <Button variant="primary" size="lg">
              Proceed To Checkout
            </Button>
          </ListGroup.Item>
        </ListGroup>
      </Col>
    </Row>
  );
};

export default Cart;
