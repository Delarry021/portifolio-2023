import TalentsCards from "./TalentsCards";
import { AiFillHtml5 } from "react-icons/ai";
import { IoLogoCss3 } from "react-icons/io"
import { TbBrandNextjs } from "react-icons/tb"
import {
  BiLogoJavascript,
  BiLogoFigma,
  BiLogoTailwindCss,
} from "react-icons/bi";
import { SiAdobephotoshop } from "react-icons/si"

export default function Talents(params) {
  return (
    <section
      className="py-64 text-center flex flex-col justify-center place-items-center gap-16"
      id="talentos"
    >
      <h1>Talentos</h1>
      <p className="text-zinc-600">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur
        quisquam eligendi odit? A, magnam quos amet blanditiis optio beatae
        reprehenderit perferendis libero earum laudantium inventore tenetur, eum
        sequi. Eveniet, nobis.
      </p>
      <ul className="border border-solid border-zinc-300 p-16 flex justify-center items-center gap-16">
        <TalentsCards icone={AiFillHtml5} texto="HTML5"/>
        <TalentsCards icone={IoLogoCss3} texto="CSS3"/>
        <TalentsCards icone={BiLogoJavascript} texto="Javascript" />
        <TalentsCards icone={TbBrandNextjs} texto="Next.JS" />
        <TalentsCards icone={BiLogoTailwindCss} texto="Tailwind Css"/>
        <TalentsCards icone={BiLogoFigma} texto="Figma"/>
        <TalentsCards icone={SiAdobephotoshop} texto="Photoshop" />
      </ul>
    </section>
  );
}
