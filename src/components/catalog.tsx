'use server'
import React from 'react';
import Link from "next/link";
import ProductCard from "@/components/productCard";

async function getData() {
    const res = await fetch('https://ifuw.ru/lotos/wp-json/api/products/all', {cache: 'no-store'})
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.

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
                className="py-4 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 items-center justify-center container mx-auto">
                {
                    data.slice(0, 8).map((el: any) => {
                        return (
                            <ProductCard key={el.id} el={el}/>
                        )
                    })
                }
            </div>
        </section>
    );
};

export default Catalog;