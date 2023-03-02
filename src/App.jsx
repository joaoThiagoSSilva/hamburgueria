import { useEffect, useState } from "react";
import { api } from "./components/api/api";
import Cart from "./components/Cart/Cart";
import Header from "./components/Header/Header";
import ProductList from "./components/ProductsList/ProductList";
import { Main } from "./components/styles/Main";


function App() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentSale, setCurrentSale] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const response = await api.get("products");
        setProducts(response.data);
        setFilteredProducts(response.data);
      } catch (error) {
        console.log(error);
      }
    })();
  },[]);

  return (
    <div className="App">
      <Header products={products} setFilteredProducts={setFilteredProducts} />
    <Main>
    <ProductList
        filteredProducts={filteredProducts}
        currentSale={currentSale}
        setCurrentSale={setCurrentSale}
      />
      <Cart currentSale={currentSale} setCurrentSale={setCurrentSale} />
    </Main>
    </div>
  );
}

export default App;
