import Logo from '@/public/image/logo/logo.svg'
import Image from "next/image";

export const NavBar = () => {
    return (
        <div className={'fixed flex w-full items-center justify-between pt-[40px] px-[100px] z-[100]'}>
            <div>
                <Image draggable={false} src={Logo} alt={'logo'} width={30} height={45}/>
            </div>
            <div className={'flex gap-10'}>
                <div className={'text-white font-normal text-sm cursor-pointer'}>Home</div>
                <div className={'text-white font-normal text-sm cursor-pointer'}>About Me</div>
                <div className={'text-white font-normal text-sm cursor-pointer'}>Skill</div>
                <div className={'text-white font-normal text-sm cursor-pointer'}>Portfolio</div>
            </div>
            <button className={'h-11 px-6 rounded-[8px] border border-[#121212] font-normal text-sm bg-white/5'}>
                Contact Me
            </button>
        </div>
    )
}