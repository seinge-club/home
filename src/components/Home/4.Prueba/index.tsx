'use client'
import Image from 'next/image'
import { portfolioData } from '@/app/api/data'
import { motion } from 'framer-motion'

import { useRef } from 'react'
import { useInView } from 'framer-motion'

const Portfolio = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const prefix = process.env.NODE_ENV === 'production' ? '/home' : '';

  return (
    <section className='md:pt-16 sm:pt-28 pt-12' id='Prueba'>
      <div className='container px-4 sm:px-6'>
        <div className='grid lg:grid-cols-2 items-center gap-20' ref={ref}>
          <motion.div
            animate={isInView ? { y: 0, opacity: 1 } : { y: -100, opacity: 0 }}
            transition={{ duration: 0.6 }}
            className='lg:-ml-32'
          >
            <Image
              src={`${prefix}/images/portfolio/img-portfolio.png`}
              alt='Crypto Portfolio'
              width={700}
              height={600}
            />
          </motion.div>

          <motion.div
            animate={isInView ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className='sm:text-28 text-18 text-muted mb-4'>
              Desbloquea <span className='text-secondary'>tu voz: </span> ¡Demo <span className='text-primary'></span>gratis!
            </p>
            <h2 className='text-white sm:text-40 text-30 mb-4 font-medium'>
              ¿Te gustó esta demo? 🎁 
              {/* <span className='text-primary'>Go</span>! */}
            </h2>
            <p className='text-muted/60 text-18'>
              Accede a las primeras 2 sesiones completas GRATIS
              y desbloquea tu voz en inglés. Sumérgete en nuestra metodología única y siente la diferencia desde el primer momento.
              <br /><br />
              ¡No hay nada que perder y todo un mundo que ganar!
            </p>
            <br /><br />

            <table className='w-full sm:w-[80%]'>
              <tbody>
                {portfolioData.map((item, index) => (
                  <tr key={index} className='border-b border-dark_border/10'>
                    <td className='py-5'>
                      <div className='bg-primary/20 p-4 rounded-full w-fit'>
                        <Image
                          src={item.image}
                          alt={item.title}
                          width={35}
                          height={35}
                        />
                      </div>
                    </td>
                    <td className='py-5'>
                      <h4 className='text-muted sm:text-28 text-22 ml-5'>
                        {item.title}
                      </h4>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Portfolio