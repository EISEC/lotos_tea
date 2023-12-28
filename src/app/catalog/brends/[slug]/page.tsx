'use server'
import React from 'react';
import ProductCard from "@/components/productCard";
import {Metadata} from "next";

async function getData(slug: string) {
    const res = await fetch(`https://ifuw.ru/lotos/wp-json/api/brend/${slug}`, {next: {revalidate: 0}})

    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data')
    }

    return res.json()
}

export async function generateMetadata({params}: { params: { slug: string } }): Promise<Metadata> {
    const data = await getData(params.slug)
    return {
        title: `${data[1].name} | Компания «Лотос»`,
        keywords: 'чай, оптом, москва, питер, спб, купить, заказать',
        description: data[1]['description'],
        openGraph: {
            title: `${data[1].name} | Компания «Лотос»`,
            description: `${data[1].name} | ${data[1]['description']}. Оптом напрямую из Шри-ланки `,
            url: `https://lotos-tea.ru/catalog/brends/${params.slug}`,
            type: "website",
            siteName: "Компания «Лотос»",
        },
    }
}

const Page = async ({params}: { params: { slug: string } }) => {
    const data = await getData(params.slug)
    return (
        <section className={'py-10'}>
            <div className={'px-4 container mx-auto'}>
                <h2 className={'text-4xl font-bold'}>{data[1].name}</h2>
                <p className={'mt-5'} dangerouslySetInnerHTML={{__html: data[1]['description']}}/>
            </div>
            <div
                className="py-4 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 items-center justify-center container mx-auto">
                {
                    data[0].map((el: any) => {
                        return (
                            <ProductCard key={el.id} el={el}/>
                        )
                    })
                }
            </div>
        </section>
    );
};

export default Page;