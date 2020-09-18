import React from 'react';

import {ReactComponent as Background1} from '../../svgs/hero2Background1.svg';
import {ReactComponent as Background2} from '../../svgs/hero2Background2.svg';
import {ReactComponent as ArrowRight} from '../../svgs/arrowRight.svg';
import GetNotOverlapped from '../GetNotOverlapped';

import styles from './Hero2.module.scss';

interface IHero2Props{
    title: string;
}

export default function Hero2({title}: IHero2Props){
    const usableTitle = <>
        {title.slice(0, 7)}
        <GetNotOverlapped str={title.slice(7)} className={styles['not-overlapped']} />
    </>;
    return (
        <section className={styles['hero-2']}>
            <Background1 className={styles['background-1']} />
            <h1 className={styles.title}>{usableTitle}</h1>
            <Background2 className={styles['background-2']} />
                <h2 className={styles.subtitle}>
                    GET ON THE SKILL TRAIN NOW 
                    <span className={styles.arrow} ><ArrowRight /></span>
                </h2>
            <p className={styles.text}>The assignment must be delivered as a pull request to the assignment repository and we appreciate running commits so we can see how you go from our small layout to a final awesome product.</p>
        </section>
    )
}
