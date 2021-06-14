import React, { ReactElement } from 'react';

import Styles from './Hotel.module.scss';
import BlurCanvas from '../BlurCanvas';

interface Props {
    hotelName: string;
    blurhash: string;
    online: boolean;
}

export default function Hotel({hotelName, blurhash, online}: Props): ReactElement {
    return (
        <div className={Styles.Hotel}>
            <BlurCanvas blurhash={blurhash} />
            <p>{hotelName}</p>
            <p>{online ? "ONLINE" : "OFFLINE"}</p>
        </div>
    )
}