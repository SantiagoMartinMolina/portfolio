import styled from 'styled-components';

export const StyledContactForm = styled.section`
    background-color: var(--color);
    padding-top: 10em;
    z-index: 1;
    position: relative;
    text-align: center;
    
    .container{
        max-width: 1200px;
        margin: 0 auto;
        width: 90%;
    }
    h1{
        font-size: 3em;
        margin-bottom: 0.4em;
    }
    form{
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: 2em;

        input, textarea{
            font: inherit;
            margin: 0.5em 0;
            max-width: 30em;
            width: 100%;
            border: 2px solid transparent;
            outline: none;
            padding: 0.5em;
            /* border-radius: 0.5em; */
            background-color: var(--color2);
            color: var(--color);
            transition: transform 200ms ease;
        }
        input:focus, textarea:focus{
            border: 2px solid var(--color);
            box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.616);
            transform: scale(1.03);
        }

        .btn{
            min-width: 10em;
            margin: 0.5em;
            padding: 0.5em 1.3em;
            background-color: var(--color2);
            font-size: 1em; 
            font-family: inherit;
            cursor: pointer;
            font-weight: bold;
            transition: background-color 200ms ease, color 200ms ease; 
            color: var(--color);
            /* border-radius: 0.5em; */
            border: 2px solid var(--color2);

            &:hover, &:focus{
                border: 2px solid var(--color2);
                background-color: var(--color);
                color: var(--color2);
                outline: none;
            }
            i{
                margin-right: 1em;
            }
        }
        .btn[disabled]{
            opacity: 0.7;
            cursor: default;
            transform: none !important;
        }

        .success{
            font-size: 1.1em;
            i{
                margin-right: 0.5em;
                color: green;
            }
        }

    }
    .social-media{
        background-color: var(--color3);
        color: white;
        padding: 1em 0;
        a{
            padding: 0.5em;
            text-decoration: none;
            display: inline-block;
            font-size: 1.2em;
            color: inherit;
            /* font-weight: bold; */
            i{
                font-size: 1.4em;
                /* font-weight: unset; */
            }   
            &:hover{
                color: var(--color);
            }            
        }
        p{
            /* margin-left: 2em; */
            margin: 0 auto;
            /* color: var(--color); */
        }
    }

    @media (max-width: 620px){
        h1{
            font-size: 2em;
        }
        .social-media{
            p{
                font-size: 0.9em;
            }
        }
    }
`