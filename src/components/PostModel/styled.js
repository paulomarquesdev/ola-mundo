import styled from 'styled-components';


export const Article = styled.article`
    color: var(--textColorPost);
    position: relative;
    
    .imgCapa, h2 {
        height: 204px;
    }
    
    .imgCapa {
        width: 100%;
        background-size: cover;
        background-repeat: no-repeat;
        opacity: 0.3;
        position: absolute;
        top: 0;
        z-index: -1;
    }
    
    h2 {
        font-family: var(--fontSecondary);
        padding: 0 7.5rem;
        font-size: 4rem;
        display: flex;
        align-items: center;
    }
    
    .content {
        padding: 2.5rem 7.5rem 4.5rem;
    }
    
    @media (max-width: 744px) {
        padding: 2rem 1.5rem 1.5rem;
    }
    
    @media (max-width: 744px) {
        .imgCapa, h2 {
            height: 104px;
        }
    
        h2 {
            padding: 0 1rem;
            font-size: 2rem;
        }
    
        .content {
            padding: 2rem 1rem 1.5rem;
        }
    }
`;