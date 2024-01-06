'use client'
import React, {useState} from 'react';
import axios from "axios";
// @ts-ignore
import InputMask from "react-input-mask";

import {useForm} from "react-hook-form";

const ModalWindow = ({prod}: any) => {
    const [modal, setModal] = useState(false)
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
                Обратная связь
            </button>
            {modal ? <div
                className={'fixed min-h-full min-w-full bg-black/75 top-0 left-0 z-50 flex items-center justify-center'}>
                <div className={'bg-white p-4'}>
                    <button onClick={CloseModal}>X</button>
                    <form onSubmit={handleSubmit((data) => sendDataToBack(data))}
                          className={'flex flex-col gap-5'}>
                        <div className="relative mb-3">
                            <input
                                type="text"
                                className="border-2 text-black peer block min-h-[auto] w-full rounded bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary"
                                {...register("imya", {
                                    required: true,
                                    maxLength: 80
                                })}
                                placeholder="Ваше имя"/>
                        </div>
                        <div className="relative mb-3">
                            <InputMask
                                mask={"+7 (999) 999-99-99"}
                                alwaysShowMask={false}
                                className="border-2 text-black peer block min-h-[auto] w-full rounded bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary"
                                type="tel" placeholder={'+7 (999) 999-99-99'} {...register("telefon", {
                                required: true,
                            })}/>
                        </div>
                        <input className={'hidden'} type="text" name={'prod'} value={prod}/>
                        <button>Отправить</button>
                    </form>
                </div>
            </div> : ''}
        </>
    );
};

export default ModalWindow;