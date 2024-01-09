'use client'
import React from 'react';
import {setCookie} from "cookies-next";

const Cucks = ({soglasen}: any) => {
    return (
        <div
            className={`fixed hidden justify-center px-4 py-4 mx-auto lg:py-10 z-20 bottom-1 w-full rounded-md overflow-hidden`}>
            <div className="relative p-6 bg-stone-100 border-l-4 border-yellow-500"
                 role="alert">
                <div className="flex">
                    <div className="py-1">

                    </div>
                    <div className={'w-full'}>
                        <p className="mb-1 text-lg ">Мы используем файлы Cookie</p>
                        <p className="text-sm">Если вы хотите продолжить работу с сайтом примите {soglasen}</p>
                    </div>
                    <div className={'w-full flex flex-row justify-end'}>
                        {/*//@ts-ignore*/}
                        <button
                            onClick={() => setCookie('politic', 'hidden')}
                            className={'bg-green-500 px-5 rounded-md text-white'}>
                            Принять
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Cucks;