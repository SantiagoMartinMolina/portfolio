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
	transition: opacity 0.4s;
	background-color: var(--color);
	color: black;
	padding: 0.3em;

	&:hover {
		background-color: var(--primary-100);
		color: var(--clr-dark);
	}

	&:focus {
		outline: 4px dotted var(--light);
		outline-offset: 0.5em;
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