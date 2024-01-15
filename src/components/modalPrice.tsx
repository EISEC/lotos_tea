'use client'
import React, {useState} from 'react';
import axios from "axios";
// @ts-ignore
import InputMask from "react-input-mask";

import {useForm} from "react-hook-form";

const ModalPrice = () => {
    const [modal, setModal] = useState(false)
    const [sucess, setSucess] = useState(false)
    const {register, handleSubmit, reset, formState: {errors}, control} = useForm();
    const OpenModal = () => {
        setModal(true)
    }

    const CloseModal = () => {
        setModal(false)
    }
    const sendDataToBack = (data: any) => {
        const editData = {...data}
        const ACTION_POST = '/post.php'

        axios.post(ACTION_POST, JSON.parse(JSON.stringify(editData)), {
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json'
            }
        })
            .then(function (response) {
                reset()
                setSucess(true)
            })
            .catch(function (error) {
                console.log('New ERROR')
            });
    }
    return (
        <>
            <button
                onClick={OpenModal}
                className={'px-3 py-1 my-3 bg-gradient-to-r from-green-700 to-green-600 text-xl text-white rounded-md shadow-md'}>
                Запросить прайс
            </button>
            {modal ? <div
                className={'fixed min-h-full min-w-full bg-black/75 top-0 left-0 z-50 flex items-center justify-center'}>
                <div className={'bg-white p-4 relative'}>
                    <button className={'absolute top-2 right-4'} onClick={CloseModal}>X</button>
                    {!sucess ? <form onSubmit={handleSubmit((data) => sendDataToBack(data))}
                                     className={'flex flex-col gap-5 w-[250px] mt-[30px]'}>
                        <p>Оставьте ваши контактные данные в форме ниже.</p>
                        <div className="relative">
                            <input
                                type="text"
                                className="border-2 text-black peer block min-h-[auto] w-full rounded bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary"
                                {...register("imya", {
                                    required: true,
                                    maxLength: 80
                                })}
                                placeholder="Ваше имя"/>
                        </div>
                        <div className="relative">
                            <InputMask
                                mask={"+7 (999) 999-99-99"}
                                alwaysShowMask={false}
                                className="border-2 text-black peer block min-h-[auto] w-full rounded bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary"
                                type="tel" placeholder={'+7 (999) 999-99-99'} {...register("telefon", {
                                required: true,
                            })}/>
                        </div>
                        <div className="relative">
                            <input type="email"
                                   className="border-2 text-black peer block min-h-[auto] w-full rounded bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary"

                                   {...register("mail", {
                                       required: true,
                                   })} placeholder={'info@pochta.ru'}/>
                        </div>
                        <button className={'text-white bg-green-500 py-2'}>Отправить</button>
                    </form> : <div>
                        <h3>Спасибо за обращение!</h3>
                        <p>Мы скоро свяжемся с Вами!</p>
                    </div>}
                </div>
            </div> : ''}
        </>
    );
};

export default ModalPrice;