import React from 'react';

import {ReactComponent as Bar} from '../../svgs/imageTextBar.svg';
import {ReactComponent as Arrow} from '../../svgs/footerArrow.svg';


import styles from './ImageText.module.scss';

export default function ImageText(){
    return (
        <section className={styles['image-text']}>
            <img className={styles.image} src="https://raw.githubusercontent.com/rommel-dk/front-end-test/master/assignment-assets/images/text-media-right.png" alt="" />
            <div className={styles.content}>
                <div className={styles['text-container']}>
                    <p className={styles.text}>
                        We use tools like NPM/Gulp/Webpack to preprocess files and PostCSS for some mean, lean, killing machine code and React JS is taking over WordPress one step at a time.
                    </p>
                    <Bar className={styles.bar} />
                </div>
                <Arrow className={styles.arrow} />
            </div>
        </section>
    );
}
