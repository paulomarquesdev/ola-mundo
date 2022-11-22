import styled from "styled-components";

export const Container = styled.div`
    .link {
        text-decoration: none;
        font-size: 1.25rem;
        line-height: 1.4375rem;

        color: var(--textColorMain);

        &:hover {
            color: var(--blue);
        }
    }

    .link__active {
        text-decoration: underline;
    }

@media (max-width: 744px) {
    .link {
        &:hover {
            color: inherit;
        }

        &:active{
            color: var(--blue);
        }
    }
}
`;