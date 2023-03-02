import { StyledTotalCart } from "./styles";

const TotalCart = ({ currentSale }) => {
  const calc = currentSale.reduce((prev, cur) => {
    if (cur.quantity > 1) {
      return prev + +cur.price * cur.quantity;
    } else {
      return prev + +cur.price;
    }
  }, 0);

  return (
    <StyledTotalCart>
      <p>Total:</p>
      <p>R$:{calc.toFixed(2)}</p>
    </StyledTotalCart>
  );
};

export default TotalCart;
