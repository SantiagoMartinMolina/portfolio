import styled from 'styled-components';

export const StyledNavbar = styled.nav`
    border-bottom: 1px solid rgba(0, 0, 0, 0.459);
    .container{
        padding: 1em;
        ul{
            display: flex;
            list-style: none;
            justify-content: center;
            
            a{
                padding: 0.5em;
                color: white;
                text-decoration: none;
                display: inline-block;
                &:hover{
                    background-color: tomato;
                }
            }

        }
    }
`