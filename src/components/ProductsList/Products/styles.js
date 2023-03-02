import styled from "styled-components";

export const StyledLi = styled.li`
     height: 350px;
     width: 270px;
     display: flex;
     flex-direction: column;
     justify-content: space-between;
     border: 2px solid #E0E0E0;
     border-radius: 6px;
     box-sizing: border-box;

    figure {
     background-color: #f5f5f5;
     width: 100%;
     max-width: 300px;
     height: 150px;
     overflow: hidden;
     display: flex;
     align-items: center;
     justify-content: center;
     object-fit: contain;
    }
    img {
     align-self: flex-end;
    }
    :last-child img  {
     margin-bottom: 25px;
    }
    div {
     height: 55%;
     padding: 20px 13px;
     display: flex;
     flex-direction: column;
     justify-content: space-between;
     align-items: flex-start;
    }
    h3 {
     color: #333333;
     font-weight: 700;
     font-size: 18px;
    }
    span {
     color: #828282;
     font-size: 12px;
    }
    p {
     color: #27AE60;
     font-size: 14px;
     font-weight: 600;
    }
    button {
      padding: 10px 25px;
    }
    @media (max-width: 900px){
      min-width: 270px;
    }
`