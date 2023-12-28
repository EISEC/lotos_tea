'use server'
import React from 'react';
import SinglePost from "@/components/singlePost";
import {Metadata} from "next";


async function getData(slug: string) {
    const api: any | URL = `https://ifuw.ru/lotos/wp-json/wp/v2/posts?slug=${slug}&_embed`
    const res: any = await fetch(api, {next: {revalidate: 0}})

    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }

    return res.json()
}

export async function generateMetadata({params}: { params: { slug: string } }): Promise<Metadata> {
    const data = await getData(params.slug)
    const el = data[0]
    return {
        title: `${el.title.rendered} | Компания «Лотос»`,
        keywords: 'чай, оптом, москва, питер, спб, купить, заказать',
        description: el.excerpt.rendered.replace(/(<([^>]+)>)/ig, '').substring(0, 120),
        openGraph: {
            title: `${el.title.rendered} | Компания «Лотос»`,
            description: `${el.excerpt.rendered.replace(/(<([^>]+)>)/ig, '').substring(0, 120)}`,
            url: `https://lotos-tea.ru/stati/${el.slug}`,
            type: "website",
            siteName: "Компания «Лотос»",
        },
    }
}


export default async function Page({params}: { params: { slug: string } }) {
    const api: any | URL = `https://ifuw.ru/lotos/wp-json/wp/v2/posts?slug=${params.slug}&_embed`
    const res: any = await fetch(api, {next: {revalidate: 0}})
    const data = await res.json()
    return <SinglePost data={data}/>
}
