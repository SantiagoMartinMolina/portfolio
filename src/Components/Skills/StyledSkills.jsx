import styled from 'styled-components';

export const StyledSkills = styled.section`
    /* background-color: var(--color2); */
    padding: 3em;
    color: white;
    border-top: 1px solid var(--color);
    border-bottom: 1px solid var(--color);


    h1{
        font-size: 3em;
        margin-bottom: 1em;
    }

    .icons-container{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;

        .card{
            padding: 1em;
            margin: 0.67em;
            position: relative;
            width: 220px;
            height: 270px;
            background: black;
            display: flex;
            justify-content: center;
            align-items: center;
            /* border: 1px solid transparent; */
            border: 2px solid var(--color2);

            transition: 500ms;
            overflow: hidden;

            .content{
                /* padding: 30px; */
                background-color: inherit;
                .svg{
                    fill: var(--color);
                    width: 6.5em;

                    /* position: absolute; */
                    /* top: 15%; */
                    /* right: 26%; */
                    transform: translateY(-15px);
                    opacity: 0.5;
                    transition: 500ms;

                }

                h3{
                    opacity: 0.5;
                    transform: translateY(20px);
                    transition: 500ms;
                    
                }
                
            }

            &:hover{
                border: 2px solid var(--color);
                box-shadow: 0 0 20px #6f705c;

                .content{
                    .svg{
                        opacity: 1;
                        transform: translateY(1px);
                    }
                    h3{
                        opacity: 1;
                        transform: translateY(-1px);

                    }
                }

                span{
                    opacity: 1;
                }
            }

            span{
                transition: 0.5s;
                opacity: 0;
            }
            /* span:nth-child(1){
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 3px;
                background: linear-gradient(to right, transparent, var(--color));
                animation: animate1 2s linear infinite;

            }
            span:nth-child(2){
                position: absolute;
                top: 0;
                right: 0;
                width: 3px;
                height: 100%;
                background: linear-gradient(to bottom, transparent, var(--color));
                animation: animate2 2s linear infinite;
                animation-delay: 1s;
            }
            span:nth-child(3){
                position: absolute;
                bottom: 0;
                left: 0;
                width: 100%;
                height: 3px;
                background: linear-gradient(to left, transparent, var(--color));
                animation: animate3 2s linear infinite;

            }
            span:nth-child(4){
                position: absolute;
                top: 0;
                left: 0;
                width: 3px;
                height: 100%;
                background: linear-gradient(to top, transparent, var(--color));
                animation: animate4 2s linear infinite;
                animation-delay: 1s;
            } */
        }



        .card::before{
            content: '';
            position: absolute;
            top: 2px;
            left: 2px;
            bottom: 2px;
            width: 50%;
            background: rgba(255,255,255,0.1);
            pointer-events: none;
        }

        
    }

    @keyframes animate1{

        0%{
            transform: translateX(-100%);
        }
        100%{
            transform: translateX(100%);
        }
    }

    @keyframes animate2{

        0%{
            transform: translateY(-100%);
        }
        100%{
            transform: translateY(100%);
        }
    }

    @keyframes animate3{

        0%{
            transform: translateX(100%);
        }
        100%{
            transform: translateX(-100%);
        }
    }

    @keyframes animate4{

        0%{
            transform: translateY(100%);
        }
        100%{
            transform: translateY(-100%);
        }
    }
`