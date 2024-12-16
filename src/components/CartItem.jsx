import { Card, Col, Row, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { increase, decrease } from "../feature/cart/cartSlice";

export default function CartItem({ item }) {
    const dispatch = useDispatch();

    // Convert price safely to a number
    const price = parseFloat(item.price.replace("RM", "").trim()) || 0;
    const handleIncrease = () => dispatch(increase(item.id));
    const handleDecrease = () => dispatch(decrease(item.id));

    return (
        <Card className="mb-2">
            <Card.Body>
                <Row className="align-items-center">
                    {/* Item Image */}
                    <Col xs={4} md={2}>
                        <Card.Img
                            variant="top"
                            src={`https://picsum.photos/id/${item.id}/200`}
                            alt={item.name}
                        />
                    </Col>

                    {/* Item Name and Description */}
                    <Col xs={8} md={4}>
                        <Card.Title>{item.name}</Card.Title>
                        <Card.Text>{item.description}</Card.Text>
                    </Col>

                    {/* Quantity Adjustment */}
                    <Col xs={6} md={3} className="text-center">
                        <Button variant="light" size="sm" onClick={handleDecrease} className="me-2">
                            –
                        </Button>
                        <span>{item.amount}</span>
                        <Button variant="light" size="sm" onClick={handleIncrease} className="ms-2">
                            +
                        </Button>
                    </Col>

                    {/* Subtotal */}
                    <Col xs={6} md={3} className="text-end">
                        <strong style={{ color: "red" }}>
                            RM{(price * item.amount).toFixed(2)}
                        </strong>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    );
}
