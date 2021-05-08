import styled from 'styled-components';

export const StyledCarousel = styled.div`
    width: 100%;
    height: 350px;
    border: 2px solid var(--color);


    .carouselInner{
        height: 100%;
        width: 100%;
        padding: 0 0.5em;
        background-position: top;
        background-repeat: no-repeat;
        background-size: cover;
        display: flex;
        justify-content: space-between;
        align-items: center;

        .left{
            padding: 0.5em;
            border-radius: 50%;
            background-color: rgb(0,0,0, 0.6);
            display: flex;
            align-items: center;
            color: var(--color);
            cursor: pointer;
            path{
                transform: translateX(4px);
            }
        }

        

        .right{
            padding: 0.5em;
            border-radius: 50%;
            background-color: rgb(0,0,0, 0.6);
            display: flex;
            align-items: center;
            color: var(--color);

            cursor: pointer;
        }
    }
`