import { useSelector } from "react-redux";
import { Container } from "react-bootstrap";
import CartItem from "../components/CartItem";

export default function Cart() {
    const cart = useSelector((state) => state.cart);

    // Subtotal calculation with price conversion
    const subtotal = cart.reduce((acc, item) => {
        const price = parseFloat(item.price.replace("RM", "").trim()) || 0;
        return acc + price * (item.amount || 0);
    }, 0);

    console.log("Cart State:", cart);

    return (
        <Container>
            <h2>Your Cart:</h2>
            {cart.map((item) => (
                <CartItem key={item.id} item={item} />
            ))}
            <h4 className="mt-4">Subtotal: RM {subtotal.toFixed(2)}</h4>
        </Container>
    )
}