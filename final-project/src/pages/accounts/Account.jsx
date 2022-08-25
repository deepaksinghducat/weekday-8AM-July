import React, { Fragment } from 'react'
import { Outlet } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import SideBar from './layouts/SideBar';

const Account = () => {
  return (
    <Fragment>
      <Row className="mt-4">
        <Col lg="2"><SideBar /></Col>
        <Col lg="10"><Outlet/></Col>
      </Row>      
    </Fragment>
  )
}

export default Account