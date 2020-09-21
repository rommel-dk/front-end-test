import React, { DetailedHTMLProps, ImgHTMLAttributes } from 'react';

import {ReactComponent as ArrowRight} from '../../svgs/arrowRight.svg';
import {ReactComponent as ArrowLeftDown} from '../../svgs/arrowLeftDown.svg';
import {ReactComponent as BannerBar} from '../../svgs/bannerBar.svg';

import styles from './Banner.module.scss';

interface IBannerProps{
    image?: DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>;
    title?: string;
    subtitle?: string;
    author?: string;
    year?: string,
    description?: string;
}

export default function Banner({image, title, subtitle, author, year, description}: IBannerProps){
    return (
        <section className={styles.banner}>
            <div className={styles.container}>
                <div className={styles['big-info']}>
                    {subtitle && <h2 className={styles.subtitle}>{subtitle}</h2>}
                    {(author || title) && <h2 className={styles.title}>{author && author}<br/>{title}</h2>}
                    <BannerBar className={styles['title-bar']} />
                </div>
                {image && 
                    <div className={styles['image-container']}>
                        <img className={styles.image} alt="" {...image} />
                        <span className={styles.bar}></span>
                    </div>
                }
                <div className={styles.info}>
                    {(author || year) && <p className={styles.meta}>{author + ','} {year}</p>}
                    {description && <p className={styles.summary}>{description}</p>}
                    <ArrowRight className={styles.arrow} />
                </div>
            </div>
            <div className={styles['arrow-down-container']}>
                <ArrowLeftDown className={styles['arrow-down']} />
            </div>
        </section>
    );
}
