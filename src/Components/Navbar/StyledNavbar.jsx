import styled from 'styled-components';

export const StyledNavbar = styled.nav`
    /* position: fixed; */
    /* width: 100%; */
    /* top: 0; */
    /* background-color: rgba(226, 219, 118, 0.8); */
    /* z-index: 10; */
    color: white;
    .container{
        padding: 1em 0;
        max-width: 1200px;
        margin: 0 auto;
        display: flex;
        align-items: center;
        .fas{
            font-size: 3em;
            margin-right: 0.5em;
        }
        ul{
            display: flex;
            list-style: none;
            justify-content: center;  
            align-items: center;
            flex-grow: 1;      


            a{
                padding: 0.5em;
                color: white;
                text-decoration: none;
                display: inline-block;
                font-size: 1.2em;
                i{
                    font-size: 1.4em;
                }               
            }
            .btn-hover{
                padding: 0.3em;
                margin: 0.4em;
                box-shadow: inset 0 0 0 0 var(--color);
                transition: ease-out 300ms;
            }
            .btn-hover:hover{
                box-shadow: inset 140px 0 0 0 var(--color);
                color: black;
            }


            .contact{
                    margin-right: auto;
                }
        }
    }
`