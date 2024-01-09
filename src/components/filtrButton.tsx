import React, {useEffect, useState} from 'react';

const FiltrButton = ({cat, setFiltered, data}: any) => {
    const [search, setSearch] = useState('')
    useEffect(() => {
        // @ts-ignore
        const filteredList = data.filter(el =>
            el.cat[0]['name'].toLowerCase().includes(search)
        );
        setFiltered(filteredList);
    }, [search])

    return (
        <>
            <span className={'px-4 text-2xl mb-3 block'}>Выберите категорию:</span>
            <ul className={'px-4 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5'}>
                {cat.map((el: any) => {
                    return (
                        <li key={el.id}>
                            {/*//@ts-ignore*/}
                            <button value={el.name} onClick={(e) => setSearch(e.target.value.toLowerCase())}
                                    type={'button'}
                                    className={'text-xl bg-green-800 w-full h-full py-3 rounded text-green-50 hover:opacity-[0.9]'}>
                                {el.name}
                            </button>
                        </li>
                    )
                })}
                <li>
                    {/*//@ts-ignore*/}
                    <button value={''} onClick={(e) => setSearch(e.target.value.toLowerCase())}
                            type={'button'}
                            className={'text-xl bg-orange-500 w-full h-full py-3 rounded text-green-50 hover:opacity-[0.9]'}>
                        Показать все
                    </button>
                </li>
            </ul>
        </>
    );
};

export default FiltrButton;