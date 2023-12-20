'use server'
import React from 'react';
import SinglePost from "@/components/singlePost";


export default async function Page({ params }: { params: { slug: string } }) {
    const api: any | URL = `https://ifuw.ru/lotos/wp-json/wp/v2/posts?slug=${params.slug}&_embed`
    const res: any = await fetch(api, {next: {revalidate: 0}})
    const data = await res.json()
    return <SinglePost data={data}/>
}