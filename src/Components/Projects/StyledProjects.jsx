import styled from 'styled-components';

export const StyledProjects = styled.section`
    /* background-color: var(--color2); */
    /* padding: 2em; */

    h1{
        color: white;
    }
    .container{
        display: flex;
        /* justify-content: space-between; */
        align-items: center;
        margin: 3em 0;

        .images{
            margin-left: 1.5em;
        }

    }


    .images, .description{
        flex: 1;
    }

    .btn{
        margin: 0.8em;
        padding: 0.4em 1em;
        border: 0;
        background-color: var(--color);
        font-size: 0.8em; 
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
`