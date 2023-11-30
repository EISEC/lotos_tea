import React from 'react';

const Brands = () => {
    return (
        <section className={'px-6 py-6'}>
            <div className={'container mx-auto grid grid-cols-5 gap-20'}>
                <a href='#'
                   className="h-44 w-[100%] bg-gray-100 rounded-xl p-4 flex flex-col justify-center shadow duration-300 hover:bg-white hover:shadow-xl overflow-hidden">
                    <img className={'h-auto w-auto'}
                         src="http://lotos-tea.ru/components/com_jshopping/files/img_categories/femrich-marcel-logo.png"
                         alt=""/>
                </a>
                <a href='#'
                   className="h-44 w-[100%] bg-gray-100 rounded-xl p-4 flex flex-col justify-center shadow duration-300 hover:bg-white hover:shadow-xl overflow-hidden">
                    <img className={'h-auto w-auto'}
                         src="http://lotos-tea.ru/components/com_jshopping/files/img_categories/fs-logo.png"
                         alt=""/>
                </a>
                <a href='#'
                   className="h-44 w-[100%] bg-gray-100 rounded-xl p-4 flex flex-col justify-center shadow duration-300 hover:bg-white hover:shadow-xl overflow-hidden">
                    <img className={'h-auto w-auto'}
                         src="http://lotos-tea.ru/components/com_jshopping/files/img_categories/femrich-logo.png"
                         alt=""/>
                </a>
                <a href='#'
                   className="h-44 w-[100%] bg-gray-100 rounded-xl p-4 flex flex-col justify-center shadow duration-300 hover:bg-white hover:shadow-xl overflow-hidden">
                    <img className={'h-auto w-auto'}
                         src="http://lotos-tea.ru/components/com_jshopping/files/img_categories/ceyem-logo.png"
                         alt=""/>
                </a>
                <a href='#'
                   className="h-44 w-[100%] bg-gray-100 rounded-xl p-4 flex flex-col justify-center shadow duration-300 hover:bg-white hover:shadow-xl overflow-hidden">
                    <img className={'h-auto w-auto'}
                         src="http://lotos-tea.ru/components/com_jshopping/files/img_categories/windsor-logo.jpg"
                         alt=""/>
                </a>
            </div>
        </section>
    );
};

export default Brands;