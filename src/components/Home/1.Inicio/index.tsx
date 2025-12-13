'use client'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import DemoComponent from '../Demo/DemoComponent'
import RegistrationForm from './RegistrationForm'
import CardSlider from '../6.Testimonios/slider'
import { useEffect, useRef, useState, useCallback } from 'react'
import { Icon } from '@iconify/react/dist/iconify.js'
import { getAssetPath } from '@/utils/getPath';

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
    <section className='relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden min-h-screen flex items-center' id="Inicio">
      {/* Aurora Background Effect */}
      <div className='absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] pointer-events-none -z-10'>
        <Image src={getAssetPath('/images/new-design/aurora-blob.png')} alt='Aurora Effect' fill className='object-cover opacity-60 animate-pulse' />
      </div>

      <div className='container px-4 mx-auto relative z-10'>
        <div className='max-w-4xl mx-auto text-center relative'>

          <motion.div {...leftAnimation}>
            <h1 className='text-6xl md:text-8xl font-bold text-white mb-8 tracking-tighter leading-tight'>
              Speak with <br />
              <span className='text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-500'>Confidence.</span>
            </h1>

            <p className='text-xl md:text-2xl text-muted/80 mb-12 max-w-2xl mx-auto leading-relaxed'>
              We are not just a class. We are a social club where you learn by living.
              Join the revolution of authentic English learning.
            </p>

            <div className='flex flex-col sm:flex-row items-center justify-center gap-6'>
              <button
                onClick={() => setIsRegisterOpen(true)}
                className='group relative px-8 py-4 bg-primary rounded-full text-white font-semibold text-lg hover:shadow-[0_0_40px_rgba(255,59,48,0.5)] transition-all duration-300 transform hover:-translate-y-1'
              >
                Start Experience
                <div className='absolute inset-0 rounded-full bg-white/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity' />
              </button>

              <button
                onClick={() => setIsDemoOpen(true)}
                className='px-8 py-4 rounded-full text-white font-medium text-lg border border-white/10 hover:bg-white/5 transition-all flex items-center gap-2 group'
              >
                <span>Try Demo</span>
                <svg
                  className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </button>
            </div>
          </motion.div>
        </div>
      </div>

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
