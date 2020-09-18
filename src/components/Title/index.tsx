import React, { Children, ReactNodeArray, useEffect, useState } from 'react';

import useWindowResizeWidth from '../../hooks/useWindowResizeWidth';

import {ReactComponent as Arrow} from '../../svgs/arrowRightDown.svg'

import styles from './Title.module.scss'

interface ITitlesProps {
    children?: ReactNodeArray
    screenWidthCols: {[key: number]: number}
}
export default function Titles({children, screenWidthCols}: ITitlesProps){
    const windowWidth = useWindowResizeWidth() || window.innerWidth;
    const [columns, setColumns] = useState<ReactNodeArray[]>([]);

    useEffect(() => {
        const newColumns: ReactNodeArray[] = [];
        const sortedWidth = Object.entries(screenWidthCols).sort(([a], [b]) => +b - +a)
        const [, neededCols] = sortedWidth.find(([width]) => windowWidth >= +width) || [null, 1];

        Children.forEach(children, (child, i) => {
            const colI = i % +neededCols;

            if(!newColumns[colI] || !Array.isArray(newColumns[colI]))
            newColumns[colI] = []

            newColumns[colI].push(child);
        });

        setColumns(newColumns);
        // eslint-disable-next-line
    }, [children, screenWidthCols, windowWidth])

    return (
        <section className={styles.titles}>
            <div className={styles["arrow-container"]}><Arrow /></div>
                {columns && columns.map((ele, i) => <div key={i} className={styles.column}>{[...ele]}</div>)}
        </section>
    )
}
