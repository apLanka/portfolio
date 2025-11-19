'use client'

import BgEffect from '@/public/image/bg/bg-effect.png'
import Image from "next/image";
import { BlurFade } from "@/components/ui/blur-fade";
import { AnimatedGridPattern } from "@/components/ui/animated-grid-pattern";
import { TypingAnimation } from "@/components/ui/typing-animation";

export default function LandingSection() {
    const handleViewWork = () => {
        const element = document.querySelector('#projects')
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
    }

    return (
        <div id="home" className={'relative flex items-center justify-center w-full h-screen overflow-hidden'}>
            {/* Animated Grid Background */}
            <div className={'absolute inset-0 z-10'}>
                <AnimatedGridPattern
                    width={40}
                    height={40}
                    numSquares={60}
                    maxOpacity={0.3}
                    duration={4}
                    className="text-white/10"
                />
            </div>

            {/* Background Effect */}
            <div className={'absolute inset-0 z-20'}>
                <Image 
                    src={BgEffect} 
                    alt={'effect'} 
                    fill
                    className={'opacity-50 object-cover object-center'}
                />
            </div>

            {/* Radial Gradient Overlay */}
            <div className={'absolute bg-black-radial w-full h-full z-30'}></div>

            {/* Background Text */}
            <div className={'absolute z-40'}>
                <BlurFade delay={0.2} duration={0.6} blur="8px">
                    <div className={'text-center font-extrabold text-[170px] leading-[170px] text-white-transparent'}>
                        FULL STACK <br/>DEVELOPER
                    </div>
                </BlurFade>
            </div>

            {/* Main Content */}
            <div className={'z-[60] relative'}>
                <BlurFade delay={0} duration={0.6} blur="8px" direction="up">
                    <div className={'text-2xl font-semibold'}>Hi, I&apos;m</div>
                </BlurFade>
                
                <BlurFade delay={0.1} duration={0.6} blur="8px" direction="up">
                    <div className={'text-8xl font-semibold bg-main-text-gradient bg-clip-text text-transparent'}>
                        Pasindu Lanka
                    </div>
                </BlurFade>
                
                <BlurFade delay={0.2} duration={0.6} blur="8px" direction="up">
                    <div className={'text-center mt-2 text-base text-white/25'}>
                        <TypingAnimation
                            words={[
                                "Passionate About Creating Exceptional User Experiences",
                                "Full Stack Developer Specializing in Web & Mobile",
                                "Building Scalable Solutions with Modern Technologies",
                            ]}
                            className="text-base text-white/25"
                            loop={true}
                            typeSpeed={50}
                            deleteSpeed={30}
                            pauseDelay={2000}
                        />
                    </div>
                </BlurFade>
                
                <BlurFade delay={0.3} duration={0.6} blur="8px" direction="up">
                    <div className={'flex justify-center mt-[25px]'}>
                        <button 
                            onClick={handleViewWork}
                            className={'h-[44px] bg-[#0D0D0D] border border-[#6B4D9E] px-6 rounded-[8px] hover:bg-[#6B4D9E]/10 transition-colors text-white'}
                        >
                            View My Work
                        </button>
                    </div>
                </BlurFade>
            </div>
        </div>
    )
}