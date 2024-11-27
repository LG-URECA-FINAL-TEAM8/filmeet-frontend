import styled from "styled-components";
import { lightTheme } from "../themes";

export const CommentPageContainer = styled.div`
    width: 100%;
    max-width: 120rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    background-color: ${lightTheme.mainColor};
`;

export const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    max-width: 40rem;
`