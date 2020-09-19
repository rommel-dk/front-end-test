import React from 'react';

import {ReactComponent as Background1} from '../../svgs/hero2Background1.svg';
import {ReactComponent as Background2} from '../../svgs/hero2Background2.svg';
import {ReactComponent as ArrowRight} from '../../svgs/arrowRight.svg';
import GetNotOverlapped from '../GetNotOverlapped';

import styles from './Hero2.module.scss';

interface IHero2Props{
    title: string;
    subtitle: string;
    children: string;
}

export default function Hero2({title, subtitle, children}: IHero2Props){
    const usableTitle = <>
        {title.slice(0, 7)}
        <GetNotOverlapped str={title.slice(7)} className={styles['not-overlapped']} />
    </>;
    return (
        <section className={styles['hero-2']}>
            <Background1 className={styles['background-1']} />
            <div className={styles.content}>
                <h1 className={styles.title}>{usableTitle}</h1>
                <h2 className={styles.subtitle}>
                    {subtitle}
                    <span className={styles.arrow} ><ArrowRight /></span>
                </h2>
                <p className={styles.text}>{children}</p>
            </div>
            <Background2 className={styles['background-2']} />
        </section>
    )
}
