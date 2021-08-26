import styled from "styled-components";

export const Box = styled.div`
	max-width: 500px;
	margin: 0 auto;
	overflow: hidden;
	border-radius: 1rem;
	padding-bottom: 2rem;
	border: 1px solid gray;
	font-family: 'Poppins', sans-serif;
`;

export const Img = styled.img`
	width: 100%;
	height: 400px;
	object-fit: cover;
`;

export const Info = styled.div`
	padding: 1rem 1rem;
`;

export const BoxButton = styled.div`
	display: flex;
	justify-content: center;
	margin-top: 1rem;
`;

export const Button = styled.button`
	cursor: pointer;
	margin: 0 1rem;
	padding: 0.5rem 1rem;
	border: none;
	border-radius: 0.3rem;
	background-color: ${color => color.delete ? 'red' : 'gray'};
	color: ${color => color.delete ? 'white' : 'white'};
	transition: all 200ms;

	&:hover{
		transform: scale(1.03);
	}
`;

export const Text = styled.span`
	font-weight: lighter;
`;