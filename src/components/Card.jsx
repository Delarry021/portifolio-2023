import Link from "next/link";
import AvatarPerfil from "../../resources/avatar_imagem.svg";
import Image from "next/image";

export default function Card(props) {
  return (
    <article className="w-[350px] mx-4 rounded-3xl bg-zinc-300 flex flex-col justify-between">
      <Image
        className=" rounded-t-3xl"
        src={props.imagem}
        height={350}
        width={350}
        alt="teste"
      />
      <div
        className="rounded-b-3xl flex flex-col text-left bg-zinc-200 px-8 py-4 text-royalblue-800"
        id="info"
      >
        <Link href={props.link} id="titulo">
          {props.titulo}
        </Link>
        <label htmlFor="titulo">{props.descricao}</label>
      </div>
    </article>
  );
};
