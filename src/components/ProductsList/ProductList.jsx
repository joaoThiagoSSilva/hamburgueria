import Products from "./Products/Products";
import { StyledUl } from "./styles";

const ProductList = ({ filteredProducts, currentSale, setCurrentSale }) => {
  return (
    <StyledUl>
      {filteredProducts.map((elem) => {
        return (
          <Products
            key={elem.id}
            id={elem.id}
            name={elem.name}
            category={elem.category}
            price={elem.price}
            img={elem.img}
            currentSale={currentSale}
            setCurrentSale={setCurrentSale}
          />
        );
      })}
    </StyledUl>
  );
};

export default ProductList;
