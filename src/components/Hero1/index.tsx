import React from 'react';

import {ReactComponent as Background1} from '../../svgs/hero1Background1.svg';
import {ReactComponent as Background2} from '../../svgs/hero1Background2.svg';

import styles from './Hero1.module.scss';

const GetNotOverlapped = ({str = ''}) => {
    if(typeof str !== 'string'|| str === '')
        return null;
    
    return <span className={styles['not-overlapped']}>{str}</span>;
}

interface IHero1{
    title: string;
    children: string;
}

export default function Hero1({title, children}: IHero1){
    const usableTitle = <>
        {title[0]}
        <GetNotOverlapped str={title.slice(1, 16)} />
        {title.slice(16, 21)}
        <GetNotOverlapped str={title[21]} />
        {title[22]}
        <GetNotOverlapped str={title.slice(23, 30)} />
        {title.slice(30)}
    </>;

    return( 
        <section className={styles["hero-1"]}>
            <Background1 className={styles['background-1']} />
            <h1 className={styles.title}>{usableTitle}</h1>
            <p className={styles.text}>{children}</p>
            <Background2 className={styles['background-2']} />
        </section>
    );
}
