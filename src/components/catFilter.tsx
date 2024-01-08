'use client'
import React, {useEffect, useState} from 'react';
import ProductCard from "@/components/productCard";
import InfoCatalog from "@/components/infoCatalog";

const CatFilter = ({data, caty}: any) => {
    const [filtered, setFiltered] = useState(data)
    return (
        <>
            <section className={'py-10 px-4 container mx-auto'}>
                <ul className={'px-4'}>
                    <span>Выберите категорию:</span>
                    {caty.map((el: any) => {
                        return (
                            <li key={el}>
                                {/*//@ts-ignore*/}
                                <button type={'button'}>
                                    {el}
                                </button>
                            </li>
                        )
                    })}
                </ul>
            </section>
            <section className={'py-10 px-4'}>
                <div className={'px-6 container mx-auto'}>
                    <InfoCatalog/>
                </div>
                <div
                    className="py-4 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 items-center justify-center container mx-auto">
                    {
                        filtered.map((el: any) => {
                            return (
                                <ProductCard key={el.id} el={el}/>
                            )
                        })
                    }
                </div>
            </section>
        </>
    );
};

export default CatFilter;