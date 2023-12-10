'use server'
import React from 'react';
import BrandFilter from "@/components/brandFilter";
import ProductCard from "@/components/productCard";
import InfoCatalog from "@/components/infoCatalog";

async function getData() {
    const res = await fetch('https://ifuw.ru/lotos/wp-json/api/products/all', {next: {revalidate: 0}})
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
                <div className={'px-6 container mx-auto'}>
                    <InfoCatalog/>
                </div>
                <div
                    className="py-4 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 items-center justify-center container mx-auto">
                    {
                        data.map((el: any) => {
                            return (
                                <ProductCard key={el.id} el={el}/>
                            )
                        })
                    }
                </div>
            </section>
        </main>
    );
};

export default Page;