import React, { ReactElement } from 'react';

import Styles from './Hotel.module.scss';

import { BlurhashCanvas } from "react-blurhash";

interface Props {
    hotelName: string;
    blurhash: string;
    online: boolean;
}

export default function Hotel({hotelName, blurhash, online}: Props): ReactElement {
    return (
        <div className={Styles.Hotel}>
            <BlurhashCanvas hash={blurhash} width={365} height={190} punch={1}/>
            <p>{hotelName}</p>
            <p>{online ? "ONLINE" : "OFFLINE"}</p>
        </div>
    )
}