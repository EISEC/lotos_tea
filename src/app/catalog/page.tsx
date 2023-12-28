'use server'
import React from 'react';
import BrandFilter from "@/components/brandFilter";
import ProductCard from "@/components/productCard";
import InfoCatalog from "@/components/infoCatalog";
import {Metadata} from "next";

async function getData() {
    const res = await fetch('https://ifuw.ru/lotos/wp-json/api/products/all', {next: {revalidate: 0}})

    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }

    return res.json()
}

export async function generateMetadata(): Promise<Metadata> {
    return {
        title: `Каталог продукции | Компания «Лотос»`,
        keywords: 'чай, оптом, москва, питер, спб, купить, заказать',
        description: `Каталог продукции, чай из Шри-ланки, оптом. От компании Лотос.`,
        openGraph: {
            title: `Каталог продукции | Компания «Лотос»`,
            description: `Каталог продукции, чай из Шри-ланки, оптом. От компании Лотос.`,
            url: `https://lotos-tea.ru/catalog`,
            type: "website",
            siteName: "Компания «Лотос»",
        },
    }
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