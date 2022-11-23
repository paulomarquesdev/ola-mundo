import styled from 'styled-components';

export const Container = styled.main`
    position: relative;
    text-align: center;
    background-color: var(--blueDark);
    color: var(--white);
    padding: 0 1.5rem 6.5rem;

    span {
        display: block;
        color: var(--blue);
        font-family: var(--fontSecondary);
        font-size: 6rem;
        font-weight: 700;
        margin-bottom: 2rem;
    }

    h1 {
        font-family: var(--fonte-secundaria);
        font-size: 3rem;
        margin-bottom: 2rem;
    }

    p {
        font-size: 1.5rem;
        line-height: 1.75rem;
    }

    div {
        text-align: start;
        margin-top: 3.5rem;
        margin-left: 30vw;
    }

    img {
        position: absolute;
        height: 25vw;
        bottom: calc(-25vw * 0.5);
    }

    @media (max-width: 1100px) {    
        span {
            margin-bottom: 2.25rem;
        }

        div {
            margin-top: 2.75rem;
            margin-left: 15vw;
        }

        img {
            height: 50vw;
            bottom: calc(-50vw * 0.65);
            left: 40vw;
        }
    }

    @media (max-width: 744px) {
        padding: 3rem 1rem 17rem;

        span {
            font-size: 4rem;
        }

        h1 {
            font-size: 2.25rem;
            line-height: 3rem;
        }

        p {
            font-size: 1.125rem;
            line-height: 1.3125rem;
        }

        div {
            margin: 2.5rem 0 0;
            text-align: center;
        }

        img {
            position: absolute;
            margin: 0 auto;
            left: 0;
            right: 0;
            height: 94vw;
            bottom: calc(-94vw * 0.3);
            max-height: 375px;
        }
    }
`;

export const ContainerVoid = styled.div`
    height: 40vh;

    @media (max-width: 1100px) {
        height: 53vw;
    }

    @media (max-width: 744px) {
        height: calc(94vw * 0.5);
    }
`;