import React, { useState } from 'react';
import { StyledArrowTop } from './StyledArrowTop';

const ArrowTop = () => {
    const [showScroll, setShowScroll] = useState(false);

    const checkScrollTop = () => {
        if (!showScroll && window.pageYOffset > 400) {
            setShowScroll(true);
        } else if (showScroll && window.pageYOffset <= 400) {
            setShowScroll(false);
        }
    };

    const scrollTop = () => {
        window.scrollTo({ top: 0, right: 0, behavior: 'smooth' });
        const nav = document.querySelector('nav');
        nav.focus();
    };

    window.addEventListener('scroll', checkScrollTop);

    return (
        <StyledArrowTop
            onClick={scrollTop}
            tabIndex='0'
            style={{ display: showScroll ? 'flex' : 'none' }}
        >
            <svg
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
            >
                <path d='M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z' />
            </svg>
        </StyledArrowTop>
    );
};

export default ArrowTop;