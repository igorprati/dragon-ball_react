import styled from "styled-components";
import {Box, Img, Info} from '../Read/styled'
import { Link } from "react-router-dom";

export const Card = styled(Box)`
	width: 300px;
`;

export const Image = styled(Img)`
	height: 200px;
`;

export const Infos = styled(Info)`
`;

export const Flex = styled.div`
	margin: 0 auto;
	display: flex;
	justify-content: flex-start;
	flex-wrap: wrap;
`;

export const Linked = styled(Link)`
	text-decoration: none;
	color: inherit;
	margin: 1rem;
`;

export const Name = styled.h2`
	text-align: center;
`;