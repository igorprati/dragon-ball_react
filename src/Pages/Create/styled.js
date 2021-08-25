import styled from "styled-components";

export const Form = styled.form`
    max-width: 500px;
    margin: 0 auto;
    /* border: 1px solid black; */
`;

export const Input = styled.input`
    width: 100%;
    font-size: 1rem;
    outline: none;
    padding: 0.2rem 0.5rem;
    margin: 0.5rem 0;
    border: none;
    border-bottom: 1px solid grey;
    &:focus{
        border-bottom: 1px solid #e76a24;
    }
`;

export const Select = styled.select`
    font-size: 1rem;
    width: 100%;
    outline: none;
    padding: 0.2rem 0.5rem;
    margin: 0.5rem 0;
    border: none;
    border-bottom: 1px solid grey;
`;

export const FormTitle = styled.h2`
    text-align: center;
    margin-bottom: 1rem;
`;

export const Option = styled.option`
    
`;

export const Button = styled.button`
    font-size: 1rem;
    padding: 0.3rem 0;
    margin-top: 1rem;
    width: 100%;
    background-color: #fbbc42;
    border: none;
    border-radius: 0.3rem;
    cursor: pointer;
`;