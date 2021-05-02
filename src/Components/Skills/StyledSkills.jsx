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

        .card{
            position: relative;
            width: 170px;
            height: 270px;
            background: black;
            display: flex;
            justify-content: center;
            align-items: center;
            margin: 27px;
            box-shadow: 0 0 50px #6f705c;
            border: 1px solid transparent;
            transition: 500ms;
            overflow: hidden;
            .content{
                /* padding: 30px; */
                background-color: inherit;
                .svg{
                    fill: var(--color);
                    width: 7em;

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
                border: 1px solid var(--color);

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
                background: linear-gradient(to right, transparent, #1778ff);
                animation: animate1 1s linear infinite;

            } */
            /* span:nth-child(2){
                position: absolute;
                top: 0;
                right: 0;
                width: 3px;
                height: 100%;
                background: linear-gradient(to bottom, transparent, #1778ff);
                animation: animate2 2s linear infinite;
                animation-delay: 1s;
            } */
            /* span:nth-child(3){
                position: absolute;
                bottom: 0;
                left: 0;
                width: 100%;
                height: 3px;
                background: linear-gradient(to left, transparent, #1778ff);
                animation: animate3 1s linear infinite;

            } */
            /* span:nth-child(4){
                position: absolute;
                top: 0;
                left: 0;
                width: 3px;
                height: 100%;
                background: linear-gradient(to top, transparent, #1778ff);
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