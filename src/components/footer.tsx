import React from 'react';
import Link from "next/link";

const Footer = () => {
    return (
        <footer className="bg-white">
            <hr/>
            <div className="mx-auto px-4 pb-6 pt-16 sm:px-6 lg:px-8 lg:pt-24">
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
                    <div>
                        <div className="flex justify-center text-teal-600 sm:justify-start">
                            <Link href={'/'} className="logo flex flex-row items-center gap-[25px]">
                                <img src="/img/logo-femrich.png" className={'max-h-[75px]'} alt=""/>
                            </Link>
                        </div>

                        <p className="mt-6 max-w-md text-center leading-relaxed text-gray-500 sm:max-w-xs sm:text-left">
                            Чайная компания «Лотос» занимается оптовой торговлей чаем с плантаций, где выращивают
                            элитный чай оптом.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:col-span-2">
                        <div className="text-center sm:text-left">
                            <p className="text-lg font-medium text-gray-900">Навигация</p>

                            <ul className="mt-8 space-y-4 text-sm">
                                <li>
                                    <Link className="text-gray-700 transition hover:text-gray-700/75"
                                          href="/akcii">
                                        Акции
                                    </Link>
                                </li>

                                <li>
                                    <Link className="text-gray-700 transition hover:text-gray-700/75"
                                          href="/catalog">
                                        Каталог
                                    </Link>
                                </li>

                                <li>
                                    <Link className="text-gray-700 transition hover:text-gray-700/75"
                                          href="/stati">
                                        Статьи
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        <div className="text-center sm:text-left">
                            <p className="text-lg font-medium text-gray-900">О нас</p>

                            <ul className="mt-8 space-y-4 text-sm">
                                <li>
                                    <Link className="text-gray-700 transition hover:text-gray-700/75"
                                          href="/company">
                                        О компании
                                    </Link>
                                </li>

                                <li>
                                    <Link className="text-gray-700 transition hover:text-gray-700/75"
                                          href="/contacts">
                                        Контакты
                                    </Link>
                                </li>

                                <li>
                                    <Link className="text-gray-700 transition hover:text-gray-700/75"
                                          href="/usloviya">
                                        Условия сотрудничества
                                    </Link>
                                </li>

                            </ul>
                        </div>

                        <div className="text-center sm:text-left">
                            <p className="text-lg font-medium text-gray-900">Контакты</p>

                            <ul className="mt-8 space-y-4 text-sm">
                                <li>
                                    <a className="flex items-center justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end"
                                       href="/">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-5 w-5 shrink-0 text-gray-900"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                            />
                                        </svg>

                                        <span className="flex-1 text-gray-700">info@lotos-tea.ru</span>
                                    </a>
                                </li>

                                <li>
                                    <a className="flex items-center justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end"
                                       href="/">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-5 w-5 shrink-0 text-gray-900"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                            />
                                        </svg>

                                        <span className="flex-1 text-gray-700">+7 (495) 642-64-36</span>
                                    </a>
                                </li>

                                <li className="flex items-start justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5 shrink-0 text-gray-900"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                        />
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                        />
                                    </svg>

                                    <address className="-mt-0.5 flex-1 not-italic text-gray-700">
                                        Москва, Ярославское ш., 2В
                                    </address>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="mt-12 border-t border-gray-100 pt-6">
                    <div className="text-center sm:flex sm:justify-between sm:text-left">
                        <p className="text-sm text-gray-500">
                            <span className="block sm:inline">All rights reserved.</span>

                            <Link className="inline-block text-teal-600 underline transition hover:text-teal-600/75"
                               href="/privacy">
                                Политика конфиденциальности
                            </Link>

                            <span> и </span>

                            <a className="inline-block text-teal-600 underline transition hover:text-teal-600/75"
                               href="/">
                                Cookie
                            </a>
                        </p>

                        <p className="mt-4 text-sm text-gray-500 sm:order-first sm:mt-0">
                            &copy; 2023 ООО &quot;ЛОТОС&quot;
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;