'use client'
import React, {useEffect, useState} from 'react';

const MapScript = ({map}: any) => {
    const karta = map
    const [render, setRender] = useState(false);
    useEffect(() => {
        setRender(true);
    }, []);

    return (
        <div dangerouslySetInnerHTML={{__html: render && karta}}
             className="object-cover w-full h-96"/>
    );
};

export default MapScript;