import styled from "styled-components";
import { Link } from "react-router-dom";

export const Navbar = styled.div`
    width: 100vw;
    background-color: #e76a24;
    display: flex;
    justify-content: space-between;
    padding: 0 2rem;
    margin-bottom:1rem;

    @media screen and (max-width: 600px){
        flex-direction: column;
        align-items: center;
        padding: 1rem 2rem;
    }
`;

export const Img = styled.img`
    width: 10rem;
    padding: 0.5rem 0;
`;

export const List = styled.ul`
    display: flex;
    align-items: center;

    @media screen and (max-width: 600px){
        margin-top: 1rem;
        flex-direction: column;
    }
`;

export const ListItem = styled.li`
    list-style: none;
    margin: 0.5rem 1rem;
`;

export const LinkedPage = styled(Link)`
    text-decoration: none;
    color: white;
    padding: 0.5rem 1rem;
    transition: all 200ms;
    border-radius: 0.5rem;

    &:hover{
        background-color: #b15019;
    }
`;