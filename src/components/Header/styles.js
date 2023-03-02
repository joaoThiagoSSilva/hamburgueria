import styled from "styled-components";

export const StyledHeader = styled.header`
  width: 100%;
  height: 80px;
  background-color: #f5f5f5;
  display: flex;
`
export const StyledDiv = styled.div`
  margin: 0 auto;
  max-width: 1260px;
  padding: 10px 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  @media (max-width: 500px) {
  flex-direction: column;
  justify-content: space-between;
  }
`