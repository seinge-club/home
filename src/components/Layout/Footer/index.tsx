import React, { FC } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Icon } from '@iconify/react'
import Logo from '../Header/Logo'

const Footer: FC = () => {
  return (
    <footer className='pt-16 bg-darkmode'>
      <div className='container px-4'>
        <div className='flex flex-col items-center justify-center pb-16'>
          <Logo width={220} height={90} className="w-56 h-auto mx-auto invert brightness-0 opacity-80" />
          <div className='flex gap-6 items-center mt-8 relative z-1 justify-center'>
            <Link href='https://wa.me/593958758134' className='group'>
              <Icon
                icon='fa6-brands:whatsapp'
                width='24'
                height='24'
                className='text-white group-hover:text-primary'
              />
            </Link>
            <Link href='https://www.instagram.com/sainge_club?igsh=bHpnbTh1Zjk0a3lr' className='group'>
              <Icon
                icon='fa6-brands:instagram'
                width='24'
                height='24'
                className='text-white group-hover:text-primary'
              />
            </Link>
            <Link href='https://www.tiktok.com/@sainge_club?_t=ZM-8yEEPz16VCX&_r=1' className='group'>
              <Icon
                icon='fa6-brands:tiktok'
                width='24'
                height='24'
                className='text-white group-hover:text-primary'
              />
            </Link>
          </div>
          <div className='w-full max-w-lg mt-12 flex flex-col items-center'>
            <h3 className='text-white text-24 font-medium text-center'>Información</h3>
            <p className='text-muted/40 text-18 mt-5 text-center'>
              Solicita información
              <br /> ingresando tu correo electrónico
            </p>
            <div className='relative w-full'>
              <input
                type='email'
                name='mail'
                id='mail'
                placeholder='Enter Email'
                className='bg-transparent border border-dark_border/60 py-4 text-white rounded-lg w-full mt-6 px-6'
              />
              <Icon
                icon='tabler:send'
                width='24'
                height='24'
                className='text-primary absolute right-7 bottom-4'
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
