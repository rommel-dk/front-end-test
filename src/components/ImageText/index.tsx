import React, { DetailedHTMLProps, ImgHTMLAttributes } from 'react';

import {ReactComponent as Bar} from '../../svgs/imageTextBar.svg';
import {ReactComponent as Arrow} from '../../svgs/footerArrow.svg';


import styles from './ImageText.module.scss';

interface IImageText{
    children: string;
}

export default function ImageText({children, ...props}: IImageText&DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>){
    return (
        <section className={styles['image-text']}>
            <img className={styles.image} alt="" {...props} />
            <div className={styles.content}>
                <div className={styles['text-container']}>
                    <p className={styles.text}>
                        {children}
                    </p>
                    <Bar className={styles.bar} />
                </div>
                <Arrow className={styles.arrow} />
            </div>
        </section>
    );
}
