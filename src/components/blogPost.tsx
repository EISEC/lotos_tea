import React from 'react';
import PostCard from "@/components/postCard";

async function getData() {
    const res = await fetch(`https://ifuw.ru/lotos/wp-json/api/posts/all`, {next: {revalidate: 0}})
    const data = res.json()
    return data
}

const BlogPost = async () => {
    const data = await getData()
    return (
        <section className={'py-10'}>
            <div className={'container mx-auto px-4 py-4'}>
                <h2 className={'text-4xl font-bold'}>Статьи</h2>
            </div>
            <div className={'container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6 py-6'}>
                {data.slice(0, 3).map((el: any) => {
                    return (
                        <PostCard key={el.id} el={el}/>
                    )
                })}
            </div>

        </section>
    );
};

export default BlogPost;