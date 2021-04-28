import styled from 'styled-components';

export const StyledAbout = styled.section`
    background-color: red;
    padding: 2em;
    background: rgb(49,49,49);
    background: linear-gradient(0deg, rgba(49,49,49,1) 0%, rgba(49,49,49,1) 10%, rgba(49,49,49,0) 100%);

    .subtitle{
        font-size: 1.6em;
        font-family: 'Poppins';
        text-transform: uppercase;
    }

    .btn{
        margin: 1em;
    }
    p{
        color: white;
    }
    h1{
        font-size: 4em;
        /* color: rgb(99, 204, 152); */
        color: rgb(226, 219, 118);
        text-shadow: 0px 0px 20px rgba(0, 0, 0, 0.486);
    }
`