import Inicio from '@/components/Home/1.Inicio'
import SeingeClub from '@/components/Home/2.SeingeClub'
import DemoClass from '@/components/Home/3.DemoClass'
import Testimonios from '@/components/Home/6.Testimonios'
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
      <Testimonios />
    </main>
  )
}
