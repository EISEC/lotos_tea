import React from 'react';
import Link from "next/link";
import Image from "next/image";

//@ts-ignore
const ProductCard = ({el}) => {
    return (
        <div
            className="h-full w-full flex flex-col justify-center m-6 relative overflow-hidden border-2 border-emerald-600 rounded-lg max-w-xs shadow-md">
            <div className="relative pt-3 px-10 flex items-center justify-center">
                <Link className={'relative w-40 h-60'} href={`/catalog/${el.slug}`}>
                    <Image
                        fill={true}
                        style={{objectFit: "contain"}}
                        src={el.img}
                        loading="lazy"
                        alt=""/>
                </Link>
            </div>
            <div className="relative px-6 pb-6 mt-6 flex flex-col gap-3">
                <span className="block opacity-75 -mb-1">{el.cat[0].name}</span>
                <Link href={`/catalog/${el.slug}`} className="flex justify-between flex flex-col gap-2">
                    <span className="block font-semibold text-xl">{el.title}</span>
                </Link>
            </div>
        </div>
    );
};

export default ProductCard;