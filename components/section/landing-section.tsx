'use client'

import BgGrid from '@/public/image/bg/bg-grid.png'
import BgEffect from '@/public/image/bg/bg-effect.png'
import Image from "next/image";

export default function LandingSection() {
    return (
        <div className={'relative flex items-center justify-center w-full h-screen'}>
            <div className={'z-[60]'}>
                <div className={'text-2xl font-semibold'}>Hi, I&apos;m</div>
                <div className={'text-8xl font-semibold bg-main-text-gradient bg-clip-text text-transparent'}>Pasindu
                    Lanka
                </div>
                <div className={'text-center mt-2 text-base text-white/25'}>Passionate About Creating Exceptional User
                    Experiences Across <span className={'text-[#6B4D9E]'}>Web</span> and <span
                        className={'text-[#6B4D9E]'}>Mobile</span>.
                </div>
                <div className={'flex justify-center mt-[25px]'}>
                    <button className={'h-[44px] bg-[#0D0D0D] border border-[#6B4D9E] px-6 rounded-[8px]'}>
                        View My Work
                    </button>
                </div>
            </div>
            <div className={'absolute z-40'}>
                <div className={'text-center font-extrabold text-[170px] leading-[170px] text-white-transparent'}>
                    FULL STACK <br/>DEVELOPER
                </div>
            </div>
            <div>
                <Image src={BgGrid} alt={'grid'} fill layout={'fill'} objectFit={'cover'} objectPosition={'center'}
                       className={'opacity-50 z-30'}/>
                <Image src={BgEffect} alt={'grid'} fill layout={'fill'} objectFit={'cover'} objectPosition={'center'}
                       className={'opacity-50 z-50'}/>
            </div>
            <div className={'absolute bg-black-radial w-full h-full z-50'}></div>
        </div>
    )
}