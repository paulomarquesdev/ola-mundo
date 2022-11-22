import styled from "styled-components";

export const Container = styled.header`
    nav {
        height: 6rem;
        display: flex;
        align-items: center;
        text-align: center;
        justify-content: center;
        gap: 2.9375rem;
    }

@media (max-width: 744px) {
    nav {
        height: 72px;
    }
}
`;
