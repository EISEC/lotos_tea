'use server'
import React from 'react';
import Image from "next/image";

async function getData(slug: string) {
    const res = await fetch(`https://ifuw.ru/lotos/wp-json/api/product/${slug}`, {next: {revalidate: 0}})

    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data')
    }

    return res.json()
}

const Page = async ({params}: { params: { slug: string } }) => {
    const data = await getData(params.slug)
    return (
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
                             dangerouslySetInnerHTML={{__html: data[0].content}}/>
                        <h3 className="mt-6 text-lg font-medium text-green-500">{data[0].proizvoditel[0]}</h3>
                        <ul className="text-gray-600 ">
                            <li><b>Упаковка</b>: {data[0].acf.upakovka}</li>
                            <li><b>Класс</b>: {data[0].acf.klass}</li>
                            <li><b>Ароматизация</b>: {data[0].acf.aromatizacziya}</li>
                            <li><b>Количество в упаковке</b>: {data[0].acf['kol-vo_v_upakovke']}</li>
                            <li><b>Сорт</b>: {data[0].acf.sort}</li>
                        </ul>

                        <button
                            className={'px-3 py-1 my-3 bg-gradient-to-r from-green-700 to-green-600 text-xl text-white rounded-md shadow-md'}>
                            Обратная связь
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Page;