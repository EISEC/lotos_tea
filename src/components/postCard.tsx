import React from 'react';
import Link from "next/link";

//@ts-ignore
const PostCard = ({el}) => {
    return (
        <article
            key={el.id}
            className="max-w-sm bg-white border border-gray-200 rounded-lg shadow flex flex-col justify-between">
            <Link href={`/stati/${el.slug}`}>
                <img className="rounded-t-lg" src={!el.img ? '/img/demoImg.jpg' : el.img} alt=""/>
            </Link>
            <div className="p-5">
                <Link href={`/stati/${el.slug}`}>
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">{el.title}</h5>
                </Link>
                <p className="mb-3 font-normal text-gray-700">{el.except}</p>
                <Link href={`/stati/${el.slug}`}
                      className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-gradient-to-r from-green-700 to-green-600 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300">
                    Подробнее
                </Link>
            </div>
        </article>
    );
};

export default PostCard;