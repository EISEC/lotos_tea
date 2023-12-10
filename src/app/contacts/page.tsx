'use server'
import React from 'react';
import {SlDirections, SlMap, SlPhone} from "react-icons/sl";

async function getData() {
    const res = await fetch('https://ifuw.ru/lotos/wp-json/api/page/contacts', {next: {revalidate: 0}})
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
    const predstaviteli = data[0].predstaviteli
    return (
        <main>
            <section className="py-14">
                <div className="container px-4 py-6 mx-auto lg:py-4 md:px-6">
                    <div className="flex flex-wrap mb-12 -mx-4 lg:items-center">
                        <div className="w-full px-4 mb-6 md:w-1/2 lg:mb-0 flex flex-col justify-center">
                            <h1
                                className="mb-4 text-2xl font-bold tracking-wide text-gray-900 md:text-4xl lg:text-4xl">
                                {data[0].title}</h1>
                            <div dangerouslySetInnerHTML={{__html: data[0].kontakti}}/>
                        </div>
                        <div className="w-full px-4 mb-8 md:w-1/2 md:mb-0">
                            <div className="max-w-lg mx-auto overflow-hidden rounded-lg md:ml-0">
                                <div dangerouslySetInnerHTML={{__html: data[0].map}}
                                     className="object-cover w-full h-96"/>
                            </div>
                        </div>
                    </div>
                    <div className={'px-4 py-14'}>
                        <h3 className={'text-2xl mb-6 font-semibold'}>Наши представительства:</h3>
                        <div className={'grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'}>
                            {predstaviteli.map((el: any) => {
                                return (
                                    <div key={el.gorod} className={'border p-2 border-emerald-700 rounded-md'}>
                                        <ul className={'flex flex-col gap-1 text-xs md:text-lg'}>
                                            <li className={'flex flex-row gap-1 items-center'}><SlMap/>{el.gorod}</li>
                                            <li className={'flex flex-row gap-1 items-center'}><SlDirections/>{el.adres}
                                            </li>
                                            <li className={'flex flex-row gap-1 items-center'}><SlPhone/>{el.telefon}
                                            </li>
                                        </ul>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                    <div className="px-4 flex flex-col gap-[20px] text-md md:text-lg"
                         dangerouslySetInnerHTML={{__html: data[0].content}}/>
                </div>
            </section>
        </main>
    );
};

export default Page;