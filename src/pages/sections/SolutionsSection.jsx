import React from 'react';
import Typography from '@mui/material/Typography';
import { Link } from "react-router-dom";

import {
    macbook_mockup_saynetes,
    iphone_mockup_saynete_101,
    iphone_mockup_saynete_102,
    iphone_mockup_saynete_103,
    iphone_mockup_saynete_104,
} from '../../assets';

const SolutionsSection = () => {
    return (
        <>
            <section id="solutions" className='min-h-screen max-container'>
                <div className='grid grid-cols-5 gap-3 text-zinc-700 bg-zinc-200 dark:bg-zinc-700 dark:text-white'>
                    <div className='col-span-1 lg:col-span-2 xl:col-span-1'>

                    </div>
                    <div className='col-span-4 lg:col-span-3 xl:col-span-4 my-9'>
                        <Typography className='font-articulat_cf font-semibold text-2xl sm:text-3xl lg:text-4xl xl:text-8xl text-left tracking-tight'>
                            Les Saynètes
                        </Typography>
                    </div>
                    <div className='col-span-5 lg:col-span-2 xl:col-span-1'>
                        <Link
                            to="https://saynetes.fr/"
                            target="_blank">
                            <button className="mx-5 mb-3 py-2 px-4 font-semibold text-sm sm:text-base lg:text-xl rounded
                            bg-transparent text-milano-500 dark:text-white  
                            hover:bg-milano-500 hover:text-white 
                            border border-milano-500 hover:border-transparent 
                            ">
                                Visiter
                            </button>
                        </Link>
                        <Typography className='font-articulat_cf text-xl mx-5 my-3'>
                            Les saynètes sont de petites histoires de la vie quotidienne mettant en scène des personnages fictifs. <br />
                            Ces histoires courtes à épisodes ont pour objectif de sensibiliser sur des thèmes comme le diabète, l'alimentation et la pratique d'exercices physiques.<br />
                        </Typography>
                        <Typography className='font-articulat_cf text-xl mx-5 my-3'>
                            Ce projet d’éducation thérapeutique multilingue, écrit en collaboration avec DAC44 et l'ASAMLA, est principalement destiné aux patients non francophones et à leur entourage.
                        </Typography>
                    </div>
                    <div className='relative col-span-5 lg:col-span-3 xl:col-span-4 text-center text-[white]'>
                        <picture>
                            {/* image pour plus large que mobile */}
                            <source media="(min-width:1024px)" srcset={macbook_mockup_saynetes} />
                            <source media="(min-width:768px)" srcset={macbook_mockup_saynetes} />
                            {/* par defaut image pour mobile */}
                            <img src={macbook_mockup_saynetes} width="100%" className='h-full object-cover' />
                        </picture>
                    </div>
                </div>

            </section>
            <section id="solutions_suite" className='min-h-screen max-container'>
                <div className='grid grid-cols-5 gap-4 text-black dark:bg-zinc-800 dark:text-white'>
                    <div className='col-span-1 lg:col-span-2 xl:col-span-1'>
                    </div>
                    <div className='col-span-4 lg:col-span-3 xl:col-span-4 my-9'>
                        <Typography className='font-articulat_cf font-semibold text-2xl sm:text-3xl lg:text-4xl xl:text-8xl text-left tracking-tight'>
                            Les Saynètes
                        </Typography>
                    </div>
                    <div className='col-span-5 lg:col-span-2 xl:col-span-1'>
                        <Link
                            to="https://saynetes.fr/"
                            target="_blank">
                            <button className="mx-5 mb-3 py-2 px-4 font-semibold text-sm sm:text-base lg:text-xl rounded
                            bg-transparent text-milano-500 dark:text-white  
                            hover:bg-milano-500 hover:text-white 
                            border border-milano-500 hover:border-transparent 
                            ">
                                Visiter
                            </button>
                        </Link>
                        <Typography className='font-articulat_cf text-xl mx-5 my-3'>
                            Les saynètes sont de petites histoires de la vie quotidienne mettant en scène des personnages fictifs. <br />
                            Ces histoires courtes à épisodes ont pour objectif de sensibiliser sur des thèmes comme le diabète, l'alimentation et la pratique d'exercices physiques.<br />
                        </Typography>
                        <Typography className='font-articulat_cf text-xl mx-5 my-3'>
                            Ce projet d’éducation thérapeutique multilingue, écrit en collaboration avec DAC44 et l'ASAMLA, est principalement destiné aux patients non francophones et à leur entourage.
                        </Typography>
                    </div>
                    <div className='relative col-span-1 text-center text-[white]'>
                        <picture>
                            {/* image pour plus large que mobile */}
                            <source media="(min-width:1024px)" srcset={iphone_mockup_saynete_101} />
                            <source media="(min-width:768px)" srcset={iphone_mockup_saynete_101} />
                            {/* par defaut image pour mobile */}
                            <img src={iphone_mockup_saynete_101} width="100%" className='h-full object-cover' />
                        </picture>
                    </div>
                    <div className='relative col-span-1 text-center text-[white]'>
                        <picture>
                            {/* image pour plus large que mobile */}
                            <source media="(min-width:1024px)" srcset={iphone_mockup_saynete_104} />
                            <source media="(min-width:768px)" srcset={iphone_mockup_saynete_104} />
                            {/* par defaut image pour mobile */}
                            <img src={iphone_mockup_saynete_104} width="100%" className='h-full object-cover' />
                        </picture>
                    </div>
                    <div className='relative col-span-1 text-center text-[white]'>
                        <picture>
                            {/* image pour plus large que mobile */}
                            <source media="(min-width:1024px)" srcset={iphone_mockup_saynete_102} />
                            <source media="(min-width:768px)" srcset={iphone_mockup_saynete_102} />
                            {/* par defaut image pour mobile */}
                            <img src={iphone_mockup_saynete_102} width="100%" className='h-full object-cover' />
                        </picture>
                    </div>
                    <div className='relative col-span-1 text-center text-[white]'>
                        <picture>
                            {/* image pour plus large que mobile */}
                            <source media="(min-width:1024px)" srcset={iphone_mockup_saynete_103} />
                            <source media="(min-width:768px)" srcset={iphone_mockup_saynete_103} />
                            {/* par defaut image pour mobile */}
                            <img src={iphone_mockup_saynete_103} width="100%" className='h-full object-cover' />
                        </picture>
                    </div>
                </div>
            </section>
        </>
    )
}

export default SolutionsSection