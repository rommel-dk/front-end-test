import React, { DetailedHTMLProps, ImgHTMLAttributes } from 'react';

import styles from './ImageWide.module.scss'

export default function ImageWide(props: DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>){
    return (
        <section className={styles['image-wide']}>
            <img className={styles.image} {...props} />
        </section>
    );
}