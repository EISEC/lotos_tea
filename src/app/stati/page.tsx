'use server'
import React from "react";
import PostCard from "@/components/postCard";

async function getData() {
    const res = await fetch(`https://ifuw.ru/lotos/wp-json/api/posts/all`, {next: {revalidate: 0}})
    const data = res.json()
    return data
}

//@ts-ignore
export default async function Page() {
    const data = await getData()
    return (
        <section className={'container mx-auto px-4 py-6'}>
            <h1 className={'mb-8 text-4xl font-semibold'}>Полезные статьи</h1>
            <div className={'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5'}>
                {data.map((el: any) => {
                    return (
                        <PostCard key={el.id} el={el}/>
                    )
                })}
            </div>
        </section>
    )
}
