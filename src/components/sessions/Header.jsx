import { BsFillMoonFill } from "react-icons/bs";
import Links from "../Links";
import Logo from "../Logo";

export default function Header() {
  return (
    <header className="
    z-10
    flex justify-between items-center p-8
    border border-solid border-zinc-200
    bg-zinc-100 bg-opacity-80 backdrop-blur-sm
    fixed w-full
    ">
      <Logo/>
      <ul className="md:hidden flex gap-8">
        <Links link="#homepage" texto="Homepage"/>
        <Links link="#projects" texto="Projetos" />
        <Links link="#talentos" texto="Talentos"/>
        <Links link="#contact" texto="Contact"></Links>

      </ul>
    </header>
  );
}
