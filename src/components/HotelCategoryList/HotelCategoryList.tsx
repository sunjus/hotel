import React, { ReactElement } from 'react';

import Styles from './HotelCategoryList.module.scss';

import Hotel from '../Hotel';

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
    return (
        <div className={Styles.HotelCategoryListContainer}>
            <h1 className={Styles.Header}>{title}</h1>
            <div className={Styles.HotelCategoryList}>
                {hotelArray.map((hotel,index) => {
                    const { hotelName, blurhash, online } = hotel;
                    return (
                        <Hotel  key={index} hotelName={hotelName} blurhash={blurhash} online={online} />
                    )
                })}
            </div>            
        </div>
    )
}