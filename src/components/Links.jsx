import Link from "next/link";

export default function Links(props) {
  return (
    <li className="text-zinc-500 hover:text-royalblue-600">
      <Link
        className="
      p-4 rounded-lg
      border-solid
      border
      border-zinc-200
      hover:border-royalblue-600
      transition ease-in-out  duration-200
      "
        href={props.link}
        scroll={true}
      >
        {props.texto}
      </Link>
    </li>
  );
};
