import React, { Fragment } from "react";

const OrderDetail = () => {
  return (
    <Fragment>
      <div className="row mb-4">
        <ul class="list-group col-sm-12">
          <li class="list-group-item active" aria-current="true">
            Incremented Id : #00001
          </li>
        </ul>
      </div>

      <div className="row mb-4">
        <ul class="list-group col-sm-6">
          <li class="list-group-item active" aria-current="true">
            Billing Address
          </li>
          <li class="list-group-item">A second item</li>
          <li class="list-group-item">A third item</li>
          <li class="list-group-item">A fourth item</li>
          <li class="list-group-item">And a fifth one</li>
        </ul>
        <ul class="list-group col-sm-6">
          <li class="list-group-item active" aria-current="true">
            Shipping Address
          </li>
          <li class="list-group-item">A second item</li>
          <li class="list-group-item">A third item</li>
          <li class="list-group-item">A fourth item</li>
          <li class="list-group-item">And a fifth one</li>
        </ul>
      </div>

      <div className="row mb-4">
        <ul class="list-group col-sm-12">
          <li class="list-group-item active" aria-current="true">
            Products
          </li>
          <li class="list-group-item">
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">id</th>
                  <th scope="col">Image</th>
                  <th scope="col">Name</th>
                  <th scope="col">Price</th>
                  <th scope="col">Qty</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>fasfdasf</td>
                  <td>Name</td>
                  <td>$90</td>
                  <td>1</td>
                </tr>
                <tr>
                  <th scope="row">1</th>
                  <td>fasfdasf</td>
                  <td>Name</td>
                  <td>$90</td>
                  <td>1</td>
                </tr>
                <tr>
                  <th scope="row">1</th>
                  <td>fasfdasf</td>
                  <td>Name</td>
                  <td>$90</td>
                  <td>1</td>
                </tr>
              </tbody>
            </table>
          </li>
        </ul>
      </div>

      <div className="row mb-4">
        <ul class="list-group col-sm-12">
          <li class="list-group-item active" aria-current="true">
            Order Summary
          </li>
          <li class="list-group-item">
            Subtotal: $10
          </li>
          <li class="list-group-item">
            Tax : $10
          </li>
          <li class="list-group-item">
            Grand total : $20
          </li>
        </ul>
      </div>
    </Fragment>
  );
};

export default OrderDetail;
