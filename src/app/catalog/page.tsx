'use server'
import React from 'react';
import Link from "next/link";
import BrandFilter from "@/components/brandFilter";

async function getData() {
    const res = await fetch('https://ifuw.ru/lotos/wp-json/api/products/all')
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.

    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data')
    }

    return res.json()
}

const Page = async () => {
    const data = await getData()
    return (
        <main>
            <BrandFilter/>
            <section className={'py-10 px-4'}>
                <div className={'px-4 container mx-auto'}>
                    <h2 className={'text-4xl font-bold'}>Каталог</h2>
                    <p className={'mt-5'}>Следует отметить, что экономическая повестка сегодняшнего дня обеспечивает
                        актуальность
                        первоочередных требований. Также как постоянный количественный рост и сфера нашей активности
                        играет
                        важную роль в формировании своевременного выполнения сверхзадачи.</p>
                </div>
                <div className="py-4 grid grid-cols-4 items-center justify-center container mx-auto">
                    {
                        data.map((el:any) => {
                            return (
                                <div
                                    key={el.id}
                                    className="flex-shrink-0 m-6 relative overflow-hidden bg-gradient-to-b from-red-300 to-red-600 rounded-lg max-w-xs shadow-lg">
                                    <svg className="absolute bottom-0 left-0 mb-8" viewBox="0 0 375 283" fill="none">
                                        <rect x="159.52" y="175" width="152" height="152" rx="8"
                                              transform="rotate(-45 159.52 175)"
                                              fill="rgb(255, 255, 255, 0.5)"/>
                                        <rect y="107.48" width="152" height="152" rx="8"
                                              transform="rotate(-45 0 107.48)"
                                              fill="rgb(255, 255, 255, 0.5)"/>
                                    </svg>
                                    <div className="relative pt-3 px-10 flex items-center justify-center">
                                        <div className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3"></div>
                                        <img className="relative w-40"
                                             src={el.img}
                                             alt=""/>
                                    </div>
                                    <div className="relative text-white px-6 pb-6 mt-6 flex flex-col gap-3">
                                        <span className="block opacity-75 -mb-1">{el.cat[0].name}</span>
                                        <div className="flex justify-between flex flex-col gap-2">
                                            <span className="block font-semibold text-xl">{el.title}</span>
                                            <Link href={`/catalog/${el.slug}`}
                                                  className="block bg-white rounded-full text-red-600 text-xs font-bold px-3 py-2 leading-none text-center"> подробнее </Link>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </section>
        </main>
    );
};

export default Page;