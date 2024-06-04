import React from 'react';


function About() {
  return (
    <div>
      <h1>About us</h1>
      <h3>Sobre o site</h3>
      <p>Bem-vindo ao nosso buscador de drinks! Somos um grupo de estudantes apaixonados por tecnologia e mixologia, e desenvolvemos esta plataforma como parte da disciplina de Front End III, utilizando as mais recentes tecnologias em React e TypeScript. Nosso objetivo é oferecer uma experiência agradável e intuitiva para todos os entusiastas de coquetéis, desde iniciantes até bartenders experientes. Aqui, você encontrará uma ampla variedade de receitas de drinks, cuidadosamente organizadas e fáceis de seguir. Nossa missão é tornar a arte da coquetelaria acessível a todos, permitindo que você explore e descubra novos sabores com facilidade. Agradecemos por visitar nosso site e esperamos que ele inspire muitas criações deliciosas. Saúde!</p>
    </div>
  );
}

interface Grupo {
  mat: number;
  nome: string;
  github: string;
  imagem: string;
};

const ListaGrupo: React.FC = () => {

  const grupo: Grupo[] = [
    { mat: 2022211510076, nome: "Beatriz Falcão", github: "https://github.com/beatrizfalcao3", imagem: "https://avatars.githubusercontent.com/u/110911524?v=4" },
    { mat: 2022211510037, nome: "Bruna Souza", github: "https://github.com/brunamagalhaesdesouza", imagem: "https://avatars.githubusercontent.com/u/117234210?v=4" },
    { mat: 2022211510002, nome: "Helcius Cabral", github: "https://github.com/helcius", imagem: "https://avatars.githubusercontent.com/u/114032954?v=4" },
    { mat: 2022211510072, nome: "Ingrid Freitas", github: "https://github.com/ingridhfreitas", imagem: "https://avatars.githubusercontent.com/u/123700926?v=4" },
    { mat: 2022211510027, nome: "Paula Mota", github: "https://github.com/motapaula", imagem: "https://avatars.githubusercontent.com/u/116240549?v=4" },
  ];

  return (
    <ul>
      {grupo.map((membro) => (
        <li key={membro.mat}>
          <a href={membro.github}>
          <img src={membro.imagem} alt={membro.nome} /></a>
          <h2>{membro.nome}</h2>
        </li>
      ))}
    </ul>
  );
};

const AboutPage: React.FC = () => (
  <div>
    <About />
    <ListaGrupo />
  </div>
);

export default AboutPage;



