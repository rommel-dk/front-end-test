import React from 'react';

import {ReactComponent as Logo} from '../../svgs/logo.svg';

import styles from './Footer.module.scss'

export default function ImageWide(){
    return (
        <section className={styles.footer}>
            <div className={styles.content}>
                <p className={styles['big-text']}>PULL REQUEST</p>
                <p className={styles.text}>Don’t be shy to commit</p>
            </div>
            <Logo className={styles.logo} />
        </section>
    );
}
