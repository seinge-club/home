import React from 'react'
import Inicio from '@/components/Home/1.Inicio'
import Imagen1 from '@/components/Home/5.Imagen1'
import SeingeClub from '@/components/Home/2.SeingeClub'
import DemoClass from '@/components/Home/3.DemoClass'
import Prueba from '@/components/Home/4.Prueba'
import Testimonios from '@/components/Home/6.Testimonios'
import Perks from '@/components/Home/perks'
import { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'Sainge Club',
}

export default function Home() {
  return (
    <main>
      <Inicio />
      <SeingeClub />
      <DemoClass />
      {/* <Imagen1 /> */}
      <Prueba />
      <Testimonios />
      {/* <Perks /> */}
    </main>
  )
}
