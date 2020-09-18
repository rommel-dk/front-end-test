import { ReactComponent } from '*.svg';
import React from 'react';

interface IGetNotOverlappedProps{
    str: string;
    className?: string;
}

export default function GetNotOverlapped({str = '', className}: IGetNotOverlappedProps){
    if(typeof str !== 'string'|| str === '')
        return null;
        
    return <span className={className}>{str}</span>;
}