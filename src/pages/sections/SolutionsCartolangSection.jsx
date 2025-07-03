import React from 'react';
import Typography from '@mui/material/Typography';
import { Link } from "react-router-dom";

import {
    macbook_mockup_cartlang,
    carteslangues_mockup_3,
    iphone_mockup_cartlang_1,
    iphone_mockup_cartlang_2,
    iphone_mockup_cartlang_3,
    iphone_mockup_cartlang_4,
    iphone_mockup_cartlang_5,
    iphone_mockup_cartlang_6,

} from '../../assets';

const SolutionsCartolangSection = () => {
    return (
        <>
            <section id="solutions_cartolang" className='min-h-screen max-container'>
                <div className='grid grid-cols-5 gap-3 text-zinc-700 bg-zinc-200 dark:bg-zinc-700 dark:text-white'>
                    <div className='col-span-1 lg:col-span-2 xl:col-span-1'>

                    </div>
                    <div className='col-span-4 lg:col-span-3 xl:col-span-4 my-9'>
                        <Typography className='font-articulat_cf font-semibold text-2xl sm:text-3xl lg:text-4xl xl:text-8xl text-left tracking-tight'>
                            Cartes &amp; Langues
                        </Typography>
                    </div>
                    <div className='col-span-5 lg:col-span-2 xl:col-span-1'>
                        <Link
                            to="#"
                            target="_blank">
                            <button className="mx-5 mb-3 py-2 px-4 font-semibold text-sm sm:text-base lg:text-xl rounded
                            bg-transparent text-milano-500 dark:text-white  
                            hover:bg-milano-500 hover:text-white 
                            border border-milano-500 hover:border-transparent 
                            ">
                                Visiter
                            </button>
                        </Link>
                        <Typography className='font-articulat_cf font-semibold text-xl mx-5 my-3'>
                            <div className='py-4'>
                                Cartes &amp; Langues est une application interactive et pédagogique, qui permet de faire la correspondance entre un pays et les langues qui y sont parlées.
                            </div>
                            <div className='py-4'>
                                La recherche peut se faire dans les deux sens, à partir d&apos;un pays ou d&apos;une langue. Une fois la région le pays ou la langue sélectionnée, un ensemble d&apos;informations utiles sont fournies sur le pays en question et la situation linguistique.
                            </div>
                            <div className='py-4'>
                                Cartes &amp; Langues peut être utilisée aussi bien pour un usage personnel que dans un cadre professionnel. Par exemple, elle permet d&apos;identifier l&apos;origine d&apos;une personne allophone et, à partir de cette information, connaître les langues qu&apos;elle est susceptible de parler.
                            </div>
                        </Typography>
                        <picture>
                            {/* image pour plus large que mobile */}
                            <source media="(min-width:1024px)" srcset={iphone_mockup_cartlang_5} />
                            <source media="(min-width:768px)" srcset={iphone_mockup_cartlang_5} />
                            {/* par defaut image pour mobile */}
                            <img src={iphone_mockup_cartlang_5} width="75%" className='object-cover' alt="iphone_mockup_cartlang_5" />
                        </picture>
                    </div>
                    <div className='relative col-span-5 lg:col-span-3 xl:col-span-4 text-center text-[white]'>
                        <picture>
                            {/* image pour plus large que mobile */}
                            <source media="(min-width:1024px)" srcset={macbook_mockup_cartlang} />
                            <source media="(min-width:768px)" srcset={macbook_mockup_cartlang} />
                            {/* par defaut image pour mobile */}
                            <img src={macbook_mockup_cartlang} width="100%" className='h-full object-cover' alt="macbook_mockup_cartlang" />
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
                            Cartes &amp; Langues
                        </Typography>
                    </div>
                    <div className='col-span-5 lg:col-span-2 xl:col-span-1'>
                        <Link
                            to="#"
                            target="_blank">
                            <button className="mx-5 mb-3 py-2 px-4 font-semibold text-sm sm:text-base lg:text-xl rounded
                            bg-transparent text-milano-500 dark:text-white  
                            hover:bg-milano-500 hover:text-white 
                            border border-milano-500 hover:border-transparent 
                            ">
                                Visiter
                            </button>
                        </Link>
                        <Typography className='font-articulat_cf font-semibold text-xl mx-5 my-3'>
                            <div className='py-4'>
                                Chaque pays dispose d&apos;informations utiles comme la situation économique et démographique.
                                Mais le principal intérêt est de donner des informations très complètes sur la situation linguistique, en particulier les langues qui sont parlées, ainsi que leur répartition géographique.
                            </div>
                            <div className='py-4'>
                                Chaque langue est affichée sous forme de carte qui livre plusieurs indicateurs statistiques, dont le volume (nombre de locuteurs) et la proportion (pourcentage par rapport à la population du pays concerné).
                            </div>
                            <div className='py-4'>
                                Pour langues qui ne sont ni officielles, ni véhiculaires (lingua-franca),
                                une mini-carte permet de visualiser les régions où une langue est parlée.
                                Dans certains cas, l&apos;usage de l&apos;anglais comme langue véhiculaire est également comptabilisé.
                            </div>

                        </Typography >

                        <Typography className='font-articulat_cf font-semibold text-xl mx-5 my-3'>
                            <picture className='content-center'>
                                {/* image pour plus large que mobile */}
                                <source media="(min-width:1024px)" srcset={iphone_mockup_cartlang_6} />
                                <source media="(min-width:768px)" srcset={iphone_mockup_cartlang_6} />
                                {/* par defaut image pour mobile */}
                                <img src={iphone_mockup_cartlang_6} width="75%" className='object-cover' alt="iphone_mockup_cartlang_6" />
                            </picture>
                            <div className='py-4'>
                                Pour certaines langues, un lexique de base est même proposé, avec la possibilité de faire des recherches vocales à partir du français et de restituer la traduction et l&apos;audio du texte choisi (bêta).
                            </div>
                        </Typography>

                    </div>
                    <div className='relative col-span-2 xl:col-span-1 text-center text-[white]'>
                        <picture>
                            {/* image pour plus large que mobile */}
                            <source media="(min-width:1024px)" srcset={iphone_mockup_cartlang_1} />
                            <source media="(min-width:768px)" srcset={iphone_mockup_cartlang_1} />
                            {/* par defaut image pour mobile */}
                            <img src={iphone_mockup_cartlang_1} width="75%" className='object-cover' alt="iphone_mockup_cartlang_1" />
                        </picture>
                    </div>
                    <div className='relative col-span-2 xl:col-span-1 text-center text-[white]'>
                        <picture>
                            {/* image pour plus large que mobile */}
                            <source media="(min-width:1024px)" srcset={iphone_mockup_cartlang_2} />
                            <source media="(min-width:768px)" srcset={iphone_mockup_cartlang_2} />
                            {/* par defaut image pour mobile */}
                            <img src={iphone_mockup_cartlang_2} width="75%" className='object-cover' alt="iphone_mockup_cartlang_2" />
                        </picture>
                    </div>
                    <div className='relative col-span-2 xl:col-span-1 text-center text-[white]'>
                        <picture>
                            {/* image pour plus large que mobile */}
                            <source media="(min-width:1024px)" srcset={iphone_mockup_cartlang_3} />
                            <source media="(min-width:768px)" srcset={iphone_mockup_cartlang_3} />
                            {/* par defaut image pour mobile */}
                            <img src={iphone_mockup_cartlang_3} width="75%" className='object-cover' alt="iphone_mockup_cartlang_3" />
                        </picture>
                    </div>
                    <div className='relative col-span-2 xl:col-span-1 text-center text-[white]'>
                        <picture>
                            {/* image pour plus large que mobile */}
                            <source media="(min-width:1024px)" srcset={iphone_mockup_cartlang_4} />
                            <source media="(min-width:768px)" srcset={iphone_mockup_cartlang_4} />
                            {/* par defaut image pour mobile */}
                            <img src={iphone_mockup_cartlang_4} width="75%" className='object-cover' alt="iphone_mockup_cartlang_4" />
                        </picture>
                    </div>
                </div>
            </section>
            <section id="solutions_cartolang_2" className='min-h-screen max-container'>
                <div className='grid grid-cols-5 gap-4 text-black dark:bg-zinc-800 dark:text-white'>
                    <div className='col-span-5 2xl:col-span-1'>
                        <Typography className='font-articulat_cf font-bold text-3xl mx-5 my-3'>
                            Disponibles sur PC, tablette et mobile, en plusieurs langues
                        </Typography>
                        <Typography className='font-articulat_cf font-semibold text-xl mx-5 my-3'>
                            Cartes &amp; langues est dans un stade expérimental. Seuls quelques pays ont leurs données mises à jour.
                            La mise à jour des données concernant les langues nécessite un travail minutieux et laborieux.
                            De nouvelles cartes seront mises à jour progressivement.
                        </Typography>
                        <Typography className='font-articulat_cf font-bold text-3xl mx-5 my-3'>
                            Liste des langues (non exhaustive)
                        </Typography>
                        <Typography className='font-articulat_cf font-semibold text-milano-500 dark:text-milano-200 text-xl mx-5 my-3'>
                            Albanais
                            Amharique
                            Arabe
                            Arménien
                            Azerbaïdjanais
                            Bengali
                            Bulgare
                            Danois
                            Dari
                            Néerlandais
                            Anglais
                            Estonien
                            Français
                            Géorgien
                            Allemand
                            Hindi
                            Hongrois
                            Italien
                            Kinyarwanda
                            Polonais
                            Portuguais
                            Farsi
                            Pachtou
                            Romani
                            Roumain
                            Somali
                            Espagnol
                            Suédois
                            Tigrinia
                            Turc
                            Ukrainien
                            Ourdou
                            Chinois
                            Macédonien
                            Baloutche
                            Grec
                            Dioula
                            Mazandérani
                            Turkmène
                            Bedja
                            Zaghawa
                            Sara
                            Kanembu
                            Masalit
                            Lezgi
                            Talysh
                            Afar
                            Saho
                            Mooré
                            Peul
                            Songhay
                            Tamasheq
                            Soninké
                            Malinké
                            Bambara
                            Tamasheq
                            Haoussa
                            Zarma
                            Maay-maay
                            Pendjabi
                            Sindhi
                            Banda
                            Gbaya
                            Sango
                            Moldave (Roumain)
                            Gagaouze
                            Soninké
                            Wolof
                            Baoulé
                            Bété
                            Zazaki
                            Dinka
                            Nuer
                            Kurde
                            Russe
                            Tatar
                            Tchétchène
                            Letton
                        </Typography>

                    </div>
                    <div className='col-span-5 2xl:col-span-4'>
                        <picture>
                            {/* image pour plus large que mobile */}
                            <source media="(min-width:1024px)" srcset={carteslangues_mockup_3} />
                            <source media="(min-width:768px)" srcset={carteslangues_mockup_3} />
                            {/* par defaut image pour mobile */}
                            <img src={carteslangues_mockup_3} width="100%" className='object-cover' alt="carteslangues_mockup_3" />
                        </picture>
                    </div>
                </div>
            </section>
        </>
    )
}

export default SolutionsCartolangSection