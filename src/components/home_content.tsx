'use server'
import React from 'react';

async function getData() {
    const res = await fetch('https://ifuw.ru/lotos/wp-json/api/page/home', {next: {revalidate: 0}})
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.

    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data')
    }

    return res.json()
}

const HomeContent = async () => {
    const data = await getData()
    return (
        <section
            className={'bg-gradient-to-b from-green-600/50 from-10% via-green-500/50 via-30% to-emerald-400/50 to-90% py-10'}>
            <div className='container mx-auto flex flex-col gap-6 px-4'>
                <h2 className={'text-4xl font-bold'}>{data[0]['title']}</h2>
                <div className={'flex flex-col gap-[20px]'} dangerouslySetInnerHTML={{__html: data[0]['content']}}/>
            </div>
        </section>
    );
};

export default HomeContent;