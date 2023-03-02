import styled from "styled-components";

export const StyledCardCart = styled.li`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  background: #F5F5F5;
  border-bottom: 1px solid #E0E0E0;
  overflow: hidden;
  min-width: 300px;

.cart-card__content-div {
  display: flex;
  gap: 10px;
}

.img-cart {
  height: 70px;
  width: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #E0E0E0;
  border-radius: 6px;
}
.img-cart > img {
    width: 100%;
}

.div-text-cart {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.div-text-cart > h2 {
  margin-top: 4px;
  font-weight: 700;
  color: #333333;
  font-size: 14px;
  width: 77px;
}

.div-text-cart > span {
  font-size: 12px;
  color: #828282;
}
 button {
  align-self: baseline;
  background-color: transparent;
  border: 1px solid transparent;
  padding: 5px;
  cursor: pointer;
  color: #bdbdbd;
  font-size: 12px;
}
@media (min-width: 900px) {
    min-width: 300px;
}
`