import { contato, iconeDoPrograma, imagens, programas, projetos, servicos, sobre, socias } from '../data';
import type { Galeria } from '../components/Lightbox';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '../components/ui/carousel';

type Abrir = (g: Galeria) => void;

const delay = (ms: number) => ({ '--delay': `${ms}ms` }) as React.CSSProperties;

export function Hero() {
  return (
    <header id="inicio" className="hero">
      <img
        className="hero__img"
        src={imagens.quarto01}
        alt="Render de quarto com bancada iluminada, prateleiras e quadro abstrato"
        fetchPriority="high"
      />
      <div className="hero__content">
        <h1>Otimizando processos no seu escritório</h1>
        <p>Detalhamento de obra, detalhamento de marcenaria, modelagem 3D e render.</p>
        <a href="#projeto-caju" className="button button--light">
          Conheça nossos serviços
        </a>
      </div>
    </header>
  );
}

export function Sobre({ abrir }: { abrir: Abrir }) {
  return (
    <section id="sobre" className="section section--caju">
      <div className="container">
        <div className="section__intro section__intro--long" data-reveal>
          <h2>Sobre nós</h2>
          {sobre.map((p) => (
            <p key={p.slice(0, 20)}>{p}</p>
          ))}
        </div>
        <ul className="equipe">
          {socias.map((s, i) => (
            <li key={s.name} data-reveal style={delay(i * 90)}>
              <button
                type="button"
                className="zoom"
                aria-label={`Ampliar foto de ${s.name}`}
                onClick={() => abrir({ images: [s.image], index: 0, title: s.name })}
              >
                <img src={s.image} alt={`${s.name}, sentada ao lado de um piano`} loading="lazy" />
              </button>
              <h3>{s.name}</h3>
              <p>{s.bio}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function ProjetoCaju({ abrir }: { abrir: Abrir }) {
  return (
    <section id="projeto-caju" className="section">
      <div className="container">
        <div className="section__intro" data-reveal>
          <h2>Projeto Caju</h2>
          <p>
            Com o Projeto Caju, você ganha mais tempo para focar na captação de novos clientes,
            enquanto cuidamos do desenvolvimento técnico dos seus projetos.
          </p>
          <ul className="programas" aria-label="Programas que usamos">
            {programas.map((p) => {
              const icone = iconeDoPrograma(p);
              return (
                <li key={p}>
                  {icone && <img src={icone} alt="" />}
                  {p}
                </li>
              );
            })}
          </ul>
        </div>
        <ul className="servicos">
          {servicos.map((s, i) => (
            <li key={s.title} data-reveal style={delay(i * 90)}>
              <button
                type="button"
                className="frame zoom"
                aria-label={`Ampliar imagem de ${s.title}`}
                onClick={() => abrir({ images: [s.image], index: 0, title: s.title })}
              >
                <img src={s.image} alt={s.title} loading="lazy" />
              </button>
              <h3>{s.title}</h3>
              <p>{s.description}</p>
            </li>
          ))}
        </ul>
        <div className="center">
          <a href="#contato" className="button">
            Solicitar orçamento
          </a>
        </div>
      </div>
    </section>
  );
}

export function Projetos({ abrir }: { abrir: Abrir }) {
  return (
    <section id="projetos" className="section section--caju">
      <div className="container">
        <div className="section__intro" data-reveal>
          <h2>Nossos projetos</h2>
          <p>Uma vitrine das nossas últimas realizações.</p>
        </div>
        <ul className="projetos">
          {projetos.map((p) => (
            <li key={p.title} className="projeto" data-reveal>
              <Carousel className="projeto__galeria">
                <CarouselContent viewportClassName="h-full" className="h-full">
                  {p.images.map((img, i) => (
                    <CarouselItem key={img} className="h-full">
                      <button
                        type="button"
                        className="zoom projeto__slide"
                        aria-label={`Ampliar imagem ${i + 1} de ${p.title}`}
                        onClick={() => abrir({ images: p.images, index: i, title: p.title })}
                      >
                        <img src={img} alt={`${p.title}, imagem ${i + 1}`} loading="lazy" />
                      </button>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="left-3" />
                <CarouselNext className="right-3" />
              </Carousel>

              <div className="projeto__texto">
                <p className="projeto__categoria">{p.category}</p>
                <h3>{p.title}</h3>
                <p>{p.description}</p>
                <dl className="projeto__ficha">
                  <div><dt>Localização</dt><dd>{p.location}</dd></div>
                  <div><dt>Área</dt><dd>{p.area}</dd></div>
                  <div><dt>Ano</dt><dd>{p.year}</dd></div>
                  <div><dt>Cliente</dt><dd>{p.client}</dd></div>
                </dl>
                <ul className="projeto__tools" aria-label="Programas usados">
                  {p.tools.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function Contato() {
  const mensagem = 'Olá, Estúdio Caju! Gostaria de um orçamento.';
  return (
    <section id="contato" className="section">
      <div className="container container--narrow">
        <div className="section__intro" data-reveal>
          <h2>Entre em contato</h2>
          <p>Pronto para começar? Vamos conversar sobre como podemos ajudar no seu próximo projeto.</p>
        </div>
        <ul className="contatos" data-reveal>
          <li>
            <h3>WhatsApp</h3>
            <a href={`https://wa.me/${contato.whatsapp}?text=${encodeURIComponent(mensagem)}`} target="_blank" rel="noopener noreferrer">
              {contato.telefone}
            </a>
          </li>
          <li>
            <h3>E-mail</h3>
            <a href={`mailto:${contato.email}`}>{contato.email}</a>
          </li>
          <li>
            <h3>Localização</h3>
            <span>{contato.cidade}, Brasil</span>
          </li>
        </ul>
      </div>
    </section>
  );
}
