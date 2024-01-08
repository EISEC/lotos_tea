'use server'
import React from 'react';
import BrandFilter from "@/components/brandFilter";
import {Metadata} from "next";
import CatFilter from "@/components/catFilter";

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
    let caty: any = []
    //@ts-ignore
    for (let i = 0; i < data.length; i++) {
        if (!caty.includes(data[i].cat[0].name)) {
            caty.push(data[i].cat[0].name)
        }
    }
    return (
        <main>
            <BrandFilter/>
            <CatFilter data={data} caty={caty}/>
        </main>
    );
};

export default Page;