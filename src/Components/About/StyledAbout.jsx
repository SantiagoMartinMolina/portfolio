import styled from 'styled-components';

export const StyledAbout = styled.section`
    margin: 3em 0;
    .subtitle{
        font-size: 1.6em;
        font-family: 'Poppins';
        text-transform: uppercase;
        margin: 1em 0;
    }

    .btn{
        display: inline-block;
        text-decoration: none;
        color: black;
        margin: 1em 0;
        padding: 0.7em 1.5em;
        border: 0;
        background-color: var(--color);
        font-size: 1em; 
        font-family: inherit;
        cursor: pointer;
        font-weight: bold;
        transition: background-color 200ms ease, color 200ms ease; 
        border: 2px solid var(--color);
        &:hover{
            background-color: #111;
            color: #f6cb86;
        }
    }
    p{
        color: white;
        margin: auto;
    }
    h1{
        font-size: 5em;
        color: var(--color);
        position: relative;
        z-index: 1;
        display: inline-block;
        line-height: 1.1;

        &::after {
            content: attr(dataText);
            position: absolute;
            top: .06em;
            left: -.06em;
            z-index: -1;
            
            background-image: radial-gradient(circle,
                white 0%,
                rgb(255, 187, 0) 20%,
                transparent 70%);
            background-size: 4px 4px;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            color: white;
        }

    }

@media (max-width: 620px){
    margin-top: 0;
    h1{
        font-size: 3.5em;
        &::after {
            background-size: 3px 3px;
        }
    }
}
@media (max-width: 460px){
    .subtitle{
        font-size: 1em;
    }
    .text{
        text-align: left;
        font-size: 0.85em;
    }
    h1{
        font-size: 2.5em;
    }

    .btn{
        display: block;
    }
}
`