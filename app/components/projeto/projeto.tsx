import Image from 'next/image';
import BotaoTwo from '../buttons/button-two';
import { Linguagem } from '../linguagens/linguagem';

interface ProjetoProps {
    Titulo: string;
    Sumario: string;
}

export default function Projeto(props: ProjetoProps) {
    return(
        <div className='flex border-b pb-52 sm:pb-24 border-b-zinc-300 dark:border-b-zinc-800 justify-between sm:px-16 w-full'>
            <div>
            <Image
            className='z-10'
            src={'/frame.svg'}
            alt={'frame monitor'}
            width={480}
            height={270}/>
            </div>
            <div className='flex flex-col justify-around lg:pl-12 lg:pr-72  sm:px-2 rounded-lg'>
                <div className='text-left flex flex-col sm:gap-0 gap-4'>
                    <h3 className='text-zinc-700 dark:text-zinc-50'>{props.Titulo}</h3>
                    <div className='flex items-center gap-8'>
                        <Linguagem texto={'React'}/>
                        <Linguagem texto={'React'}/>
                        <Linguagem texto={'React'}/>
                    </div>
                </div>
                <p className='text-left text-zinc-500'>{props.Sumario}</p>
                <BotaoTwo link={'#projetos'} texto={'Bora lá'}/>
            </div>
        </div>
    )
}
