'use client'
import Image from 'next/image'
import { timelineData } from '@/app/api/data'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const prefix = process.env.NODE_ENV === 'production' ? '/home' : '';

const TimeLine = () => {
  const ref = useRef(null)
  const inView = useInView(ref)

  const TopAnimation = {
    initial: { y: '-100%', opacity: 0 },
    animate: inView ? { y: 0, opacity: 1 } : { y: '-100%', opacity: 0 },
    transition: { duration: 0.6, delay: 0.4 },
  }

  const services = [
    {
      icon: `${prefix}/images/icons/icon-consulting.svg`,
      text: 'Clases dinámicas online',
    },
    {
      icon: `${prefix}/images/icons/icon-blockchain.svg`,
      text: 'Clubes de conversación y acompañamiento en Discord',
    },
    {
      icon: `${prefix}/images/icons/icon-Services.svg`,
      text: 'Retos con voz, juegos, creatividad',
    },
    {
      icon: `${prefix}/images/icons/icon-blockchain.svg`,
      text: 'Estructura desbloqueable por niveles',
    },
  ]

  return (
    <section className='relative' id='SaingeClub'>
      <div className="relative w-full min-h-[60vh] md:min-h-[50vh] overflow-hidden flex items-center">
        <div className="absolute inset-0 z-0 w-full h-full">
          <Image
            src={`${prefix}/images/work/background1.png`}
            alt="Background Sainge Club"
            fill
            className="object-cover object-[center_top]"
            quality={100}
            priority
            sizes="100vw"          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
        </div>

        <div className='container relative z-10 h-full flex items-center py-16'>
          <div className='lg:w-1/2 w-full px-4'>
            <motion.div
              whileInView={{ y: 0, opacity: 1 }}
              initial={{ y: '-100%', opacity: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className='sm:text-40 text-30 text-secondary font-medium mb-8'>
                {/* ¿Qué es Sainge Club? */}
                What is <span className='text-[#3F0904] italic'>Sainge Club</span>? 
              </h2>

              <p className="text-lg md:text-xl text-secondary leading-relaxed justify mb-6">
                Sainge Club <span className="text-[#3F0904] font-medium">is a language club focused on</span> conversation and social interaction,<span className="text-[#3F0904] font-medium"> with both </span>
                native and local speakers, <span className="text-[#3F0904] font-medium">to help you </span> overcome your fear of speaking, break stereotypes, <span className="text-[#3F0904] font-medium">and use English in an authentic
                </span> and meaningful way.
              </p>
                        
              <p className="text-lg md:text-xl text-secondary leading-relaxed justify">
                This isn’t about just studying English. It’s about <span className="text-[#3F0904] font-medium">putting in practice the language </span>
                feeling free to express yourself, make mistakes, and learn naturally, surrounded by people who motivate and challenge you.
              </p>
              <br></br>
                      
              <p className="text-lg md:text-xl text-secondary leading-relaxed justify">
                <span className="text-[#3F0904] font-medium">You will learn the language while socializing and doing your favorite activities like skating,
                  practicing yoga, shopping, or hunting for the best food in town, all alongside native and local speakers. 
                  And you know what is even better? You could end up studying completely for free, because we reward your discipline and determination.</span>
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      <div className='container lg:px-16 px-4 pt-8'>
        <div className='text-justify'>
          <motion.div
            whileInView={{ scale: 1, opacity: 1 }}
            initial={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.6 }}
          >
              <h2 className='text-5xl md:text-7xl font-bold text-center text-white mb-2 leading-tight'>
                {/* ¿Qué es Sainge Club? */}
                What makes <span className='text-primary'>us different</span>? 
              </h2>
            <div className='md:block hidden relative'>
              <div>
                <Image
                  src={`${prefix}/images/timeline/img-timeline.png`}
                  alt='image'
                  width={1220}
                  height={1000}
                  className='w-80% mx-auto'
                />
              </div>

              <div className='absolute lg:top-40 top-36 lg:left-0 -left-20 w-72 flex items-center gap-6'>
                <div className='text-right'>
                  <p className='text-18 text-muted/60'>
                    Clases dinámicas online
                  </p>
                </div>
                <div className='bg-light_grey/45 backdrop-blur-xs p-4 h-20 w-20 rounded-full flex items-center justify-center'>
                  <Image
                    src={`${prefix}/images/timeline/icon-planning.svg`}
                    alt='Planning'
                    width={44}
                    height={44}
                    className='w-12 h-12'
                  />
                </div>
              </div>

              <div className='absolute lg:top-40 top-36 lg:right-0 -right-20 w-72 flex items-center gap-6'>
                <div className='bg-light_grey/45 backdrop-blur-xs p-4 h-20 w-20 rounded-full flex items-center justify-center'>
                  <Image
                    src={`${prefix}/images/timeline/icon-refinement.svg`}
                    alt='Refinement'
                    width={44}
                    height={44}
                    className='w-12 h-12'
                  />
                </div>
                <div className='text-left'>
                  <p className='text-18 text-muted/60'>
                    Retos con voz, juegos, creatividad
                  </p>
                </div>
              </div>

              <div className='absolute lg:bottom-48 bottom-36 lg:left-0 -left-20 w-72 flex items-center gap-6'>
                <div className='text-right'>
                  <p className='text-18 text-muted/60'>
                    Clubes de conversación y acompañamiento
                  </p>
                </div>
                <div className='bg-light_grey/45 backdrop-blur-xs p-4 h-20 w-20 rounded-full flex items-center justify-center'>
                  <Image
                    src={`${prefix}/images/timeline/icon-prototype.svg`}
                    alt='Prototype'
                    width={44}
                    height={44}
                    className='w-12 h-12'
                  />
                </div>
              </div>

              <div className='absolute lg:bottom-48 bottom-36 lg:right-0 -right-20 w-72 flex items-center gap-6'>
                <div className='bg-light_grey/45 backdrop-blur-xs p-4 h-20 w-20 rounded-full flex items-center justify-center'>
                  <Image
                    src={`${prefix}/images/timeline/icon-support.svg`}
                    alt='Scale and support'
                    width={44}
                    height={44}
                    className='w-12 h-12'
                  />
                </div>
                <div className='text-left'>
                  <p className='text-18 text-muted/60'>
                    Estructura desbloqueable por niveles
                  </p>
                </div>
              </div>
            </div>

            <div className='grid sm:grid-cols-2 gap-8 md:hidden'>
              {timelineData.map((item, index) => (
                <div key={index} className='flex items-center gap-6'>
                  <div className='bg-light_grey/45 p-6 rounded-full'>
                    <Image
                      src={`${prefix}${item.icon}`}
                      alt={item.title}
                      width={44}
                      height={44}
                    />
                  </div>
                  <div className='text-start'>
                    <h4 className='text-28 text-muted mb-2'>{item.title}</h4>
                    <p className='text-muted/60 text-18'>{item.text}</p>
                  </div>
                </div>
              ))}
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default TimeLine
