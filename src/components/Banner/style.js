import styled from "styled-components";

export const Container = styled.div`
    padding: 3rem 7.5rem 6.25rem;
    background-color: var(--blueDark);
    color: var(--white);
    display: grid;
    grid-template-columns: 1fr 1fr;

    h1 {
        font-family: var(--fontSecondary);
        font-size: 4rem;
        margin-top: 4.875rem;
        margin-bottom: 2rem;
    }

    p {
        font-family: var(--fontSecondary);
        font-size: 1.5rem;
        line-height: 2rem;
        margin-bottom: 2rem;
    }

    .images {
        position: relative;
        height: 406px;
        
        .profileImg {
            position: absolute;
            right: 0;
            bottom: 0;
            width: 18vw;
            border-radius: 50%;
        }
    
        .circleColor {
            position: absolute;
            right: 7vw;
            bottom: 2.2vw;
            width: 25vw;
        }
    }


@media (max-width: 1100px) {  
    padding: 3.5rem 1.5rem;

    h1 {
        margin-top: 0;
        margin-bottom: 1.5rem;
    }

    p {
        margin-bottom: 1.5rem;
    }

    .images {
        height: 338px;
        
        .profileImg {
            width: 25vw;
        }
    
        .circleColor {
            right: 10vw;
            width: 35vw;
        }
    }

}

@media (max-width: 744px) {
    padding: 2rem 1rem;
    display: block;

    h1 {
        margin-bottom: 2rem;
    }

    p {
        margin-bottom: 2rem;
    }

    .images {
        height: 307px;
        
        .profileImg, .circleColor {
            left: 0;
            right: 0;
            margin: 0 auto;
        }
        
        .profileImg {
            width: 170px;
            transform: translate(5rem, 0px);
        }
    
        .circleColor {
            width: 240px;
            transform: translate(-1.5rem, 0px);
        }
    }


}
`;