import { useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import { useDispatch } from "react-redux";
import CardUi from "../components/ui/CardUi";
import Products from "../dummyData/Products";
import { getProducts } from "../redux/actions/ProductAction";

const Home = () => {
  const products = Products;

  const dispatch = useDispatch();

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