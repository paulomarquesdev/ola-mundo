import styled from "styled-components";

export const Container = styled.div`
    img {
        margin-bottom: .5rem;
        margin-left: 1.5rem;
        width: 40vw;
        float: right;
    }

    h3 {
        margin-bottom: 2rem;
        font-size: 2.5rem;
    }

    p {
        text-align: justify;
        font-size: 1.5rem;
        line-height: 2.25rem;
        margin-bottom: 1.5rem;
    }

    @media (max-width: 1100px) {
        img {
            float: none;
            display: block;
            margin: 0 auto 2rem;
            width: 70vw;
        }

        p {
            margin-bottom: 2rem;
        }
    }

    @media (max-width: 744px) {
        img {
            width: 100%;
        }

        h3 {
            font-size: 1.5rem;
            line-height: 2rem;
            margin-bottom: 1.5rem;
        }

        p {
            font-size: 1rem;
            line-height: 1.75rem;
        }
    }
`;