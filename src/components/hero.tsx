'use server'
import React from 'react';
import Image from "next/image";
import ModalPrice from "@/components/modalPrice";

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
        <section>
            <div
                className="relative container mx-auto w-full px-4 py-32 sm:px-6 lg:flex lg:h-[50vh] lg:items-center lg:px-8 gap-10 justify-between">
                <div className="w-full text-left">
                    <h1 className="text-3xl font-extrabold sm:text-5xl"
                        dangerouslySetInnerHTML={{__html: data[0]['block1'][0]['zagolovok_na_sekczii']}}/>

                    <p className="mt-4 max-w-lg sm:text-xl/relaxed">
                        {data[0]['block1'][0]['opisanie_sekczii']}
                    </p>
                    <ModalPrice/>
                </div>
                <div className={'relative h-full w-full flex items-end justify-end'}>
                    <Image src={img} fill={true}
                           style={{objectFit: "contain"}} alt=""/>
                </div>
            </div>
        </section>
    );
};

export default Hero;