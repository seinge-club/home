'use client'
import Image from 'next/image'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const Work = () => {
  const ref = useRef(null)
  const inView = useInView(ref)

  const TopAnimation = {
    initial: { y: '-100%', opacity: 0 },
    animate: inView ? { y: 0, opacity: 1 } : { y: '-100%', opacity: 0 },
    transition: { duration: 0.6, delay: 0.4 },
  }

  const bottomAnimation = {
    initial: { y: '100%', opacity: 0 },
    animate: inView ? { y: 0, opacity: 1 } : { y: '100%', opacity: 0 },
    transition: { duration: 0.6, delay: 0.4 },
  }
  return (
    // <section className='md:pt-28' id='work'>
    <section className='md:pt-28' >
      <div className='container px-4 mx-auto lg:max-w-(--breakpoint-xl) px-4'>
        <div ref={ref} className='grid grid-cols-12 items-center'>
          <motion.div {...TopAnimation} className='lg:col-span-4 col-span-12'>
            <div className='2xl:-mr-20 mt-9 flex justify-center'>
              <Image
                src='/images/work/img-work-with-us.png'
                alt='image'
                width={600}
                height={425}
                className='lg:w-full'
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Work
