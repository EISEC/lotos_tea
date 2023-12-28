'use server'
import React from 'react';
import SliderBrend from "@/components/SliderBrend";

async function getData() {
    const res = await fetch('https://ifuw.ru/lotos/wp-json/api/brands/all', {next: {revalidate: 0}})
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.

    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data')
    }

    return res.json()
}

const HomeBrend = async () => {
    const brands = await getData()
    return (
        <section className={'px-6 py-6'}>
            <SliderBrend brends={brands}/>
        </section>
    );
};

export default HomeBrend;