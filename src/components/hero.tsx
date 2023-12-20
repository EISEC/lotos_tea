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

const Hero = async () => {
    const data = await getData()
    const img = data[0]['img']
    return (
        <section
            className={`relative bg_hero bg-cover bg-center bg-no-repeat`}
            style={{backgroundImage: "url(" + img + ")"}}>
            <div
                className="absolute inset-0 bg-gradient-to-r from-[40%] from-white/95 via-white/70 to transparent"></div>

            <div
                className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-[50vh] lg:items-center lg:px-8">
                <div className="max-w-xl text-left">
                    <h1 className="text-3xl font-extrabold sm:text-5xl" dangerouslySetInnerHTML={{__html: data[0]['block1'][0]['zagolovok_na_sekczii']}}/>

                    <p className="mt-4 max-w-lg sm:text-xl/relaxed">
                        {data[0]['block1'][0]['opisanie_sekczii']}
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Hero;