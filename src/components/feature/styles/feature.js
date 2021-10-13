import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    color: white;
    justify-content: center;
    align-items: center;
    padding: 7rem 3rem;
    border-bottom: 8px solid #222;
`

export const Title = styled.h1`
    max-width: 800px;
    font-size: 4rem;
    text-align: center;
    margin-bottom: 1rem;

    @media (max-width: 600px){
        font-size: 2rem;
    }
`

export const SubTitle = styled.p`
    font-size: 1.5rem;
    margin-top: 0;
    @media (max-width: 600px){
        font-size: 1rem;
    }
`