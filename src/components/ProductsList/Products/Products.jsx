import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { GreenButton } from "../../styles/GreenButton";
import { StyledLi } from "./styles";

const Products = ({
  id,
  name,
  img,
  price,
  category,
  setCurrentSale,
  currentSale,
}) => {
  const addProductToCart = (newProduct) => {
    if (!currentSale.some((elem) => elem.id === newProduct.id)) {
      setCurrentSale((previousSale) => [...previousSale, newProduct]);
      toast.success("Produto adicionado no carrinho!");
    } else {
      const productIndex = currentSale.findIndex(
        (element) => element.id === newProduct.id
      );
      const updatedList = currentSale.map((obj, index) => {
        if (index === productIndex) {
          return { ...obj, quantity: obj.quantity + 1 };
        }
        return obj;
      });
      setCurrentSale(updatedList);
    }
  };

  return (
    <StyledLi>
      <figure>
        <img src={img} alt={name} />
      </figure>
      <div>
        <h3>{name}</h3>
        <span>{category}</span>
        <p>R$ {price.toFixed(2)}</p>
        <GreenButton
          onClick={() =>
            addProductToCart({
              id: id,
              name: name,
              category: category,
              price: price,
              img: img,
              quantity: 1,
            })
          }
        >
          Adicionar
        </GreenButton>
      </div>
    </StyledLi>
  );
};
export default Products;
