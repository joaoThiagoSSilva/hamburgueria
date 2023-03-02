import { GreenButton } from '../../styles/GreenButton';
import { StyledInputDiv } from './styles';
import './styles.css'

const InputSearch = ({ products, setFilteredProducts }) => {
  const handleSearch = (inputValue) => {
    if (inputValue !== "") {
      const filteredGroup = products.filter(
        (elem) =>
          elem.name.toLowerCase().includes(inputValue.toLowerCase()) ||
          elem.category.toLowerCase().includes(inputValue.toLowerCase())
      );
      setFilteredProducts(filteredGroup);
    } else {
      setFilteredProducts(products);
    }
  };

  return (
    <StyledInputDiv>
      <input
        type="text"
        placeholder="Digitar pesquisa"
        onChange={(event) => handleSearch(event.target.value)}
      />
      <GreenButton type="button">Pesquisar</GreenButton>
    </StyledInputDiv>
  );
};

export default InputSearch;
