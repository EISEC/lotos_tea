'use client'
import {hasCookie, getCookie} from 'cookies-next';
import React, {useEffect, useState} from 'react';
import Link from "next/link";
import Cucks from "@/components/cucks";

const Cookie = () => {
    const kukuruza = hasCookie('politic')
    const soglasen = <Link href={'/privacy'} className={'text-green-500'}>соглашение</Link>
    const [cook, setCook] = useState(kukuruza)
    useEffect(() => {
        if (cook) {
            setCook(false)
        }
    }, [kukuruza])
    return !cook ? <Cucks soglasen={soglasen}/> : null
};

export default Cookie;