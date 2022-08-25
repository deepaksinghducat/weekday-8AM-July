import { Row, Col } from "react-bootstrap";
import CardUi from "../components/ui/CardUi";
import Products from "../dummyData/Products";

const Home = () => {
  const products = Products;

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
