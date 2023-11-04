import React from 'react';

const MainCarousel = () => {

    const imgStyle = `w-28 h-10 sm:w-40 sm:h-12 md:w-52 md:h-16 lg:hover:scale-105 transistion-all duration-500 rounded-2xl sm:shadow-lg lg:shadow-xl`;

    const MobileCarousel = () => {
        return (
            <div className='px-4 lg:w-4/5 lg:mx-auto'>
                <div className='flex overflow-x-auto gap-8 pt-10 px-2 sm:pt-16 pb-4'>
                    <img
                        src="https://www.bigbasket.com/media/uploads/banner_images/hp_topstrip_m_250923_01.png?tr=w-1920,q=80"
                        className={imgStyle}
                    />
                    <img
                        src="https://www.bigbasket.com/media/uploads/banner_images/hp_topstrip_m_250923_03.png?tr=w-1920,q=80"
                        className={imgStyle}
                    />
                    <img
                        src="https://www.bigbasket.com/media/uploads/banner_images/hp_topstrip_m_250923_04.png?tr=w-1920,q=80"
                        className={imgStyle}
                    />
                    <img
                        src="https://www.bigbasket.com/media/uploads/banner_images/hp_topstrip_m_250923_05.png?tr=w-1920,q=80"
                        className={imgStyle}
                    />
                    <img
                        src="https://www.bigbasket.com/media/uploads/banner_images/hp_topstrip_m_250923_06.png?tr=w-1920,q=80"
                        className={imgStyle}
                    />
                </div>
            </div>
        )
    }

    const LapCarousel = () => {
        return (
            <div>
            </div>
        )
    }

    return (
        <div>
            <MobileCarousel />
            <LapCarousel />
        </div>
    )
}

export default MainCarousel;