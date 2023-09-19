import Link from "next/link";

export default function LinksAlt(props) {
  return (
    <li>
      <Link legacyBehavior href={props.link}>
        <a
          className="hover:border-royalblue-800 hover:text-royalblue-800 hover:-translate-y-8 transition ease-in-out  duration-500 bg-zinc-200 text-zinc-600 flex items-center justify-center gap-4 border border-solid border-zinc-400 rounded-xl px-4 py-2 w-fit"
          target="_blank"
          rel="noopener noreferrer"
        >
          {<props.icone />}
          {props.texto}
        </a>
      </Link>
    </li>
  );
}
