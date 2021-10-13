import styled from "styled-components";

export const Container = styled.section`
    display: flex;
    border-bottom: 8px solid #222;
`;

export const Inner = styled.div`
    display: flex;
    padding: 4.375rem 7.5rem;
    flex-direction: column;
    max-width: 1200px;
    width: 100%;
    margin: auto;

    @media (max-width: 600px) {
        padding: 1rem 1rem;
    }
`;

export const Title = styled.h1`
    font-size: 3.125rem;
    line-height: 1.1;
    margin-top: 0;
    margin-bottom: 0.6em;
    color: white;
    text-align: center;


    @media (max-width: 600px) {
        margin-top: 1.5rem;
        margin-bottom: 0;
        font-size: 2.125rem;
    }
`;

export const Item = styled.div`
    color: white;
    margin-bottom: 0.6em;
    max-width: 1200px;
    width: 100%;

    &:first-of-type {
        margin-top: 3em;
    }
`;


export const Header = styled.div`
    max-width: 1200px;
    display: flex;
    justify-content: space-between;
    cursor: pointer;
    margin-bottom: 1px;
    font-size: 2rem;
    font-weight: normal;
    background: #303030;
    padding: 0.8em 1.2em 0.8em 1.2em;
    user-select: none;
    align-items: center;
    width: 100%;

    @media (max-width: 600px) {
        font-size: 1rem;
    }

    img {
        filter: brightness(0) invert(1);
        width: 24px;
        
        @media (max-width: 600px) {
            width: 16px;
        }
    }
`;

export const Body = styled.p`
    max-width: 1200px;
    transition: max-height 0.25s cubic-bezier(0.5, 0, 0.1, 1);
    font-size: 1.25rem;
    font-weight: normal;
    line-height: 1.5;
    background: #303030;
    padding: 0.8em 1.2em 0.8em 1.2em;
    user-select: none;
    align-items: center;
    margin-top: 0;
    width: 100%;

    @media (max-width: 600px) {
        font-size: 1rem;
        line-height: 1.5;
    }
`;