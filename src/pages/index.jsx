import Header from '@/components/sessions/Header'
import Homepage from '@/components/sessions/Homepage'
import Projects from '@/components/sessions/Projects'
import Talents from '@/components/sessions/Talents'
import Contact from '@/components/sessions/Contact'
import Footer from '@/components/sessions/Footer'

import { Inter } from 'next/font/google'
import Upper from '@/components/Upper'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className="min-w-fit bg-zinc-100 text-zinc-950" id="app">
      <Header />
      <div className='max-w-[1110px] m-auto'>
        <Homepage />
        <Projects />
        <Talents />
        <Contact />
      </div>
      <Footer />
      <Upper />
    </div>
  );
}
