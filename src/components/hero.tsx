import React from 'react';

const Hero = () => {
    return (
        <section
            className={`relative bg_hero bg-cover bg-center bg-no-repeat`}>
            <div
                className="absolute inset-0 bg-gradient-to-r from-[40%] from-white/95 via-white/70 to transparent"></div>

            <div
                className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-[50vh] lg:items-center lg:px-8">
                <div className="max-w-xl text-left">
                    <h1 className="text-3xl font-extrabold sm:text-5xl">
                        Чай оптом напрямую

                        <strong className="block font-extrabold text-red-600">
                            из Шри-Ланки
                        </strong>
                    </h1>

                    <p className="mt-4 max-w-lg sm:text-xl/relaxed">
                        В мире нет напитка, который был бы так популярен, и любим всеми и во все времена, как чай. И,
                        пожалуй, это не удивительно. Чай всегда к месту.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Hero;