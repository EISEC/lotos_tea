import React from 'react';
import Link from "next/link";

const NotFound = () => {
    return (
        <main className={'container mx-auto px-6 min-h-[50vh]'}>
            <section className={'py-20 text-center flex flex-col gap-5'}>
                <h1 className={'text-3xl'}>Страница не найдена</h1>
                <p>К сожалению данная страница не существует или устарела, возможно информация ниже вам поможет!)</p>
                <p className={'text-5xl font-bold'}>404</p>
            </section>
            <section className={'pb-25 px-4'}>
                <div className={'flex flex-col md:flex-row gap-10 justify-between items-center'}>
                    <Link href={'/catalog'}
                          className={'min-h-[80px] w-full bg-green-700 rounded-lg shadow-md p-4 flex items-center justify-center text-white text-xl hover:opacity-[0.7]'}>
                        Каталог
                    </Link>
                    <Link href={'/stati'}
                          className={'min-h-[80px] w-full bg-green-700 rounded-lg shadow-md p-4 flex items-center justify-center text-white text-xl hover:opacity-[0.7]'}>
                        Статьи
                    </Link>
                    <Link href={'/contacts'}
                          className={'min-h-[80px] w-full bg-green-700 rounded-lg shadow-md p-4 flex items-center justify-center text-white text-xl hover:opacity-[0.7]'}>
                        Контакты
                    </Link>
                </div>
            </section>
        </main>
    );
};

export default NotFound;