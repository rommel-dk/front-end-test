import React from 'react';

import {ReactComponent as Background1} from '../../svgs/hero1Background1.svg';
import {ReactComponent as Background2} from '../../svgs/hero1Background2.svg';
import GetNotOverlapped from '../GetNotOverlapped';

import styles from './Hero1.module.scss';

interface IHero1{
    title: string;
    children: string;
}

export default function Hero1({title, children}: IHero1){
    const usableTitle = <>
        {title[0]}
        <GetNotOverlapped str={title.slice(1, 16)} className={styles['not-overlapped']} />
        {title.slice(16, 21)}
        <GetNotOverlapped str={title[21]} className={styles['not-overlapped']} />
        {title[22]}
        <GetNotOverlapped str={title.slice(23, 30)} className={styles['not-overlapped']} />
        {title.slice(30)}
    </>;

    return( 
        <section className={styles["hero-1"]}>
            <div className={styles["svg-container1"]}>
                <Background1 className={styles['background-1']} />
            </div>
            <h1 className={styles.title}>{usableTitle}</h1>
            <p className={styles.text}>{children}</p>
            <div className={styles["svg-container2"]}>
                <Background2 className={styles['background-2']} />
            </div>
        </section>
    );
}
