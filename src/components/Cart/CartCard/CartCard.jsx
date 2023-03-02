import { toast, ToastContainer } from "react-toastify";
import { StyledCardCart } from "./styles";

const CartCard = ({
  name,
  category,
  img,
  id,
  quantity,
  currentSale,
  setCurrentSale,
}) => {
  const removeFromCart = (id) => {
    const product = currentSale.filter((elem) => elem.id === id);
    if (product[0].quantity === 1) {
      const emptyArray = currentSale.filter((elem) => elem.id !== id);
      setCurrentSale(emptyArray);
    } else if (product[0].quantity > 1) {
      const updateList = currentSale.map((obj) => {
        if (obj === product[0]) {
          return { ...obj, quantity: obj.quantity - 1 };
        }
        return obj;
      });
      setCurrentSale(updateList);
    }
    toast.success("Item removido do carrinho!", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  return (
    <StyledCardCart className="cart-card">
    <div className="cart-card__content-div">
      <figure className="img-cart">
        <img src={img} alt={name} />
      </figure>
      <div className="div-text-cart">
        <h2>{name}</h2>
        <span>{category}</span>
        <p>{quantity}</p>
      </div>
    </div>
    <button type="button" onClick={() => removeFromCart(id)}>
      Remover
    </button>
    <ToastContainer>
      
    </ToastContainer>
  </StyledCardCart>
  );
};

export default CartCard;
