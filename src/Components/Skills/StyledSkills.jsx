import styled from 'styled-components';

export const StyledSkills = styled.section`
    /* background-color: var(--color2); */
    /* padding: 2em; */
    color: white;

    .icons-container{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;

        div{
            margin: 20px;
        }

        .svg{
            fill: var(--color);
            width: 3.5em;
        }
    }
`