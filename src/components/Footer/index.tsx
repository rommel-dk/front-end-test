import React, { JSXElementConstructor } from 'react';

import styles from './Footer.module.scss'

interface IFooter{
    title: string;
    subtitle: string;
    href: string;
    Logo: JSXElementConstructor<any>;
}

export default function Footer({title, subtitle, href, Logo}: IFooter){
    return (
        <section className={styles.footer}>
            <div className={styles.content}>
                {title && <p className={styles['big-text']}>{href ? <a href={href}>{title}</a> : title}</p>}
                {subtitle && <p className={styles.text}>{href ? <a href={href}>{subtitle}</a> : subtitle}</p>}
            </div>
            {Logo && <Logo className={styles.logo} />}
        </section>
    );
}
