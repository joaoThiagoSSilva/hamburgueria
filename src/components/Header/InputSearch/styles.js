import styled from "styled-components";

export const StyledInputDiv = styled.div`
  background-color: white;
  height: 45px;
  border-radius: 6px;
  border: 2px solid #e0e0e0;
  width: 100%;
  max-width: 320px;
  display: flex;
  justify-content: space-between;

  input {
  height: 90%;
  width: 70%;
  align-self: center;
  outline: none;
  border: 1px solid transparent;
  padding-left: 10px;
  margin-left: 3px;
  }
  input::placeholder{
    color: #e0e0e0;
  font-size: 14px;
  }
  button{
    margin: 5px;
  }

`