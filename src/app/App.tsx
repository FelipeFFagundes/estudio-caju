import { NavBar } from './components/NavBar';
import { useReveal } from './hooks/useReveal';
import { Rodape } from './sections/Rodape';
import { Contato, Hero, ProjetoCaju, Projetos, Sobre } from './sections/Secoes';

export default function App() {
  useReveal();

  return (
    <>
      <a href="#conteudo" className="skip">
        Pular para o conteúdo
      </a>
      <NavBar />
      <Hero />
      <main id="conteudo">
        <Sobre />
        <ProjetoCaju />
        <Projetos />
        <Contato />
      </main>
      <Rodape />
    </>
  );
}
