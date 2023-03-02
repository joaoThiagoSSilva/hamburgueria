import styled from "styled-components";

export const Main = styled.main`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    width: 100%;
    max-width: 1260px;
    margin: 0 auto;

    @media (max-width: 900px) {
        flex-direction: column;
        align-items: center;
    }
`