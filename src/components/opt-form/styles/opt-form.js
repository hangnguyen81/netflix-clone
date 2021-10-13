import styled from "styled-components"

export const Container = styled.section`
    margin: 2rem auto 0 auto;
    max-width: 1000px;
    width: 100%;
    heigh: 100%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin-bottom: 2rem;
    @media (max-width: 1000px) {
        flex-direction: column;
        align-items: center;
    }
`

export const Text = styled.p`
    font-size: 1.125rem;
    color: white;
    text-align: center;
`
export const Wrap = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    @media (max-width: 1000px){
        flex-wrap: wrap;
    }
`

export const Input = styled.input`
    max-width: 450px;
    width: 100%;
    font-size: 1rem;
    padding: 1rem 0.5rem;
    outline: none;
    height: 4.375rem;
    box-sizing: border-box;
    @media (max-width: 1000px){
        height: 3.375rem;
        font-size: .925rem;
        padding: .8rem 0.5rem;
        margin-bottom: 0.9rem;
    }
`

export const Button = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #e50914;
    outline: none;
    color: white;
    font-weight: normal;
    letter-spacing: 1px;
    border: 0;
    font-size: 1.5rem;
    padding: 0.5rem 1rem;
    height: 4.375rem;
    cursor: pointer;
    img {
        margin-left: 1rem;
        filter: brightness(0) invert(1);
        cursor: pointer;
        width: 24px;
    }
    &:hover {
        background: #f40612;
    }
    @media (max-width: 1000px){
        font-size: 1rem;
        height: 3.375rem;
        padding: .8rem 0.5rem;
        img {
            margin-left: .5rem;
            width: 16px;
        }
   
`