'use server'
import React from 'react';
import {Metadata} from "next";
import CatFilter from "@/components/catFilter";
import HomeBrend from "@/components/homeBrend";

async function getData() {
    const res = await fetch('https://ifuw.ru/lotos/wp-json/api/products/all', {next: {revalidate: 0}})
    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }
    return res.json()
}

async function getCat() {
    const res = await fetch('https://ifuw.ru/lotos/wp-json/api/cat/all', {next: {revalidate: 0}})
    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }
    return res.json()
}

async function getInfo() {
    const res = await fetch('https://ifuw.ru/lotos/wp-json/api/page/catalog', {next: {revalidate: 0}})
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
    const caty = await getCat()
    const info = await  getInfo()
    return (
        <main>
            <HomeBrend/>
            <CatFilter data={data} caty={caty} info={info}/>
        </main>
    );
};

export default Page;