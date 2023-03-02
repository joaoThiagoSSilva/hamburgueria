import TotalCart from "./TotalCart/TotalCart";
import CardCart from './CartCard/CartCard'
import { StyledAside } from "./styles";

const Cart = ({ currentSale, setCurrentSale }) => {
  return (
    <StyledAside>
      <div className="cart">
        <h1>Carrinho de Compras</h1>
        <div className="cart__section">
          {currentSale.length > 0 ? (
            <div className="content_cart">
              <ul className="cart__list">
                {currentSale.map((elem, index) => {
                  return (
                    <CardCart
                      key={index}
                      id={elem.id}
                      name={elem.name}
                      category={elem.category}
                      img={elem.img}
                      quantity={elem.quantity}
                      currentSale={currentSale}
                      setCurrentSale={setCurrentSale}
                    />
                  );
                })}
              </ul>
              <TotalCart currentSale={currentSale} />
              <button className="button-empty-the-cart" type="button" onClick={() => setCurrentSale([])}>
                Remover Todos
              </button>
            </div>
          ) : (
            <div className="empty-cart" >
              <h2>Sua sacola está vazia</h2>
              <p>Adicione itens</p>
            </div>
          )}
        </div>
      </div>
    </StyledAside>
  );
};

export default Cart;
