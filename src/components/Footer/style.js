import styled from "styled-components";

export const Container = styled.footer`
    background-color: var(--blueDark);
    color: var(--white);
    padding: 2rem 0;
    display: flex;
    justify-content: center;
    align-items: center;
    column-gap: .5rem;

    a:hover {
        text-decoration: underline;
    }
`;