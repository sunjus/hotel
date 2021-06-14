import React, { ReactElement } from 'react';

import Styles from './Hotel.module.scss';
import BlurCanvas from '../BlurCanvas';

interface Props {
    hotelName: string;
    blurhash?: string;
    online: boolean;
}

export default function Hotel({hotelName, blurhash, online}: Props): ReactElement {
    if (blurhash) {
        return (
          <div className={Styles.Hotel} style={{ opacity: online ? "1" : "0.5" }}>
            <BlurCanvas blurhash={blurhash} />
            <h3>{hotelName} </h3>
            <p>
              {online ? "Online" : "Offline"}
            </p>
          </div>
        );
      }
    return (
        <div className={Styles.Hotel} style={{ opacity: online ? "1" : "0.5" }} data-testid="hotel">
            <p>{hotelName}</p>
            <p>
                {online ? "Online" : "Offline"}
            </p>
        </div>
    )
}