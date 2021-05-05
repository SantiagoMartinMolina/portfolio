import styled from 'styled-components';

export const StyledCarousel = styled.div`
    width: 100%;
    height: 300px;

    .carouselInner{
        height: 100%;
        width: 100%;

        background-position: center;
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
            color: white;
            cursor: pointer;
        }

        

        .right{
            padding: 0.5em;
            border-radius: 50%;
            background-color: rgb(0,0,0, 0.6);
            display: flex;
            align-items: center;
            color: white;
            cursor: pointer;
        }
    }
`