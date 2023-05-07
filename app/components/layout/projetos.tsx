import Projeto from "../projeto/projeto";

export default function Projetos(){
    
    return(
        <section data-aos="fade-up" id='projetos' className='text-center flex flex-col gap-24 items-center justify-center'>
            <h1 className='text-zinc-700 dark:text-zinc-50 mb-32'>Meus projetos</h1>
            <Projeto Titulo={'Calculadora simples'} Sumario={'Resumo simples do projeto'}/>
            <Projeto Titulo={'Calculadora simples'} Sumario={'Resumo simples do projeto'}/>
            <Projeto Titulo={'Calculadora simples'} Sumario={'Resumo simples do projeto'}/>
            <Projeto Titulo={'Calculadora simples'} Sumario={'Resumo simples do projeto'}/>                                    
        </section>
    )
}