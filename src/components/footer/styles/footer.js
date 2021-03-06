import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    max-width: 1000px;
    flex-direction: column;
    padding: 70px 56px;
    margin: 0 auto;
    @media (max-width: 1000px) {
        padding: 70px 30px;
    }
`;

export const Column = styled.div`
    display: flex;
    flex-direction: column;
    text-align: left;
`;

export const Row = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 15px;
`;

export const Link = styled.a`
    color: #757575;
    margin-bottom: 20px;
    font-size: 13px;
    text-decoration: none;
`;

export const Title = styled.p`
    font-size: 16px;
    color: #757575;
    margin-bottom: 40px;
`;

export const Text = styled.p`
    font-size: 13px;
    color: #757575;
    margin-bottom: 40px;
`;

export const Break = styled.div`
    flex-basis: 100%;
    height: 0;
`;