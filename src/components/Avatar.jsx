import Image from "next/image";
import AvatarPerfil from "../../resources/avatar_imagem.svg";

export default function Avatar(props) {
  return (
    <div className="w-max">
      <div className="blur-[120px] bg-royalblue-500 absolute">
        <Image width={props.tamanho} src={AvatarPerfil} alt="Imagem Perfil" />
      </div>
      <div className="relative">
        <Image width={props.tamanho} src={AvatarPerfil} alt="Imagem Perfil" />
      </div>
    </div>
  );
}
