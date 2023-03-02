import logo from "../../assets/logo.svg";
import InputSearch from "./InputSearch/InputSearch";
import { StyledDiv, StyledHeader } from "./styles";

const Header = ({ products, setFilteredProducts }) => {
  return (
    <StyledHeader>
      <StyledDiv>
      <img src={logo} alt="Logo Burguer Kenzie" />
      <InputSearch
        products={products}
        setFilteredProducts={setFilteredProducts}
      />
      </StyledDiv>
    </StyledHeader>
  );
};

export default Header;
