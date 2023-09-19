import Header from '@/components/sessions/Header'
import Homepage from '@/components/sessions/Homepage'
import Projects from '@/components/sessions/Projects'
import Talents from '@/components/sessions/Talents'
import Contact from '@/components/sessions/Contact'
import Footer from '@/components/sessions/Footer'

import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className='bg-zinc-100 text-zinc-950' id="app">
      <Header/>
      <Homepage/>
      <Projects/>
      <Talents/>
      <Contact/>
      <Footer/>
    </div>
  )
}
