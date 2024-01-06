'use server'
import React from 'react';
import Image from "next/image";
import HomeProductCards from "@/components/homeProductSlider";
import {Metadata} from "next";
import ModalWindow from "@/components/modalWindow";

async function getData(slug: string) {
    const res = await fetch(`https://ifuw.ru/lotos/wp-json/api/product/${slug}`, {next: {revalidate: 0}})

    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }

    return res.json()
}

async function getProducts() {
    const res = await fetch('https://ifuw.ru/lotos/wp-json/api/products/all', {next: {revalidate: 0}})
    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }
    return res.json()
}

export async function generateMetadata({params}: { params: { slug: string } }): Promise<Metadata> {
    const data = await getData(params.slug)
    const el = data[0]
    const desc = el.acf.kratkoe_opisanie === '' ? 'Нет описания' : el.acf.kratkoe_opisanie
    return {
        title: `${el.title} | Компания «Лотос»`,
        keywords: 'чай, оптом, москва, питер, спб, купить, заказать',
        description: desc,
        openGraph: {
            title: `${el.title} | Компания «Лотос»`,
            description: `${desc} оптом напрямую из Шри-ланки `,
            url: `https://lotos-tea.ru/catalog/${el.slug}`,
            type: "website",
            images: [el.img],
            siteName: "Компания «Лотос»",
        },
    }
}

const Page = async ({params}: { params: { slug: string } }) => {
    const data = await getData(params.slug)
    const products = await getProducts()
    const otsutstvuet = 'нет описания'
    const opiska: any = data[0].acf.kratkoe_opisanie === undefined ? otsutstvuet : data[0].acf.kratkoe_opisanie
    return (
        <>
            <section className="bg-white">
                <div className="container px-6 py-10 mx-auto">
                    <div className="flex flex-col md:flex-row relative gap-5 md:items-center md:justify-center w-full">
                        <div className={'relative h-full'}>
                            <Image className="lg:mx-6 h-96 rounded-lg lg:h-[36rem]"
                                   width={500}
                                   height={500}
                                   style={{objectFit: "contain"}}
                                   loading="lazy"
                                   sizes="(max-width: 768px) 100vw, 33vw"
                                   src={data[0].img}
                                   alt=""/>
                        </div>
                        <div className="mt-8 w-[fit-content] lg:px-6 lg:mt-0">
                            <h1 className="text-2xl font-semibold text-gray-800  lg:text-3xl lg:w-96">
                                {data[0].title}
                            </h1>
                            <div className="max-w-lg mt-6 text-gray-500"
                                 dangerouslySetInnerHTML={{__html: opiska}}/>
                            <h3 className="mt-6 text-lg font-medium text-green-500">{data[0].proizvoditel[0]}</h3>
                            <ul className="text-gray-600 ">
                                <li><b>Упаковка</b>: {data[0].acf.upakovka}</li>
                                <li><b>Класс</b>: {data[0].acf.klass}</li>
                                <li><b>Ароматизация</b>: {data[0].acf.aromatizacziya}</li>
                                <li><b>Количество в упаковке</b>: {data[0].acf['kol-vo_v_upakovke']}</li>
                                <li><b>Сорт</b>: {data[0].acf.sort}</li>
                            </ul>

                            <ModalWindow prod={data[0].title}/>
                        </div>
                    </div>
                </div>
            </section>
            <section className={'py-10'}>
                <div className={'px-4 container mx-auto'}>
                    <h2 className={'text-4xl font-bold'}>Новинки</h2>
                </div>
                <div
                    className="py-4 container mx-auto">
                    <HomeProductCards dta={products}/>
                </div>
            </section>
        </>
    );
};

export default Page;