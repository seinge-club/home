'use client'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import BuyCrypto from './buy-form'
import SellCrypto from './sell-form'
import CardSlider from '../6.Testimonios/slider'
import { useEffect, useRef, useState, useCallback } from 'react'
import { Icon } from '@iconify/react/dist/iconify.js'

const Hero = () => {
  const [isBuying, setIsBuyingOpen] = useState(false)
  const [isSelling, setIsSellingOpen] = useState(false)
  const BuyRef = useRef<HTMLDivElement>(null)
  const SellRef = useRef<HTMLDivElement>(null)

  const handleClickOutside = useCallback(
    (event: MouseEvent) => {
      if (BuyRef.current && !BuyRef.current.contains(event.target as Node)) {
        setIsBuyingOpen(false)
      }
      if (SellRef.current && !SellRef.current.contains(event.target as Node)) {
        setIsSellingOpen(false)
      }
    },
    [BuyRef, SellRef]
  )

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [handleClickOutside])

  useEffect(() => {
    document.body.style.overflow = isBuying || isSelling ? 'hidden' : ''
  }, [isBuying, isSelling])

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
      className='relative md:pt-40 md:pb-28 py-20 overflow-hidden z-1'
      id='Inicio'>
      <div className='container px-4 mx-auto'>
        <div className='flex flex-col'>
          <motion.div {...leftAnimation} className='w-full'>

            {/* Antes*/}
            {/* <h1 className='text-5xl md:text-7xl font-bold text-center text-white mb-18 leading-tight'>
              <span className='text-primary'>Unlock</span> Your Voice. Speak <span className='text-primary'>English</span>. Feel Different
            </h1> */}
            {/* Termina Antes*/}

            {/* Aqui estoy cambiando*/}
            <h1 className='text-5xl md:text-7xl font-bold text-center text-white mb-2 leading-tight'>
              <span className='text-primary'>Welcome to</span> Sainge Club.
            </h1>            
            <h1 className='text-5xl md:text-5xl font-bold text-center text-white mb-18 leading-tight'>
              <span className='text-primary'> Leisure activities </span>outside in English.
            </h1>
            {/* Aqui termina lo que estoy cambiando*/}


            {/* Antes*/}
            {/* <div className='flex gap-8 mb-18 items-center lg:justify-start justify-center mb-5 mt-24'>
              <p className='text-white sm:text-28 text-18 mb-0'>
                Un curso de inglés para adultos que <span className='text-primary'>combina</span> expresión oral, juegos, terapia lingüística y 
                <span className='text-primary'> libertad</span>.
              </p>
              <p className='text-white sm:text-28 text-18 mb-0'>
                Ideal para profesionales sin tiempo, pero con <span className='text-primary'>ganas de hablar</span> y sentirse 
              <span className='text-primary'> seguros</span>.
              </p>
            </div> */}
            {/* Termina Antes*/}


            {/* Aqui estoy cambiando*/}
            <div className="flex flex-col gap-8 mb-18 items-center justify-center mb-5 mt-24">
              <p className='text-white sm:text-28 text-18 mb-0 text-center'>
                What if the problem isn’t <span className='text-primary'>English… </span> but how you use it?
              </p>
              <p className='text-white sm:text-28 text-18 mb-0 text-center'>
                English is not complicated, we think the hardest part is using it to <span className='text-primary'>connect </span>with people, places, new jobs and even better salaries.
              </p>
            </div>
            {/* Aqui termina lo que estoy cambiando*/}


            <div className='flex flex-col sm:flex-row gap-6 justify-center'>
              <button
                className='bg-primary border border-primary rounded-lg text-21 font-medium hover:bg-transparent hover:text-primary text-darkmode py-2 px-7 z-50'
                onClick={() => setIsBuyingOpen(true)}>
                {/* Ver Demo Gratis */}
                Free DEMO
              </button>

            {/* Antes sin después*/}
              {/* <button
                className='bg-transparent border border-primary rounded-lg text-21 font-medium hover:bg-primary hover:text-darkmode text-primary py-2 px-7'
                onClick={() => setIsSellingOpen(true)}>
                Empezar Experiencia
              </button> */}
            {/* Termina Antes sin después*/}

            </div>
          </motion.div>
        </div>
        {/* <CardSlider /> */}
      </div>
      <div className='absolute w-50 h-50 bg-linear-to-bl from-tealGreen from-50% to-charcoalGray to-60% blur-400 rounded-full -top-64 -right-14 -z-1'></div>

      {/* Modals for Buy and Sell */}
      {isBuying && (
        <div className='fixed top-0 left-0 w-full h-full bg-black/50 flex items-center justify-center z-50'>
          <div
            ref={BuyRef}
            className='relative w-full max-w-md overflow-hidden rounded-lg px-8 pt-14 pb-8 z-999 text-center bg-dark_grey/90 backdrop-blur-md'>
            <button
              onClick={() => setIsBuyingOpen(false)}
              className='absolute top-0 right-0 mr-8 mt-8 dark:invert'
              aria-label='Close Buy Modal'>
              <Icon
                icon='tabler:currency-xrp'
                className='text-white hover:text-primary text-24 inline-block me-2'
              />
            </button>
            <BuyCrypto />
          </div>
        </div>
      )}
      {isSelling && (
        <div className='fixed top-0 left-0 w-full h-full bg-black/50 flex items-center justify-center z-50'>
          <div
            ref={SellRef}
            className='relative w-full max-w-md overflow-hidden rounded-lg px-8 pt-14 pb-8 z-999 text-center bg-dark_grey/90 backdrop-blur-md'>
            <button
              onClick={() => setIsSellingOpen(false)}
              className='absolute top-0 right-0 mr-8 mt-8 dark:invert'
              aria-label='Close Sell Modal'>
              <Icon
                icon='tabler:currency-xrp'
                className='text-white hover:text-primary text-24 inline-block me-2'
              />
            </button>
            <SellCrypto />
          </div>
        </div>
      )}
    </section>
  )
}

export default Hero
