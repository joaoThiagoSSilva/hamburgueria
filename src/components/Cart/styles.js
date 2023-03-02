import styled from "styled-components";

export const StyledAside = styled.aside`

margin: 0px 20px;
width: 325px;

.container-cart {
  padding: 20px;
}

.cart {
  margin: 0 auto;
  max-width: 320px;
}

.cart h1 {
  margin-top: 20px;
  background-color: #27AE60;
  color: #fff;
  font-size: 18px;
  font-weight: 700;
  padding: 22px 0 22px 15px;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
}

.empty-cart {
  padding: 50px;
  background-color: #f5f5f5;
  text-align: center;
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
}

.empty-cart > h2 {
  color: #333333;
  margin-bottom: 20px;
  font-size: 18px;
  font-weight: 700;
}

.empty-cart > p {
  color: #828282;
}

.content-cart {
  background-color: #f5f5f5;
  display: flex;
  flex-direction: column;
}

.cart__list {
  max-height: 285px;
  overflow: auto;
  margin-bottom: 10px;
}

.button-empty-the-cart {
  cursor: pointer;
  padding: 15px;
  border: 1px solid transparent;
  border-radius: 6px;
  background-color:#E0E0E0;
  color: white;
  font-size: 14px;
  font-weight: 600;
  width: 100%;
  height: 60px;
}

@media (min-width: 900px) {
  .cart {
    width: 320px;
  }
}
`