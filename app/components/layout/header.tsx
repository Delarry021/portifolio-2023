import Image from "next/image"
import BotaoOne from "../buttons/button-one"
import { ColorChange } from "../color-change/colorChange"

export default function Header() {
    return(
        <header className=
        {`
            dark:bg-zinc-900 dark:bg-opacity-70
            bg-zinc-100 bg-opacity-70
            dark:border-b-zinc-800 border-b-zinc-300 border-b
            backdrop-blur-sm
            fixed z-20 top-0 left-0 w-full
            flex items-center justify-between
            py-4 px-16
        `}>
      <p className="dark:text-zinc-50 text-zinc-700 whitespace-nowrap font-bold">Guilherme <span className="text-royalblue-400">Delarry</span></p>
        <ul className='flex gap-4'>
          <BotaoOne link={'#homepage'} texto={'Início'}/>
          <BotaoOne link={'#projetos'} texto={'Projetos'}/>
          <BotaoOne link={'#talentos'} texto={'Talentos'}/>
          <BotaoOne link={'#contato'} texto={'Contato'}/>
          <ColorChange/>
        </ul>
      </header>
    )
}