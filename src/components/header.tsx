import React from 'react';
import Link from "next/link";
import {GiRotaryPhone} from "react-icons/gi";
import {FaMailBulk} from "react-icons/fa";

const Header = () => {
    return (
        <header className={'sticky min-h-[45px] w-full px-[20px] py-[10px] shadow-lg relative overflow-hidden z-10'}>
            <div className={'flex flex-row gap-5 justify-between items-center z-10 container mx-auto'}>
                <a href={'/'} className="logo flex flex-row items-center gap-[25px]">
                    <img src="/img/logo-femrich.png" className={'max-h-[75px]'} alt=""/>
                </a>
                <div className={'hidden md:block'}>
                    <nav>
                        <ul className={'flex flex-row gap-2 text-md uppercase font-medium'}>
                            <li className={'hover:text-white hover:bg-gradient-to-r hover:from-red-300 hover:to-red-600 px-[10px] hover:rounded-md hover:font-bold'}>
                                <Link href={'/catalog'}>Каталог</Link>
                            </li>
                            <li className={'hover:text-white hover:bg-gradient-to-r hover:from-red-300 hover:to-red-600 px-[10px] hover:rounded-md hover:font-bold'}>
                                <Link href={'/company'}>О Компании</Link>
                            </li>
                            <li className={'hover:text-white hover:bg-gradient-to-r hover:from-red-300 hover:to-red-600 px-[10px] hover:rounded-md hover:font-bold'}>
                                <Link href={'/usloviya'}>Условия сотрудничества</Link>
                            </li>
                            <li className={'hover:text-white hover:bg-gradient-to-r hover:from-red-300 hover:to-red-600 px-[10px] hover:rounded-md hover:font-bold'}>
                                <Link href={'/akcii'}>Акции</Link>
                            </li>
                            <li className={'hover:text-white hover:bg-gradient-to-r hover:from-red-300 hover:to-red-600 px-[10px] hover:rounded-md hover:font-bold'}>
                                <Link href={'/contacts'}>Контакты</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div>
                    <ul className={'text-sm flex flex-col gap-[3px]'}>
                        <li className={'flex flex-row gap-[5px] items-center'}><GiRotaryPhone/> +7 (495) 642-64-36
                        </li>
                        <li className={'flex flex-row gap-[5px] items-center'}><FaMailBulk/> info@lotos-tea.ru</li>
                    </ul>
                </div>
            </div>
        </header>
    );
};

export default Header;