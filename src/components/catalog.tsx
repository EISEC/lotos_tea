'use server'
import React from 'react';
import HomeProductCards from "@/components/homeProductSlider";
import {Metadata} from "next";
import Link from "next/link";

async function getData() {
    const res = await fetch('https://ifuw.ru/lotos/wp-json/api/products/all', {next: {revalidate: 0}})
    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data')
    }
    return res.json()
}

const Catalog = async () => {
    const data = await getData()
    return (
        <section className={'py-10'}>
            <div className={'px-4 container mx-auto'}>
                <h2 className={'text-4xl font-bold'}>Каталог</h2>
                <p className={'mt-5'}>Следует отметить, что экономическая повестка сегодняшнего дня обеспечивает
                    актуальность
                    первоочередных требований. Также как постоянный количественный рост и сфера нашей активности играет
                    важную роль в формировании своевременного выполнения сверхзадачи.</p>
            </div>
            <div
                className="py-4 container mx-auto">
                <HomeProductCards dta={data}/>
            </div>
            <div
                className="py-4 container mx-auto text-center">
                <Link className={'bg-orange-500 text-green-50 px-3 py-2 text-xl rounded shadow-xl hover:opacity-[0.9]'} href={'/catalog'}>
                    Весь ассортимент
                </Link>
            </div>
        </section>
    );
};

export default Catalog;