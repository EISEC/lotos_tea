'use server'
import React from 'react';
import Link from "next/link";

async function getData() {
    const res = await fetch('https://ifuw.ru/lotos/wp-json/api/brands/all')
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.

    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data')
    }

    return res.json()
}

const BrandFilter = async () => {
    const brands = await getData()
    return (
        <section className={'px-6 py-6'}>
            <div className={'container mx-auto grid grid-cols-5 gap-20'}>
                {
                    brands.map((el:any) => {
                        return (
                            <Link href={`/catalog/brends/${el.slug}`} key={el.id}
                                  className={'relative overflow-hidden rounded-xl'}>
                                <span
                                    className={'w-full text-xl absolute top-0 left-0 z-1 bg-red-600/75 p-2 text-white'}>{el.name}</span>
                                <div
                                    className="h-44 w-[100%] bg-gray-100 rounded-xl p-4 flex flex-col justify-center shadow duration-300 hover:bg-white hover:shadow-xl overflow-hidden">
                                    {el.img ? <img className={'h-auto w-auto'}
                                                   src={el.img}
                                                   alt={el.name}/>
                                        : <h3>{el.name}</h3>}
                                </div>
                            </Link>
                        )
                    })
                }
            </div>
        </section>
    );
};

export default BrandFilter;