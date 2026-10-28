import { useState } from 'react';
import { Lightbox, type Galeria } from './components/Lightbox';
import { NavBar } from './components/NavBar';
import { useReveal } from './hooks/useReveal';
import { Rodape } from './sections/Rodape';
import { Contato, Hero, ProjetoCaju, Projetos, Sobre } from './sections/Secoes';

export default function App() {
  const [galeria, setGaleria] = useState<Galeria | null>(null);
  useReveal();

  return (
    <>
      <a href="#conteudo" className="skip">
        Pular para o conteúdo
      </a>
      <NavBar />
      <Hero />
      <main id="conteudo">
        <Sobre abrir={setGaleria} />
        <ProjetoCaju abrir={setGaleria} />
        <Projetos abrir={setGaleria} />
        <Contato />
      </main>
      <Rodape />
      <Lightbox galeria={galeria} onChange={setGaleria} />
    </>
  );
}
