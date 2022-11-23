import styled from "styled-components";

export const Container = styled.button`
    display: inline-block;
    border-radius: 24px;
    padding: 0.75rem 1.5rem;
    font-size: 1.125rem;
    line-height: 1.125rem;
    background-color: var(--blue);
    color: var(--white);
    border: 3px solid var(--blue);
    cursor: pointer;
    transition: 0.2s;

    &.lg {
        padding: 1.5rem 3.6875rem;
        font-size: 1.5rem;
        line-height: 1.125rem;
    }
    
    &:hover {
        border: 3px solid var(--blueDark);
    }

    @media (max-width: 1100px) {
        padding: 0.6875rem 1.5rem;
        font-size: 1.375rem;
    }
`;