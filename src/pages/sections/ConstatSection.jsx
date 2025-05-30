import React from 'react';
import Typography from '@mui/material/Typography';
import { constat } from '../../assets';

const ConstatSection = () => {
    return (
        <section id="constat" className='min-h-screen max-container'>
            <div className='relative text-center text-[white]'>
                <picture>
                    {/* image pour plus large que mobile */}
                    <source media="(min-width:1024px)" srcset={constat} />
                    <source media="(min-width:768px)" srcset={constat} />
                    {/* par defaut image pour mobile */}
                    <img src={constat} width="100%" className='h-full object-cover' />
                </picture>
                <div className='absolute -translate-x-2/4 -translate-y-2/4 left-2/4 top-2/4'>
                    <Typography className={`font-articulat_cf font-bold text-sm sm:text-3xl lg:text-5xl leading-none tracking-tight break-keep mb-3`}>
                        Constat
                    </Typography>
                    <Typography className={`font-articulat_cf font-normal text-xs sm:text-xl lg:text-3xl leading-none tracking-tight break-keep`}>
                        En tant que professionnel de santé, il vous arrive de rencontrer des problèmes de communication liés à la barrière de la langue ?
                    </Typography>
                    <div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ConstatSection