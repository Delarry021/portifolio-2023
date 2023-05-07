import { AiFillHtml5 } from 'react-icons/ai'
import { SiCss3, SiJavascript, SiReact, SiTailwindcss } from 'react-icons/si'
import { FaFigma } from 'react-icons/fa'
import { DiSass } from 'react-icons/di'
import Ling from '../buttons/linguagens'


export default function Talentos(){
    return(
        <section data-aos="fade-up" id='talentos' className='my-96 text-center flex flex-col gap-16 items-center'>
        <h1 className='text-zinc-700 dark:text-zinc-50'>Talentos</h1>
        <p className='text-zinc-600 dark:text-zinc-500'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur quisquam eligendi odit? A, magnam quos amet blanditiis optio beatae reprehenderit perferendis libero earum laudantium inventore tenetur, eum sequi. Eveniet, nobis.</p>
        <ul className=
        {`
          flex sm:flex-wrap sm:justify-center sm:w-10/12 gap-16 px-8 py-8 items-center justify-between rounded-lg
          border dark:border-zinc-800 border-zinc-300
          dark:text-zinc-50 text-zinc-700
        `}>
          <Ling linguagem="HTML5"><AiFillHtml5 size={55}></AiFillHtml5></Ling>
          <Ling linguagem="CSS3"><SiCss3 size={45}></SiCss3></Ling> 
          <Ling linguagem="Javascript"><SiJavascript size={45}></SiJavascript></Ling> 
          <Ling linguagem="React"><SiReact size={48}></SiReact></Ling>
          <Ling linguagem="Tailwind CSS"><SiTailwindcss size={48}></SiTailwindcss></Ling>
          <Ling linguagem="Sass"><DiSass size={48}></DiSass></Ling>
          <Ling linguagem="Figma"><FaFigma size={40}></FaFigma></Ling> 
        </ul>
      </section>
    )
}