
import Image from "next/image";
import BotaoTwo from "../buttons/button-two";

export default function Contatos(){
    return(
      <section data-aos="fade-up" id='contato' className='my-96 flex flex-col gap-16 sm:gap-8 items-center justify-center'>
        <h1 className='dark:text-zinc-50 text-zinc-700 text-center'>
          Me fale sobre nosso próximo projeto</h1>
        <Image className='relative translate-x-60 -translate-y-20 sm:hidden' src={'/lines.svg'} height={256} width={256} alt={'linhas'}/>
        <Image className='relative translate-x-20 -translate-y-12 sm:block lg:hidden' src={'/lines.svg'} height={100} width={100} alt={'linhas'}/>
        <BotaoTwo link='mailto:delarryguilherme@gmail.com?subject=Portf%C3%B3lio' texto={'Entre em contato'}/>
      </section>
    )
}
