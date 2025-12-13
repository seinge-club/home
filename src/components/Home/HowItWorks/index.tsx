'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'

import { getAssetPath } from '@/utils/getPath'

const HowItWorks = () => {
    return (
        <section className='py-24 relative overflow-hidden bg-dark_grey/30' id='HowItWorks'>
            <div className='container px-4 mx-auto'>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-16 items-center'>

                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className='text-4xl md:text-5xl font-bold text-white mb-6'>
                            The <span className='text-primary'>Natural Cycle</span>
                        </h2>
                        <p className='text-lg text-muted/90 mb-8 leading-relaxed'>
                            Just like you learned your first language. No grammar tables, no forced memorization.
                        </p>

                        <ul className='space-y-6'>
                            {[
                                { title: 'Listen', desc: 'Absorb real conversations and natural patterns.' },
                                { title: 'Speak', desc: 'Practice without fear in a safe, guided environment.' },
                                { title: 'Confidence', desc: 'Internalize the language until it feels like yours.' }
                            ].map((item, i) => (
                                <li key={i} className='flex items-start gap-4'>
                                    <div className='w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold shrink-0'>
                                        {i + 1}
                                    </div>
                                    <div>
                                        <h3 className='text-xl font-semibold text-white mb-1'>{item.title}</h3>
                                        <p className='text-muted/80'>{item.desc}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Abstract Infographic */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className='relative'
                    >
                        <div className="relative w-full aspect-square max-w-[500px] mx-auto">
                            <Image
                                src={getAssetPath('/images/new-design/methodology-cycle.png')}
                                alt='Natural Learning Cycle Infographic'
                                fill
                                className='object-contain drop-shadow-2xl'
                            />
                        </div>
                        {/* Backdrop Glow */}
                        <div className="absolute inset-0 bg-primary/10 blur-3xl -z-10 rounded-full" />
                    </motion.div>

                </div>
            </div>
        </section>
    )
}

export default HowItWorks
