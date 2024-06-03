import ReactDOM from 'react-dom';
import '../App.css';
import '../index.css';

function About() {
  return (
    <div>
      <h1>About us</h1>
      <h3>Sobre o site</h3>
      <p>Bem-vindo ao nosso buscador de drinks! Somos um grupo de estudantes apaixonados por tecnologia e mixologia, e desenvolvemos esta plataforma como parte da disciplina de Front End III, utilizando as mais recentes tecnologias em React e TypeScript. Nosso objetivo é oferecer uma experiência agradável e intuitiva para todos os entusiastas de coquetéis, desde iniciantes até bartenders experientes. Aqui, você encontrará uma ampla variedade de receitas de drinks, cuidadosamente organizadas e fáceis de seguir. Nossa missão é tornar a arte da coquetelaria acessível a todos, permitindo que você explore e descubra novos sabores com facilidade. Agradecemos por visitar nosso site e esperamos que ele inspire muitas criações deliciosas. Saúde!</p>
    </div>
  );
};

interface Grupo {
  mat: number;
  nome: string;
  github: string;
  imagem: string;
};


const ListaGrupo = () => {

  const grupo: Grupo[] = [
    { mat: 2022211510076, nome: "Beatriz Falcão", github: "", imagem: "" },
    { mat: 2022211510037, nome: "Bruna Souza", github: "",imagem: "" },
    { mat: 2022211510002, nome: "Helcius Cabral", github: "", imagem: "" },
    { mat: 2022211510072, nome: "Ingrid Freitas", github: "", imagem: "" },
    { mat: 2022211510027, nome: "Paula Mota", github: "", imagem: "" },
  ];

  return (
    <ul>
      {grupo.map((grupo) => (
        <li key={grupo.mat}>
          <img src={grupo.imagem} alt={grupo.nome} />
          <h2>{grupo.nome}</h2>
        </li>
      ))}
    </ul>

  );
};

ReactDOM.render(<ListaGrupo />, document.getElementById("root"));

export default About;