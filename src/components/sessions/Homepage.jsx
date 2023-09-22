import Typewriter from "typewriter-effect";
import { BsDribbble, BsGithub, BsLinkedin } from "react-icons/bs";
import Avatar from "../Avatar";
import LinksAlt from "../LinksAlt";

export default function Homepage(params) {
  return (
    <main
      className="px-24 md:px-0 py-64 justify-between items-center flex gap-32"
      id="homepage"
    >
      <div className="md:text-center md:items-center text-left flex flex-col gap-12" id="conteudo">
        <h1>Vamos trabalhar juntos<span className="text-royalblue-700">.</span></h1>
        <p className="text-zinc-500">
          Opa! Prazer, Sou o
          <span className="text-royalblue-700 relative -top-[24px] md:left-[84px] md:-top-[18px] left-[136px]">
            <Typewriter
              options={{
                strings: ["Guilherme", "Delarry"],
                autoStart: true,
                loop: true,
              }}
            />
          </span>
          Tenho 20 anos e tô mandando bala na graduação de Ciências da
          Computação na UERJ 👨🏻‍💻. Amo tecnologia e sempre busco aprender mais
          sobre programação. Vou aproveitar tudo que a faculdade tem pra me
          oferecer e estou muito animado pra me envolver em projetos incriveis.
        </p>
        <div className="flex gap-8" id="social_media">
          <LinksAlt
            link="https://github.com/Delarry021"
            icone={BsGithub}
            texto="Github"
          />
          <LinksAlt
            link="https://www.linkedin.com/in/guilherme-delarry-510699245/"
            icone={BsLinkedin}
            texto="Linkedin"
          />
          <LinksAlt
            link="https://dribbble.com/Delarry"
            icone={BsDribbble}
            texto="Dribbble"
          />
        </div>
      </div>
      <div className="md:hidden" id="avatar">
        <Avatar tamanho={400} />
      </div>
    </main>
  );
}
