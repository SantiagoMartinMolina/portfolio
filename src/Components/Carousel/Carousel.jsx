import React, { useState } from 'react'
import { StyledCarousel } from './StyledCarousel';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

function Carousel({ images }) {
    const [currImg, setCurrImg] = useState(0);
    return (
        <StyledCarousel>
            <div className='carouselInner' style={{ backgroundImage: `url(${images[currImg]})` }}>

                <div className='left' onClick={() => {
                    currImg > 0 && setCurrImg(currImg - 1)
                }}>
                    <ArrowBackIosIcon />
                </div>

                <div className='right' onClick={() => {
                    currImg < images.length - 1 && setCurrImg(currImg + 1)
                }}>
                    <ArrowForwardIosIcon />
                </div>
            </div>
        </StyledCarousel>
    )
}

export default Carousel
