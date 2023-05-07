'use client';

import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin']})

import Header from './components/layout/header';
import Homepage from './components/layout/homepage';

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'
import Talentos from './components/layout/talentos';
import Footer from './components/layout/footer';
import Contatos from './components/layout/contatos';
import Projetos from './components/layout/projetos';

export default function Index() {

  useEffect(() => {
    AOS.init({duration:1500});
  }, [])


  return (
    <main className={`flex flex-col justify-center ${inter.className}`}>
      <Header/>
      <Homepage/>
      <Projetos/>
      <Talentos/>
      <Contatos/>
      <Footer/>
    </main>
  )
}
