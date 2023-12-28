'use server'
import React from 'react';
import Link from "next/link";
import {Metadata} from "next";

async function getData() {
    const res = await fetch('https://ifuw.ru/lotos/wp-json/api/brands/all', {next: {revalidate: 0}})
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.

    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data')
    }

    return res.json()
}

export async function generateMetadata(): Promise<Metadata> {
    return {
        title: `Бренды с которыми мы работаем | Компания «Лотос»`,
        keywords: 'чай, оптом, москва, питер, спб, купить, заказать',
        description: `Бренды с которыми мы работаем, чай из Шри-ланки, оптом. От компании Лотос.`,
        openGraph: {
            title: `Бренды с которыми мы работаем | Компания «Лотос»`,
            description: `Бренды с которыми мы работаем, чай из Шри-ланки, оптом. От компании Лотос.`,
            url: `https://lotos-tea.ru/brends`,
            type: "website",
            siteName: "Компания «Лотос»",
        },
    }
}

const Page = async () => {
    const brands = await getData()
    return (
        <section className={'px-6 py-6'}>
            <div className={'container mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-20 px-6'}>
                {
                    brands.map((el: any) => {
                        return (
                            <Link href={`/catalog/brends/${el.slug}`} key={el.id}
                                  className={'relative overflow-hidden rounded-xl'}>
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

export default Page;