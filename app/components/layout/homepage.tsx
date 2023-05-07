import Image from "next/image";

import { BsDribbble, BsGithub, BsLinkedin } from "react-icons/bs";
import Digitado from "../digito-efeito/digitado";
import SocialMedia from "../midia-social/social-media";

export default function Homepage(){
    return (
        <section data-aos="fade-up" id='homepage' className='flex sm:flex-col py-32 mt-48 sm:mt-0 mb-96 justify-between items-center'>
        <div className="flex items-start sm:items-center sm:text-center justify-center text-left z-10 flex-col gap-16 sm:gap-24 sm:px-12 w-1/2 sm:w-fit">
          <Image
        className={`
            rounded-full

            lg:-translate-y-20
            z-10
            shadow-royalblue-300
            shadow-xl
            sm:block
            lg:hidden
        `}
        src="/profile.svg"
        height={130}
        width={130}
        alt='Profile'
        />
            <h1 className='dark:text-zinc-50 text-zinc-700'>Vamos trabalhar juntos
            <Image
            className={`
            relative
            bottom-32
            sm:hidden
            left-96
            `}
            src="/emoji.gif"
            width={64}
            height={64}
            alt='emoji'
          /></h1>
            <Digitado/>
            <ul className='flex gap-8 -translate-y-24'>
            <SocialMedia
              link={'https://github.com/Delarry021'}
              texto={'Github'}
              icone={<BsGithub/>}            
            />
            <SocialMedia
              link={'https://www.linkedin.com/in/guilherme-delarry-510699245/'}
              texto={'Linkedin'}
              icone={<BsLinkedin/>}            
            />
            <SocialMedia
              link={'https://dribbble.com/Delarry'}
              texto={'Dribbble'}
              icone={<BsDribbble/>}            
            />
          </ul>
        </div>
        <Image
        className={`
            rounded-full
            w-fit
            h-fit
            -translate-y-20
            z-10
            shadow-royalblue-300
            shadow-++xl
            sm:hidden
        `}
        src="/profile.svg"
        height={500}
        width={500}
        alt='Profile'
        />

      </section>
    )
}
