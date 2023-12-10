import React from 'react';

async function getData() {
    const res = await fetch('https://ifuw.ru/lotos/wp-json/api/page/catalog', {next: {revalidate: 0}})
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.

    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data')
    }

    return res.json()
}

const InfoCatalog = async () => {
    const data = await getData()
    return (
        <>
            <h2 className={'text-4xl font-bold'}>{data[0].title}</h2>
            <div className={'mt-5 flex flex-col gap-3'} dangerouslySetInnerHTML={{__html: data[0].content}}/>
        </>
    );
};

export default InfoCatalog;