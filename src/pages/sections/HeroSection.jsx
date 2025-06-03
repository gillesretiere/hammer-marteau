import React from 'react';
import {
    allophoneInRed,
    allophoneInRedTablet,
    allophoneInRedMobile,
    section_1_Mobile_Portrait,
    section_1_Tablet_Portrait,
    section_1,
    logo_square_red,
} from '../../assets/index.js';
import Typography from '@mui/material/Typography';
import { FiMail, FiPhone, } from 'react-icons/fi'



const HeroSection = () => {
    return (
        <>
            <section id="hero" className='min-h-screen max-container'>
                <div className='relative text-center text-[white]'>
                    <picture>
                        {/* image pour plus large que mobile */}
                        <source media="(min-width:1024px)" srcset={section_1} />
                        <source media="(min-width:768px)" srcset={section_1_Tablet_Portrait} />
                        {/* par defaut image pour mobile */}
                        <img src={section_1_Mobile_Portrait} width="100%" className='h-full object-cover' />
                    </picture>
                    <div className='absolute -translate-x-2/4 -translate-y-2/4 left-2/4 top-[20%] lg:top-2/4'>
                        <Typography className={`font-articulat_cf font-bold text-3xl sm:text-4xl lg:text-5xl leading-none tracking-tight mb-3 text-start lg:text-center`}>
                            Outils numériques pour faciliter la compréhension linguistique.
                        </Typography>
                        <Typography className={`hidden md:block font-articulat_cf font-normal text-xl sm:text-2xl lg:text-3xl leading-none tracking-tight break-keep text-start lg:text-center`}>
                            Contre les barrières de la langue et les incompréhensions culturelles.
                        </Typography>
                        <div>
                        </div>
                    </div>
                </div>
            </section>
            {/* second section only for mobile */}
            <section id="apropos" className='min-h-screen max-container lg:max-w-[50%]'>
                <div className='grid grid-cols-5 gap-4 text-black dark:bg-zinc-800 dark:text-white'>
                    <div className='col-span-1 sm:col-span-2 m-8'>
                        <Typography className={`font-articulat_cf font-bold text-sm sm:text-3xl lg:text-5xl leading-none tracking-tight break-keep mb-3 `}>
                            A propos
                        </Typography>
                    </div>
                    <div className='col-span-4 sm:col-span-3 m-8'>
                        <Typography className={`font-articulat_cf font-bold text-2xl leading-none tracking-normal break-keep`}>
                            Hammer &amp; Marteau développe des outils numériques pour faciliter la compréhension linguistique.
                        </Typography>
                    </div>
                    <div className='col-span-1 sm:col-span-2'>
                    </div>
                    <div className='col-span-4 sm:col-span-3 m-8'>
                        <Typography className={`font-articulat_cf font-normal text-xl leading-none tracking-normal break-keep`}>
                            Notre objectif est de lutter contre les barrières de la langue et les incompréhensions culturelles, particulièrement dans le domaine médical et social.
                        </Typography>
                    </div>
                    <div className='col-span-1 sm:col-span-2'>
                    </div>
                    <div className='col-span-4 sm:col-span-3 m-8'>
                        <Typography className={`font-articulat_cf font-normal text-xl leading-none tracking-normal break-keep`}>
                            Ces outils sont développés en collaboration avec des professionnels de santé et des interprètes expérimentés.
                        </Typography>
                    </div>
                    <div className='col-span-1 sm:col-span-2 m-8'>
                        <Typography className={`font-articulat_cf font-bold text-sm sm:text-3xl lg:text-5xl leading-none tracking-tight break-keep mb-3 `}>
                            Contact
                        </Typography>
                    </div>
                    <div className='col-span-4 sm:col-span-3 m-8'>
                        <div className='relative rounded-2xl bg-background-secondary shadow-lg text-left px-10 py-10'>
                            <img src={logo_square_red} className='w-[20%] mb-7'/>

                            <div className='flex items-center gap-2'><FiMail /><a className='text-sky-500 hover:text-sky-700 text-xs' href="mailto:contact@hammer-marteau.com">contact@hammer-marteau.com</a></div>
                            <div className='flex items-center gap-2'><FiPhone /><span className='relative'>06 30 30 13 64</span></div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default HeroSection