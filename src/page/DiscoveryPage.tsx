import React, { ReactElement } from 'react';

import data from '../data/discovery_page.json';

import HotelCategoryList from '../components/HotelCategoryList';

export default function DiscoveryPage(): ReactElement {
    return (
        <div>
        {data.sections.map((hotelInfo,index) => {
            const { title, hotels } = hotelInfo;
            return (
            <HotelCategoryList key={index} title={title} hotelArray={hotels}/>
            )
        })}
        </div>
    )
}