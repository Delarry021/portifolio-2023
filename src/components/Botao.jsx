import Link from "next/link";

export default function Botao(props) {
  return (
    <Link href="mailto:delarryguilherme@gmail.com?subject=Portifólio">
      <button className="hover:scale-110 transition ease-in-out  duration-500 bg-royalblue-700 font-semibold py-4 px-8 rounded-2xl">
        {props.texto}
      </button>
    </Link>
  );
};
