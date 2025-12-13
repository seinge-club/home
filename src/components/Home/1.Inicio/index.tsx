'use client'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import DemoComponent from '../Demo/DemoComponent'
import RegistrationForm from './RegistrationForm'
import CardSlider from '../6.Testimonios/slider'
import { useEffect, useRef, useState, useCallback } from 'react'
import { Icon } from '@iconify/react/dist/iconify.js'

const Hero = () => {
  const [isDemoOpen, setIsDemoOpen] = useState(false)
  const [isRegisterOpen, setIsRegisterOpen] = useState(false)
  const DemoRef = useRef<HTMLDivElement>(null)
  const RegisterRef = useRef<HTMLDivElement>(null)

  const handleClickOutside = useCallback(
    (event: MouseEvent) => {
      if (DemoRef.current && !DemoRef.current.contains(event.target as Node)) {
        setIsDemoOpen(false)
      }
      if (RegisterRef.current && !RegisterRef.current.contains(event.target as Node)) {
        setIsRegisterOpen(false)
      }
    },
    [DemoRef, RegisterRef]
  )

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [handleClickOutside])

  useEffect(() => {
    document.body.style.overflow = isDemoOpen || isRegisterOpen ? 'hidden' : ''
  }, [isDemoOpen, isRegisterOpen])

  const leftAnimation = {
    initial: { x: '-100%', opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: '-100%', opacity: 0 },
    transition: { duration: 0.6 },
  }

  const rightAnimation = {
    initial: { x: '100%', opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: '100%', opacity: 0 },
    transition: { duration: 0.6 },
  }

  return (
    <section
      className='relative md:pt-40 md:pb-28 py-20 overflow-hidden z-1 min-h-screen flex items-center'
      id='Inicio'>
      <div className='container px-4 mx-auto'>
        <div className='flex flex-col'>
          <motion.div {...leftAnimation} className='w-full'>
            {/* <div className='flex gap-6 items-center lg:justify-start justify-center mb-5 mt-24'>
              <Image
                src='/images/icons/icon-bag.svg'
                alt='icon'
                width={40}
                height={40}
              />
            </div> */}
            <h1 className='text-5xl md:text-7xl font-bold text-center text-white mb-18 leading-tight drop-shadow-lg'>
              Welcome to <span className='text-primary'>Sainge Club</span>.<br />
              <span className='text-3xl md:text-5xl font-medium mt-4 block text-white/90'>Leisure activities outside in English.</span>
            </h1>
            <div className='flex gap-8 mb-18 items-center lg:justify-start justify-center mb-5 mt-12 px-4'>
              <p className='text-white sm:text-24 text-18 mb-0 text-center mx-auto max-w-4xl leading-relaxed'>
                <span className='text-primary font-bold block mb-2'>What if the problem isn’t English… but how you use it?</span>
                English is not complicated, we think the hardest part is using it to connect with people, places, new jobs and even better salaries.
              </p>
            </div>
            <div className='flex flex-col sm:flex-row gap-6 justify-center items-center mt-8'>
              <button
                className='bg-primary border border-primary rounded-full text-21 font-bold text-darkmode py-3 px-10 z-50 hover:scale-105 transition-transform shadow-lg shadow-primary/20'
                onClick={() => setIsDemoOpen(true)}>
                Free DEMO
              </button>
              <button
                className='bg-white/5 backdrop-blur-sm border border-white/20 rounded-full text-21 font-medium hover:bg-white/10 hover:border-primary/50 hover:text-white text-white/90 py-3 px-10 transition-all'
                onClick={() => setIsRegisterOpen(true)}>
                Empezar Experiencia
              </button>
            </div>
            {/* <div className='flex items-center md:justify-start justify-center gap-12 mt-20'>
              <Link href='#' className='hover:scale-110 duration-300'>
                <Image
                  src='/images/hero/playstore.png'
                  alt='Play Store'
                  width={240}
                  height={70}
                />
              </Link>
              <Link href='#' className='hover:scale-110 duration-300'>
                <Image
                  src='/images/hero/applestore.png'
                  alt='App Store'
                  width={240}
                  height={70}
                />
              </Link>
            </div> */}
          </motion.div>
          {/* <motion.div
            {...rightAnimation}
            className='col-span-7 lg:block hidden'>
            <div className='ml-20 -mr-64'>
              <Image
                src='/images/hero/banner-image.png'
                alt='Banner'
                width={1150}
                height={1150}
              />
            </div>
          </motion.div> */}
        </div>
        {/* <CardSlider /> */}
      </div>
      <div className='absolute w-50 h-50 bg-linear-to-bl from-tealGreen from-50% to-charcoalGray to-60% blur-400 rounded-full -top-64 -right-14 -z-1'></div>

      {/* Demo Modal */}
      {isDemoOpen && (
        <div className='fixed top-0 left-0 w-full h-full bg-black/50 flex items-center justify-center z-50 backdrop-blur-sm p-4'>
          <div
            ref={DemoRef}
            className='relative w-full max-w-lg overflow-hidden rounded-2xl px-8 pt-14 pb-8 z-999 text-center bg-dark_grey border border-white/10 shadow-2xl'>
            <button
              onClick={() => setIsDemoOpen(false)}
              className='absolute top-4 right-4 p-2 rounded-full hover:bg-white/10 transition-colors'
              aria-label='Close Demo Modal'>
              <Icon
                icon='tabler:x'
                className='text-white hover:text-primary text-24'
              />
            </button>
            <DemoComponent />
          </div>
        </div>
      )}

      {/* Registration Modal */}
      {isRegisterOpen && (
        <div className='fixed top-0 left-0 w-full h-full bg-black/50 flex items-center justify-center z-50 backdrop-blur-sm p-4'>
          <div
            ref={RegisterRef}
            className='relative w-full max-w-lg overflow-hidden rounded-2xl px-8 pt-14 pb-8 z-999 text-center bg-dark_grey border border-white/10 shadow-2xl'>
            <button
              onClick={() => setIsRegisterOpen(false)}
              className='absolute top-4 right-4 p-2 rounded-full hover:bg-white/10 transition-colors'
              aria-label='Close Registration Modal'>
              <Icon
                icon='tabler:x'
                className='text-white hover:text-primary text-24'
              />
            </button>
            <RegistrationForm />
          </div>
        </div>
      )}
    </section>
  )
}

export default Hero
