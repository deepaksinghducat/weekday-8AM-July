import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useDispatch, useSelector } from "react-redux";
import { addToCartStart } from "../../redux/actions/CartAction";
import { cartHelper } from "../../redux/helpers/CartHelper";

const CardUi = ({ data }) => {
  const cart = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  const addToCartHandler = () => {
    const calculatedCart = cartHelper(cart, data);

    dispatch(addToCartStart(calculatedCart));
  };

  return (
    <Card>
      <Card.Img variant="top" src={data.image_url} />
      <Card.Body>
        <Card.Title>{data.name}</Card.Title>
        <Card.Text>
          <>{data.description}</>
        </Card.Text>
        <Card.Text>
          <>Price: ${data.price}</>
        </Card.Text>
        <Button variant="primary" onClick={addToCartHandler}>
          Add To Cart
        </Button>
      </Card.Body>
    </Card>
  );
};

export default CardUi;
