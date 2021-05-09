import styled from 'styled-components';

export const StyledArrowTop = styled.button`
	border: 0;
	border-radius: 0;
	width: 2.5rem;
	height: 2.5rem;
	position: fixed;
	bottom: 2em;
	right: 2em;
	align-items: center;
	justify-content: center;
	z-index: 50;
	animation: fadeIn 0.3s;
	transition: all 0.3s;
	background-color: var(--color);
	color: black;
	padding: 0.3em;
	border: 2px solid var(--color);

	&:hover {
		background-color: black;
		color: var(--color);
	}

	svg {
		fill: currentColor;
		width: 100%;
		height: 100%;
	}

	@keyframes fadeIn {
		0% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}
`;