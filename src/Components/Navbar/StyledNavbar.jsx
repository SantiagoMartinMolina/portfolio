import styled from 'styled-components';

export const StyledNavbar = styled.nav`
    color: white;
    .container{
        padding: 1em 0;
        max-width: 1200px;
        width: 90%;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        align-items: center;

        .fas{
            font-size: 3em;
            margin-right: 0.5em;
        }

        & > div{
            display: flex;
        }

        ul{
            display: flex;
            list-style: none;
            justify-content: center;  
            align-items: center;
            /* flex-wrap: wrap; */

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

    @media (max-width: 800px) {
        .container{

            .fas{
                font-size: 2em;
            }
            ul{       
                a{            
                    font-size: 1em;
                    i{
                        font-size: 1.3em;
                    }               
                }
            }
        }
    }

    @media (max-width: 650px) {
        .container{
            flex-direction: column-reverse;
        }
    }
    @media (max-width: 460px) {
        .fas{
            display: none;
        }
        .menu{
            font-size: 0.94em;
        }
    }

`