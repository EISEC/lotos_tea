import React from 'react';

const MapScript = async ({map}: any) => {
    const maper = await map
    return (
        <div dangerouslySetInnerHTML={{__html: maper}}
             className="object-cover w-full h-96"/>
    );
};

export default MapScript;