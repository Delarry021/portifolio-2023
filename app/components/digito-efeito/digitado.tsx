import Typewriter from 'typewriter-effect';

export default function Digitado(){
    return (
        <div className='text-royalblue-400 -translate-y-24 sm:-translate-y-12'>
            <div className='flex sm:items-center sm:justify-center gap-2'>
            <p className='text-zinc-500 wrap'>Opa! Prazer, Sou o,</p>
            <Typewriter
                options={{
                    strings: ['Delarry :D'],
                    autoStart: true,
                    loop: true,
                }}
            />
            </div>
            <p className='text-zinc-500 wrap'>Tenho 20 anos e tô mandando bala na graduação de Ciências da Computação na UERJ 👨🏻‍💻. Amo tecnologia e sempre busco aprender mais sobre programação. Vou aproveitar tudo que a faculdade tem pra me oferecer e estou muito animado pra me envolver em <a className='text-royalblue-400 hover:text-royalblue-100 underline' href="#projetos">Projetos incríveis</a>.</p>
        </div>
      );
    }

    