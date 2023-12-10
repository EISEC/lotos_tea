'use server'
import React from 'react';

async function getData() {
    const res = await fetch('https://ifuw.ru/lotos/wp-json/api/page/us', {next: {revalidate: 0}})
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

        </main>
    );
};

export default Page;