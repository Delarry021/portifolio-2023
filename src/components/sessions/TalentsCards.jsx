export default function TalentsCards(props) {
  return (
    <li className="hover:scale-125 ease-in-out transition flex flex-col text-center justify-center items-center">
      <i>{<props.icone />}</i>
      <label>{props.texto}</label>
    </li>
  );
}
