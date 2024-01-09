import React from 'react';
const InfoCatalog = ({data}: any) => {
    return (
        <>
            <h2 className={'text-xl md:text-4xl font-bold'}>{data[0].title}</h2>
            <div className={'mt-5 flex flex-col gap-3'} dangerouslySetInnerHTML={{__html: data[0].content}}/>
        </>
    );
};

export default InfoCatalog;