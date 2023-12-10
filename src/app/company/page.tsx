'use server'
import React from 'react';

async function getData() {
    const res = await fetch('https://ifuw.ru/lotos/wp-json/api/page/company', {next: {revalidate: 0}})
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
            <section className="py-14">
                <div className="container px-4 py-6 mx-auto lg:py-4 md:px-6">
                    <div className="flex flex-wrap mb-12 -mx-4 lg:items-center">
                        <div className="w-full px-4 mb-6 md:w-1/2 lg:mb-0">
                            <h1
                                className="mb-4 text-2xl font-bold leading-loose tracking-wide text-gray-900 md:text-4xl lg:text-4xl">
                                {data[0].title}</h1>
                        </div>
                        <div className="w-full px-4 mb-8 md:w-1/2 md:mb-0">
                            <div className="max-w-lg mx-auto overflow-hidden rounded-lg md:ml-0">
                                <img src={data[0].img} alt={data[0].title}
                                     className="object-cover w-full h-96"/>
                            </div>
                        </div>
                    </div>
                    <div className="px-4 flex flex-col gap-[20px] text-md md:text-lg"
                         dangerouslySetInnerHTML={{__html: data[0].content}}/>
                </div>
            </section>
        </main>
    );
};

export default Page;