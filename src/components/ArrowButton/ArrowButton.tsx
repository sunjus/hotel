import React, { ReactElement } from 'react';

import Styles from './ArrowButton.module.scss';

interface Props {
    imgSrc: string;
    altText: string;
    onClick: () => void;
}

export default function ArrowButton({
    onClick,
    imgSrc,
    altText
  }: Props): ReactElement {
    return (
        <button onClick={onClick} className={Styles.ArrowButton}>
            <img src={imgSrc} alt={altText} />
        </button>
    )
}