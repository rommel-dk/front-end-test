import React from 'react';

import {ReactComponent as ArrowRight} from '../../svgs/arrowRight.svg';
import {ReactComponent as ArrowLeftDown} from '../../svgs/arrowLeftDown.svg';
import {ReactComponent as BannerBar} from '../../svgs/bannerBar.svg';

import styles from './Banner.module.scss';

interface IBannerProps{
    imgSrc: string;
    imgAlt: string;
    title: string;
    subtitle: string;
    author: string;
    year: string,
    description: string;
    href: string;
}

export default function Banner(){
    return (
        <section className={styles.banner}>
            <div className={styles.container}>
                <div className={styles['big-info']}>
                    <h2 className={styles.subtitle}>#EXTRA</h2>
                    <h2 className={styles.title}>Pil Damgaard<br/>Red Arrows</h2>
                    <BannerBar className={styles['title-bar']} />
                </div>
                <div className={styles['image-container']}>
                    <img className={styles.image} src="https://raw.githubusercontent.com/rommel-dk/front-end-test/master/assignment-assets/images/banner.jpg" />
                    <span className={styles.bar}></span>
                </div>
                <div className={styles.info}>
                    <p className={styles.meta}>Pil Damgaard, 2018</p>
                    <p className={styles.summary}>This section is actually a little extra that can be added if you feel confident while working and the time aint sprinting.</p>
                    <ArrowRight className={styles.arrow} />
                </div>
            </div>
            <div className={styles['arrow-down-container']}>
                <ArrowLeftDown className={styles['arrow-down']} />
            </div>
        </section>
    );
}
