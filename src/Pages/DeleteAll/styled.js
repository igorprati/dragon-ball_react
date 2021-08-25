import styled from "styled-components";

export const Title = styled.h2`
    text-align: center;
`;

export const SubTitle = styled.p`
    text-align: center;
`;

export const ButtonArea = styled.div`
    display: flex;
    justify-content: center;
`;

export const Button = styled.button`
    outline: none;
    border: none;
    background-color: ${props => props.deletar ? 'red' : 'gray'};
    margin: 1rem 1rem;
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
    color: white;
    cursor: pointer;
    transition: all 200ms;

    &:hover{
        transform: scale(1.05);
    }
`;