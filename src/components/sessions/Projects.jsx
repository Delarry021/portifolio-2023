import Card from "../Card";
import Crud from "../../../resources/crud.png";
import Dicionario from "../../../resources/dicionario.png";
import Fuzzy from "../../../resources/fuzzy.png";

export default function Projects() {
  return (
    <section
      className="py-64 flex flex-col gap-24 text-zinc-900 text-center"
      id="projects"
    >
      <h1 className="self-center">Meus Projetos</h1>
      <div className="border border-solid border-zinc-200 p-32 flex justify-center">
        <div>
          <Card
            imagem={Crud}
            link="https://github.com/Delarry021/crud-basico-java"
            titulo="Crud Básico"
            descricao="Local Storage, JSON, Manipualação de arrays..."
          />
        </div>
        <div>
          <Card
            imagem={Dicionario}
            link="https://github.com/Delarry021/dicionario_estrangeiro"
            titulo="Consulta Dicionária"
            descricao="Assincronicidade, Fetch API, Arrays..."
          />
        </div>
        <div>
          <Card
            imagem={Fuzzy}
            link="https://github.com/Delarry021/pesquisador-fuzzy"
            titulo="Pesquisa Fuzzy"
            descricao="Fuse.js, Manipulação do DOM"
          />
        </div>
      </div>
    </section>
  );
}
