import Image from "next/image";
import Botao from "../Botao";
import Linhas from "../../../resources/linhas.svg"
import { AiFillMail } from "react-icons/ai";

export default function Contact(params) {
  return (
    <section
      className="py-64 mb-96 text-center place-items-center flex justify-center flex-col gap-16"
      id="contact"
    >
      <h1>Me fale sobre nosso próximo projeto</h1>
      <Image className="xl:hidden -translate-y-20 translate-x-60" src={Linhas} />
      <Botao icone={<AiFillMail />} texto="Entre em contato"/>
    </section>
  );
};
