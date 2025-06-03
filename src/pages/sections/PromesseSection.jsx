import React from 'react';
import Typography from '@mui/material/Typography';
import { promesse } from '../../assets';

const PromesseSection = () => {
    return (
        <>
            <section id="promesse" className='min-h-screen max-container'>
                <div className='relative text-center text-[white]'>
                    <picture>
                        {/* image pour plus large que mobile */}
                        <source media="(min-width:1024px)" srcset={promesse} />
                        <source media="(min-width:768px)" srcset={promesse} />
                        {/* par defaut image pour mobile */}
                        <img src={promesse} width="100%" className='h-full object-cover' />
                    </picture>
                    <div className='absolute -translate-x-2/4 -translate-y-2/4 left-2/4 top-2/4'>
                        <Typography className={`font-articulat_cf font-bold text-sm sm:text-3xl lg:text-5xl leading-none tracking-tight break-keep mb-3`}>
                            Vous aimeriez pouvoir communiquer aisément ?
                        </Typography>
                        <Typography className={`font-articulat_cf font-normal text-xs sm:text-xl lg:text-3xl leading-none tracking-tight break-keep`}>
                            Communiquer sans crainte d&apos;être mal compris, c'est possible !
                        </Typography>
                        <div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="promesse_suite" className='min-h-screen max-container'>
                <div className='grid grid-cols-5 gap-4 text-black dark:bg-zinc-800 dark:text-white'>
                    <div className='col-span-1 sm:col-span-2 m-8'>
                        <Typography className={`font-articulat_cf font-bold text-sm sm:text-3xl lg:text-5xl leading-none tracking-tight break-keep mb-3 `}>
                            Promesse
                        </Typography>
                    </div>
                    <div className='col-span-4 sm:col-span-3 m-8'>
                        <Typography className={`font-articulat_cf font-normal text-base sm:text-xl lg:text-3xl leading-none tracking-normal break-keep`}>
                            En tant que professionnel de santé, il vous arrive de rencontrer des problèmes de communication liés à la barrière de la langue ?
                        </Typography>
                    </div>
                    <div className='col-span-1 sm:col-span-2'>
                    </div>
                    <div className='col-span-4 sm:col-span-3 m-8'>
                        <Typography className={`font-articulat_cf font-normal text-base sm:text-md lg:text-2xl leading-none tracking-normal break-keep`}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam enim arcu, molestie non est sit amet, luctus tincidunt neque. Curabitur mi metus, pretium nec odio id, tincidunt sollicitudin massa. Quisque non condimentum mi, pretium egestas arcu. Proin mattis nibh sit amet arcu pulvinar, eu rhoncus metus pulvinar. Cras orci purus, accumsan nec sem non, sodales gravida urna. Nulla hendrerit urna ex, ac consectetur nibh malesuada eu. Maecenas congue nulla nisl, vitae mollis velit aliquam et. Maecenas laoreet laoreet dapibus. Praesent condimentum lectus vitae orci maximus, aliquam mattis elit lacinia. Praesent est nisi, fermentum et metus non, lacinia hendrerit purus. Nullam vitae dignissim diam, non laoreet justo. Aliquam porta lacus felis, at placerat purus ornare ut. Cras metus justo, ullamcorper et tristique ullamcorper, gravida et tellus. Vivamus rutrum varius lorem, quis maximus turpis consequat ut. Vestibulum in aliquam ipsum, nec lacinia diam. Duis vulputate nulla vel scelerisque sollicitudin.
                        </Typography>
                    </div>
                </div>
            </section>
        </>
    )
}

export default PromesseSection