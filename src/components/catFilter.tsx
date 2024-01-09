'use client'
import React, {useEffect, useMemo, useState} from 'react';
import ProductCard from "@/components/productCard";
import InfoCatalog from "@/components/infoCatalog";
import FiltrButton from "@/components/filtrButton";

const CatFilter = ({data, caty, info}: any) => {
    const [filtered, setFiltered] = useState([])

    useMemo(() => {
        setFiltered(data)
    }, [])
    return (
        <>
            <section className={'py-10 px-4 container mx-auto'}>
                <FiltrButton cat={caty} setFiltered={setFiltered} data={data}/>
            </section>
            <section className={'py-10 px-4'}>
                <div className={'px-6 container mx-auto'}>
                    <InfoCatalog data={info}/>
                </div>
                <div className={'px-6 container mx-auto text-lg mt-3'}>
                    <strong>Найдено товаров: {filtered.length}</strong>
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