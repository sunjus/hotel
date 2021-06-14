import React, { ReactElement, useState } from 'react';

import Styles from './HotelCategoryList.module.scss';
import arrowRight from '../../assets/img/Arrow-right.svg';
import arrowLeft from '../../assets/img/Arrow-left.svg';

import Hotel from '../Hotel';
import ArrowButton from '../ArrowButton';

interface HotelType {
    blurhash: string;
    hotelName: string;
    online: boolean;
}

interface Props {
    title: string;
    hotelArray: HotelType[];
}

export default function HotelCategoryList({title, hotelArray}: Props): ReactElement {

    const [current, setCurrent] = useState(0);

    const arrayLength = hotelArray.length;
    let maxElements = 3;
    
    let displayHotelArray = Array(Math.min(arrayLength, maxElements)).fill(0).map((value, index) => (current + index) % arrayLength);

    const moveCarouselForward = () => {
        setCurrent(current === arrayLength-1 ? 0 : current+1)
    };

    const moveCarouselBackward = () => {
        setCurrent(current === 0 ? arrayLength-1 : current-1)
    };

    

    return (
        <div className={Styles.HotelCategoryListContainer}>
            <div className={Styles.Header}>
                <h1>{title} </h1>

                <div className={Styles.ArrowsContainer}>
                    <h4>All ({current + 1}{'/'}{arrayLength})</h4>
                    <ArrowButton
                        onClick={moveCarouselBackward}
                        imgSrc={arrowLeft}
                        altText="Go Backwards"
                    />

                    <ArrowButton
                        onClick={moveCarouselForward}
                        imgSrc={arrowRight}
                        altText="Go Forward"
                    />
                </div>
            </div>
            
            <div className={Styles.HotelCategoryList}>
                {displayHotelArray.map((hotel, index) => {
                    let hotelInfo = hotelArray[hotel];
                    return (
                        <Hotel key={index} hotelName={hotelInfo.hotelName} blurhash={hotelInfo.blurhash} online={hotelInfo.online} />
                    )
                })}
            </div>            
        </div>
    )
}