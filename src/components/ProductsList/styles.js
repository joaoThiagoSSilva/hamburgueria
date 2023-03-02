import styled from "styled-components";

export const StyledUl = styled.ul`
  display: flex;
  flex-direction: row;
  overflow: auto;
  align-items: center;
  gap: 15px;
  margin: 20px 0px 70px 0px;
  width: 85vw;
  
  @media (min-width: 900px) {
  flex-wrap: wrap;
}

::-webkit-scrollbar {
  display: none;
}
`