import React from 'react';
import {
    allophoneInRed,
} from '../../assets/index.js';
import Typography from '@mui/material/Typography';


const HeroSection = () => {
    return (
        <>
            <section id="hero" className='min-h-screen max-container'>
                <div className='relative text-center text-[white]'>
                    <img src={allophoneInRed} width="100%" className='h-full object-cover' />
                    <div className='absolute -translate-x-2/4 -translate-y-2/4 left-2/4 top-2/4'>
                        <Typography className={`font-articulat_cf font-bold text-lg lg:text-5xl leading-none tracking-tight break-keep mb-3`}>
                            Fabrique d&apos;outils numériques pour favoriser la compréhension linguistique.
                        </Typography>
                        <Typography className={`font-articulat_cf font-normal text-sm lg:text-3xl leading-none tracking-tight break-keep`}>
                            Pour contribuer à lever les barrières de la langue et les incompréhen-sions culturelles par la réalisation d&apos;outils numériques qui aident à la communication entre professionnels et non francophones.
                        </Typography>
                        <div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default HeroSection