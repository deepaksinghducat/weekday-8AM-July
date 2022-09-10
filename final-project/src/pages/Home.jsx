import { useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import { useSelector } from "react-redux";
import CardUi from "../components/ui/CardUi";

const Home = () => {

  const { products } = useSelector(state => state.products);

  useEffect(() => {

  },[])

  return (
    <Row className="mb-4">
      {products.length > 0 &&
        products.map((product, index) => (
          <Col lg="3" key={index} className="mt-4">
            <CardUi data={product} />
          </Col>
        ))}
    </Row>
  );
};

export default Home;
